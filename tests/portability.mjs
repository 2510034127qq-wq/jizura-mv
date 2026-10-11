// Install and run a real copy with its own dependency tree, Unicode and spaces in its path.
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {root} from '../scripts/host.mjs';
const destination=path.join(root,'.test-work','独立位置 空格','jizura-mv');
await fs.mkdir(path.dirname(destination),{recursive:true});
await fs.mkdir(destination,{recursive:true});
for(const entry of await fs.readdir(root)){
  if(['node_modules','dist','output','.test-work','__pycache__'].includes(entry))continue;
  await fs.cp(path.join(root,entry),path.join(destination,entry),{recursive:true,filter:src=>!path.relative(root,src).split(path.sep).includes('__pycache__')});
}
async function run(exe,args){return new Promise((resolve,reject)=>{const p=spawn(exe,args,{cwd:destination,stdio:['ignore','pipe','pipe']});let output='';p.stdout.on('data',b=>output+=b);p.stderr.on('data',b=>output+=b);p.on('error',reject);p.on('exit',code=>code?reject(Error(output)):resolve(output));});}
console.log('Installing a separate dependency tree in relocated Skill');
if(process.platform==='win32')await run('powershell',['-NoProfile','-Command','npm.cmd ci --no-audit --no-fund']);else await run('npm',['ci','--no-audit','--no-fund']);
await run(process.execPath,['scripts/build.mjs']);
const query=JSON.parse(await run(process.execPath,['scripts/cli.mjs','query','--id','layout.center']));assert.equal(query.results[0].id,'layout.center');
await run(process.execPath,['scripts/cli.mjs','create','--spec','examples/storyboard.json','--out','output/portable.jizura.json']);
await run(process.execPath,['scripts/cli.mjs','enhance','--project','output/portable.jizura.json','--seed','42','--out','output/portable-enhanced.jizura.json']);
await run(process.execPath,['scripts/cli.mjs','render','--project','output/portable-enhanced.jizura.json','--out','output/portable.mp4','--from','0','--to','1']);
await run(process.execPath,['scripts/cli.mjs','preview','--project','output/portable.jizura.json','--out','output/portable.png','--time','.8']);
const editor=spawn(process.execPath,['scripts/cli.mjs','editor','--project','output/portable-enhanced.jizura.json','--port','0'],{cwd:destination,stdio:['ignore','pipe','pipe']});
try{
  const url=await new Promise((resolve,reject)=>{let text='';editor.stdout.on('data',b=>{text+=b;const m=text.match(/http:\/\/127\.0\.0\.1:\d+\S*/);if(m)resolve(m[0]);});editor.on('error',reject);editor.on('exit',c=>reject(Error('Editor exited '+c)));});
  const page=await fetch(url);assert(page.ok);assert.match(await page.text(),/agent\.js/);
  const project=await (await fetch(new URL('/project.json',url))).json();assert.equal(project.title,'曙光 / Dawn');
  assert(project.agent.layers.some(l=>l.generator==='native-enhance'));
  const video=await fs.stat(path.join(destination,'output/portable.mp4'));assert(video.size>1000);
  const report={date:new Date().toISOString(),copiedSource:path.relative(root,destination),separateNpmInstall:true,componentQuery:true,projectCreation:true,nativeRandomEnhancement:true,headlessMP4:true,previewPNG:true,editorHTTP:true,projectHTTP:true,originalPathRequired:false,videoBytes:video.size};
  await fs.mkdir(path.join(root,'output/acceptance'),{recursive:true});await fs.writeFile(path.join(root,'output/acceptance/portability.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{editor.kill();}
