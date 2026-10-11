// Download the exact original family/weight specs and every Unicode subset, with OFL notices.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {root,session} from './host.mjs';
import {build} from './build.mjs';
const dir=path.join(root,'assets/fonts');await fs.mkdir(dir,{recursive:true});
const manifestFile=path.join(dir,'manifest.json');
try{await fs.access(manifestFile);}catch{await fs.writeFile(manifestFile,JSON.stringify({specs:{},files:{},licenses:{}}));}
await build();
const specs=await session(page=>page.evaluate(()=>[...new Set([
  ...Object.values(J.FONTS).map(f=>f.gf),
  ...Object.values(J.LANG_FACES).flatMap(l=>[l.sans.gf,l.serif.gf,...Object.values(l.map).map(f=>f.gf)]),
  'Noto+Sans+JP:wght@100..900','Noto+Serif+JP:wght@200..900'
].filter(Boolean))]));
const manifest=JSON.parse(await fs.readFile(manifestFile,'utf8'));manifest.source='https://fonts.googleapis.com/css2';
const ua='Mozilla/5.0 Chrome/130.0.0.0 Safari/537.36';
async function get(url){for(let i=0;i<4;i++){try{const r=await fetch(url,{headers:{'User-Agent':ua},signal:AbortSignal.timeout(90000)});if(!r.ok)throw Error(r.status+' '+url);return r;}catch(e){if(i===3)throw e;}}}
const pending=new Map();let completed=0;
async function font(url){
  if(pending.has(url))return pending.get(url);
  const task=(async()=>{
    const name=crypto.createHash('sha256').update(url).digest('hex').slice(0,24)+path.extname(new URL(url).pathname);
    let data;try{data=await fs.readFile(path.join(dir,name));}catch{data=Buffer.from(await (await get(url)).arrayBuffer());await fs.writeFile(path.join(dir,name),data);}
    manifest.files[name]={url,bytes:data.length,sha256:crypto.createHash('sha256').update(data).digest('hex')};return name;
  })();pending.set(url,task);return task;
}
for(const spec of specs){
  const key=crypto.createHash('sha256').update(spec).digest('hex').slice(0,16)+'.css';
  if(!manifest.specs[spec]){
    let css=await (await get('https://fonts.googleapis.com/css2?family='+spec+'&display=swap')).text();
    const urls=[...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m=>m[1]))];
    const mapped=new Map();
    // Keep downloads bounded on Windows, especially the CJK Unicode subsets.
    for(let i=0;i<urls.length;i+=8)await Promise.all(urls.slice(i,i+8).map(async u=>mapped.set(u,await font(u))));
    css=css.replace(/url\((https:[^)]+)\)/g,(_,u)=>`url(${mapped.get(u)})`);
    await fs.writeFile(path.join(dir,key),css);manifest.specs[spec]=key;
  }
  const family=spec.split(':')[0].replaceAll('+',' '),slug=({'M PLUS Rounded 1c':'roundedmplus1c'}[family])||family.toLowerCase().replaceAll(' ','');
  if(!manifest.licenses[family]){
    const url=`https://raw.githubusercontent.com/google/fonts/main/ofl/${slug}/OFL.txt`;
    const license=await (await get(url)).text();const file=slug+'-OFL.txt';await fs.writeFile(path.join(dir,file),license);manifest.licenses[family]={url,file};
  }
  await fs.writeFile(manifestFile,JSON.stringify(manifest,null,2));
  console.log(`${++completed}/${specs.length} ${family} (${Object.keys(manifest.files).length} font files)`);
}
console.log('Exact local fonts vendored; no glyph subsetting or substitute fonts.');
