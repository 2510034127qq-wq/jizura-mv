import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(root,'node_modules/.browsers');
const {chromium}=await import('playwright');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.woff2':'font/woff2','.ttf':'font/ttf','.otf':'font/otf'};
export async function serve(port=0,routes={}){
  const server=http.createServer(async(req,res)=>{
    try{
      const url=new URL(req.url,'http://localhost'), rel=decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'dist/zh-hans/index.html';
      if(routes[url.pathname]!==undefined){res.setHeader('Content-Type','application/json; charset=utf-8');res.end(routes[url.pathname]);return;}
      const file=path.resolve(root,rel), relative=path.relative(root,file);
      if(relative.startsWith('..') || path.isAbsolute(relative) || relative.split(path.sep).some(s=>s.startsWith('.')) || relative.startsWith('node_modules')){res.writeHead(403);res.end();return;}
      res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
      res.setHeader('Cache-Control','no-cache');res.end(await fs.readFile(file));
    }catch{res.writeHead(404);res.end('Not found');}
  });
  await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',resolve);});
  return {server,url:`http://127.0.0.1:${server.address().port}`, close:()=>new Promise(r=>server.close(r))};
}
export async function session(fn,{offline=true}={}){
  const host=await serve();let browser;
  try{
    const downloadsPath=path.join(root,'output/.browser-downloads');await fs.mkdir(downloadsPath,{recursive:true});
    const opt={headless:true,downloadsPath,args:['--disable-background-timer-throttling']};
    if(process.env.JIZURA_BROWSER) opt.executablePath=process.env.JIZURA_BROWSER;
    else{
      try{await fs.access(chromium.executablePath());}
      catch{for(const candidate of process.platform==='win32'?['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe']:[]){try{await fs.access(candidate);opt.executablePath=candidate;break;}catch{}}}
    }
    browser=await chromium.launch(opt);
    const page=await browser.newPage();
    if(offline) await page.route('**/*',r=>r.request().url().startsWith(host.url)?r.continue():r.abort());
    await page.goto(host.url+'/dist/render.html');
    await page.waitForFunction(()=>window.J?.Agent && window.J?.localFontsReady);
    await page.evaluate(()=>J.localFontsReady);
    return await fn(page,host,browser);
  }finally{if(browser) await browser.close();await host.close();}
}
