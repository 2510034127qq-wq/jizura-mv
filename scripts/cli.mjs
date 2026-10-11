#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import {root,serve,session} from './host.mjs';
import {build} from './build.mjs';
const args=process.argv.slice(2),command=args.shift()||'help',o={};
while(args.length){const k=args.shift();if(!k.startsWith('--'))throw Error('Expected --option, got '+k);o[k.slice(2)]=args[0] && !args[0].startsWith('--')?args.shift():true;}
const json=async f=>JSON.parse((await fs.readFile(path.resolve(f),'utf8')).replace(/^\uFEFF/,''));
async function save(f,value){await fs.mkdir(path.dirname(path.resolve(f)),{recursive:true});await fs.writeFile(path.resolve(f),typeof value==='string'?value:JSON.stringify(value,null,2));console.log(path.resolve(f));}
function requireOption(key){if(typeof o[key]!=='string')throw Error('--'+key+' is required');return o[key];}
async function setup(){try{await fs.access(path.join(root,'dist/render.html'));}catch{await build();}}
async function readProject(){return json(requireOption('project'));}
let transferIndex=0;
async function transfer(page,blobExpression,out){
  const file=await fs.open(path.resolve(out),'w');
  const binding='jzBlock'+(++transferIndex);
  try{await page.exposeFunction(binding,async(data,position)=>{const b=Buffer.from(data,'base64');await file.write(b,0,b.length,position);});
    await page.evaluate(async({expression,binding})=>{const b=await Function('return '+expression)();for(let i=0;i<b.size;i+=524288)await window[binding](J.Agent.base64(await b.slice(i,i+524288).arrayBuffer()),i);},{expression:blobExpression,binding});
  }finally{await file.close();}
}
async function run(){
  if(command==='help'){
    console.log(`JIZURA single Skill CLI
query [--group layout|enter|hold|exit|decor|treat|bg|cam|fx|trans|style] [--search 关键词] [--id layout.center] [--limit 20] [--out catalog.json]
create --spec examples/storyboard.json --out movie.jizura.json [--lyrics lyrics.lrc] [--audio song.wav]
edit --project movie.jizura.json --operations edits.json --out revised.jizura.json
enhance --project movie.jizura.json --out enhanced.jizura.json [--seed 42] [--strength gentle|standard|dense] [--from 0 --to 5] [--exclude 1:0,2:0] [--report report.json]
clear-enhancement --project enhanced.jizura.json --out baseline.jizura.json
inspect --project movie.jizura.json [--out inspect.json]
render --project movie.jizura.json --out movie.mp4 [--format mp4|png|pngzip|layers] [--from 0 --to 5] [--clip 0:0] [--time 1] [--transparent] [--res 720] [--fps 24]
editor [--project movie.jizura.json] [--port 8765] [--lang zh-hans]
All paths are relative to the caller. Query needs no browser; create/edit/render use the exact shared Canvas runtime.`);return;
  }
  if(command==='query'){
    const cat=await json(path.join(root,'references/components.json'));
    let rows=[...cat.components,...cat.styles];
    if(o.id)rows=rows.filter(r=>r.id===o.id || r.key===o.id);
    if(o.group)rows=rows.filter(r=>r.group===o.group);
    if(o.search){const q=String(o.search).toLowerCase().split(/\s+/);rows=rows.filter(r=>q.every(s=>JSON.stringify(r).toLowerCase().includes(s)));}
    const result={total:rows.length,results:rows.slice(0,Number(o.limit||20))};if(o.out)await save(o.out,result);else console.log(JSON.stringify(result,null,2));return;
  }
  await setup();
  if(command==='editor'){
    const routes={};if(o.project)routes['/project.json']=JSON.stringify(await readProject());
    const host=await serve(Number(o.port||8765),routes), lang=o.lang||'zh-hans';
    if(!['ja','en','zh-hans','zh-hant','ko','id','vi'].includes(lang))throw Error('Unknown editor language');
    console.log(host.url+'/dist/'+(lang==='ja'?'':lang+'/')+'index.html'+(o.project?'?project=/project.json':''));
    console.log('Local editor running. Ctrl+C stops it.');return;
  }
  if(command==='create'){
    const project=o.spec?await json(o.spec):{};
    if(o.lyrics)project.lyrics=await fs.readFile(path.resolve(o.lyrics),'utf8');
    if(o.audio){const audio=await fs.readFile(path.resolve(o.audio));project.agent=project.agent||{};project.agent.assets=project.agent.assets||{};project.agent.assets.audio={name:path.basename(o.audio),mime:'application/octet-stream',data:audio.toString('base64')};}
    const out=await session(page=>page.evaluate(async p=>{const x=await J.Agent.prepare(p);return J.Agent.serialize(x.project,x.plan);},project));
    await save(requireOption('out'),out);return;
  }
  if(command==='edit'){
    const project=await readProject(),ops=await json(requireOption('operations'));
    const out=await session(page=>page.evaluate(async({p,ops})=>{const edited=J.Agent.edit(p,ops),x=await J.Agent.prepare(edited);return J.Agent.serialize(x.project,x.plan);},{p:project,ops}));
    await save(requireOption('out'),out);return;
  }
  if(command==='enhance' || command==='clear-enhancement'){
    const project=await readProject(),options={};
    for(const key of ['seed','strength','from','to'])if(o[key]!==undefined)options[key]=o[key];
    if(o.exclude)options.exclude=String(o.exclude).split(',');
    const result=await session(page=>page.evaluate(async({p,options,clear})=>{
      const prepared=await J.Agent.prepare(p);
      return clear?{project:J.Agent.clearEnhancement(prepared.project)}:J.Agent.enhance(prepared.project,options);
    },{p:project,options,clear:command==='clear-enhancement'}));
    await save(requireOption('out'),result.project);
    if(result.report){if(o.report)await save(o.report,result.report);console.log(JSON.stringify({seed:result.report.seed,strength:result.report.strength,addedCuts:result.report.addedCuts,eventCount:result.report.eventCount}));}
    return;
  }
  if(command==='inspect'){
    const p=await readProject();const result=await session(page=>page.evaluate(async p=>{const x=await J.Agent.prepare(p);return {title:x.project.title,seed:x.project.seed,style:x.project.style,aspect:x.project.aspect,duration:x.plan.duration,fps:x.plan.fps,lines:x.plan.lines,cuts:x.plan.cuts,events:x.plan.events,layers:x.project.agent.layers,locks:x.project.overrides,assets:{audio:x.project.agent.assets.audio?.name,fonts:x.project.agent.assets.fonts?.map(f=>f.key)}};},p));
    if(o.out)await save(o.out,result);else console.log(JSON.stringify(result,null,2));return;
  }
  if(command==='render' || command==='preview'){
    const p=await readProject(),format=command==='preview'?'png':o.format||'mp4',out=path.resolve(requireOption('out'));
    if(!['mp4','png','pngzip','layers'].includes(format))throw Error('Unknown format');
    if(format==='mp4' && o.transparent)throw Error('H.264 does not support alpha; use --format pngzip --transparent or --format layers');
    if(o.res)p.res=Number(o.res);if(o.fps)p.fps=Number(o.fps);
    await fs.mkdir(path.dirname(out),{recursive:true});
    await session(async page=>{
      const problems=[];page.on('console',m=>{if(['error','warning'].includes(m.type()) && !m.text().startsWith('Canvas2D: Multiple readback operations') && !m.text().startsWith('MP4 export attempt failed'))problems.push(m.text());});page.on('pageerror',e=>problems.push(e.message));
      await page.evaluate(async p=>{window.jz=await J.Agent.prepare(p);},p);
      const info=await page.evaluate(opts=>{
        const {plan,project}=window.jz;let range={t0:opts.from===undefined?0:Number(opts.from),t1:opts.to===undefined?plan.duration:Number(opts.to)};
        if(opts.clip){const [line,k]=opts.clip.split(':').map(Number),c=J.Agent.cutAtSlot(plan,line,k);if(!c)throw Error('Clip not found');range={t0:c.start,t1:c.end};}
        if(!(range.t0>=0 && range.t1>range.t0 && range.t1<=plan.duration))throw Error('Invalid render range');window.jz.range=range;return {...range,duration:range.t1-range.t0,fps:plan.fps,size:J.outputSize(project)};
      },o);
      let encoding=null;
      if(format==='mp4'){
        await page.exposeFunction('jzProgress',(v,msg)=>{if(v===1)console.log(msg);});
        const metadata=await page.evaluate(async()=>{
          const dir=await navigator.storage.getDirectory(),handle=await dir.getFileHandle('jizura-render.mp4',{create:true});
          const file=await handle.createWritable();
          const result=await J.exportMP4({...window.jz,file,onProgress:(v,msg)=>window.jzProgress(v,msg)});window.jzBlob=await handle.getFile();delete result.blob;return result;
        });
        await transfer(page,'window.jzBlob',out);encoding=metadata;console.log(JSON.stringify(metadata));
        if(metadata.audioWanted && metadata.audio!=='aac'){
          await page.evaluate(()=>{window.jzWav=J.audioWav(window.jz.audio.buffer,window.jz.range.t1-window.jz.range.t0,window.jz.range.t0);});
          await transfer(page,'window.jzWav',out+'.wav');encoding.wav=out+'.wav';
        }
      }else if(format==='png'){
        await page.evaluate(opts=>{const {plan,project}=window.jz,c=document.getElementById('render');[c.width,c.height]=J.outputSize(project);new J.Renderer().frame(c.getContext('2d'),plan,Number(opts.time??window.jz.range.t0),{scale:c.width/plan.W,transparent:!!opts.transparent});window.jzBlob=new Promise(r=>c.toBlob(r,'image/png'));},o);
        await transfer(page,'window.jzBlob',out);
      }else{
        await page.evaluate(async opts=>{window.jzBlob=await J.exportPNGZip({...window.jz,transparent:!!opts.transparent,layers:opts.format==='layers'});}, {...o,format});
        await transfer(page,'window.jzBlob',out);
      }
      if(problems.length)throw Error('Renderer reported problems: '+problems.join('\n'));
      await save(out+'.render.json',{...info,format,transparent:!!o.transparent,encoding,output:out});
    });console.log(out);return;
  }
  throw Error('Unknown command '+command);
}
run().catch(e=>{console.error(e.stack||e.message);process.exitCode=1;});
