import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {root,session} from '../scripts/host.mjs';
import {build} from '../scripts/build.mjs';
const output=path.join(root,'output/acceptance');await fs.mkdir(output,{recursive:true});
const report={date:new Date().toISOString(),checks:{}};
const read=async f=>JSON.parse((await fs.readFile(f,'utf8')).replace(/^\uFEFF/,''));
const log=(key,data)=>{report.checks[key]=data;console.log(key,JSON.stringify(data));};
async function cli(...args){return new Promise((resolve,reject)=>{const p=spawn(process.execPath,[path.join(root,'scripts/cli.mjs'),...args],{cwd:root,stdio:['ignore','pipe','pipe']});let text='';p.stdout.on('data',b=>text+=b);p.stderr.on('data',b=>text+=b);p.on('exit',code=>code?reject(Error(text)):resolve(text));p.on('error',reject);});}
await build();
const catalog=await read(path.join(root,'references/components.json')),baseline=await read(path.join(root,'references/upstream-components.json'));
const fontManifest=await read(path.join(root,'assets/fonts/manifest.json'));
for(const [name,meta] of Object.entries(fontManifest.files)){const file=await fs.readFile(path.join(root,'assets/fonts',name));assert.equal(crypto.createHash('sha256').update(file).digest('hex'),meta.sha256);}
for(const l of Object.values(fontManifest.licenses))assert.match(await fs.readFile(path.join(root,'assets/fonts',l.file),'utf8'),/OPEN FONT LICENSE/);
log('resources',{specs:Object.keys(fontManifest.specs).length,files:Object.keys(fontManifest.files).length,licenses:Object.keys(fontManifest.licenses).length,allHashesMatch:true});
await session(async page=>{
  const edge=await page.evaluate(async()=>{
    const raw={lyrics:'[00:00.00]Alpha\n[00:02.00]Beta',lang:'en',style:'noir',seed:19,timing:{offset:0,snap:false,lineTimes:{0:0,1:2},tail:.3},fx:{texture:0,chroma:0,glitch:0,hud:'off',flash:false},overrides:{0:{single:true,layout:'center',decor:[],bg:'none'},1:{single:true,layout:'center',decor:[],bg:'none',trans:'wipe'}},agent:{cuts:{'1:0':{start:2.05,end:4.4,text:'Beta',controls:{x:70}}},layers:[{id:'caption',start:0,end:5,z:1,opacity:.7,project:{lyrics:'Overlay',lang:'en',style:'noir',seed:32,timing:{offset:0,snap:false,lineScale:2},fx:{texture:0,chroma:0,glitch:0,hud:'off',flash:false},overrides:{0:{single:true,layout:'lowerThird',enter:'cut',exit:'cut',decor:[],bg:'none',cam:'push'}}}}]}};
    const {project}=await J.Agent.prepare(raw);
    const changed=J.Agent.edit(project,[{op:'line',line:1,time:2.2,text:'New lyric'}]),plan=J.plan(changed),cut=J.Agent.cutAtSlot(plan,1,0);
    const lineTimeApplied=Math.abs(cut.start-2.2)<.001,contentApplied=cut.text.includes('New') && changed.agent.cuts['1:0'].controls.x===70 && changed.lyrics.includes('[00:02.00]New lyric');
    // A main transition must not also transition or duplicate independent captions.
    const base=J.Agent.normalize({...raw,agent:{...raw.agent,cuts:{}}}),composed=J.plan(base),main={...composed,agentLayers:[]};
    const t=2.1,cv=document.createElement('canvas'),expected=document.createElement('canvas'),overlay=document.createElement('canvas');
    for(const c of [cv,expected,overlay]){c.width=480;c.height=270;}
    new J.Renderer().frame(cv.getContext('2d'),composed,t,{scale:.25});
    new J.Renderer().frame(expected.getContext('2d'),main,t,{scale:.25});
    new J.Renderer().frame(overlay.getContext('2d'),composed.agentLayers[0].plan,t,{scale:.25,transparent:true});
    const ctx=expected.getContext('2d');ctx.globalAlpha=.7;ctx.drawImage(overlay,0,0);
    const a=cv.getContext('2d').getImageData(0,0,480,270).data,b=ctx.getImageData(0,0,480,270).data;
    const overlayIndependentDuringTransition=a.every((v,i)=>v===b[i]);
    const bgLayer=J.Agent.clone(base);bgLayer.agent.layers[0].project.overrides[0].bg='seigaiha';bgLayer.agent.layers[0].project.agent={cuts:{'0:0':{controls:{opacity:0}}}};
    const withBG=J.plan(bgLayer);new J.Renderer().frame(cv.getContext('2d'),withBG,.8,{scale:.25});const bgPixels=cv.getContext('2d').getImageData(0,0,480,270).data;
    bgLayer.agent.layers[0].background=false;new J.Renderer().frame(expected.getContext('2d'),J.plan(bgLayer),.8,{scale:.25});const withoutBG=ctx.getImageData(0,0,480,270).data;
    const layeredBackgroundVisible=bgPixels.some((v,i)=>v!==withoutBG[i]);
    const layerLocked=J.Agent.edit(base,[{op:'lock-layer',id:'caption'}]);let layerLockRejected=false;try{J.Agent.edit(layerLocked,[{op:'layer',id:'caption',patch:{opacity:.2}}]);}catch{layerLockRejected=true;}
    const retained=J.Agent.edit(layerLocked,[{op:'cut',line:1,cut:0,patch:{controls:{x:15}}}]);
    const layerLockPreserved=layerLockRejected && JSON.stringify(retained.agent.layers)===JSON.stringify(layerLocked.agent.layers);
    return {lineTimeApplied,contentApplied,overlayIndependentDuringTransition,layeredBackgroundVisible,layerLockPreserved};
  });assert.deepEqual(edge,{lineTimeApplied:true,contentApplied:true,overlayIndependentDuringTransition:true,layeredBackgroundVisible:true,layerLockPreserved:true});log('editingAndLayerEdges',edge);
});
if(!process.argv.includes('--integration')) await session(async(page,host,browser)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(['warning','error'].includes(m.type()))errors.push(m.text());});
  const current=await page.evaluate(()=>({components:J.GROUP_KEYS.flatMap(g=>Object.entries(J.registry(g)).map(([key,d])=>({id:g+'.'+key,methods:Object.fromEntries(Object.entries(d).filter(([,v])=>typeof v==='function').map(([k,v])=>[k,v.toString().replaceAll('\r\n','\n')]))}))),styles:J.STYLE_ORDER.map(key=>({id:'style.'+key,key,group:'style',...J.STYLES[key]}))}));
  assert.deepEqual(current.styles,baseline.styles);assert.deepEqual(current.components.map(c=>c.id).sort(),baseline.components.map(c=>c.id).sort());
  for(const c of current.components)for(const [k,v] of Object.entries(c.methods))assert.equal(crypto.createHash('sha256').update(v).digest('hex'),baseline.components.find(x=>x.id===c.id).methods[k],c.id+'.'+k);
  log('completeness',{selectable:860,registered:current.components.length,styles:current.styles.length,allMethodsUnchanged:true});
  await page.evaluate(async()=>{J.setLang('ja');await J.ensureFonts('愛透明夜明けの色を覚えてるHello world0123456789No.REC',null);});
  const smoke=await page.evaluate(async()=>{
    const out={components:0,frames:0,pixelComparisons:0,styles:0,failures:[]};
    const cv=document.createElement('canvas'),a=document.createElement('canvas');const r=new J.Renderer(),original=new J.Agent.NativeRenderer();
    const test=(plan,id,times)=>{
      plan.fx.texture=0;cv.width=a.width=Math.round(plan.W*.125);cv.height=a.height=Math.round(plan.H*.125);
      for(const t of times){try{r.frame(cv.getContext('2d'),plan,t,{scale:.125});out.frames++;}catch(e){out.failures.push(id+': '+e.message);}}
      const t=times[1];original.frame(a.getContext('2d'),plan,t,{scale:.125});r.frame(cv.getContext('2d'),plan,t,{scale:.125});
      const A=a.getContext('2d').getImageData(0,0,a.width,a.height).data,B=cv.getContext('2d').getImageData(0,0,cv.width,cv.height).data;
      if(A.some((v,i)=>v!==B[i]))out.failures.push(id+': pixel mismatch');out.pixelComparisons++;
    };
    for(const g of J.GROUP_KEYS)for(const key of Object.keys(J.registry(g))){
      const d=J.registry(g)[key];
      for(const aspect of ['16:9','9:16','1:1']){
        const p=J.Agent.normalize({style:'noir',aspect});
        let plan;
        if(d.special)plan=J.Agent.nativePlan({...p,title:'TITLE',lyrics:'[interlude 3]\n夜明けの色を',timing:{...p.timing,offset:1.5}});
        else plan=J.previewPlan(p,g,key);
        test(plan,g+'.'+key+' '+aspect,g==='trans'?[1.22,1.35,1.5]:g==='fx'?[.05,.09,.18]:[.12,.8,2.23]);
      }
      out.components++;
      if(out.components%100===0)await new Promise(r=>setTimeout(r,0));
    }
    for(const style of J.STYLE_ORDER){test(J.Agent.nativePlan(J.Agent.normalize({style,extra:true,horror:true,lyrics:'夜明けの色を\n透明な声',timing:{offset:0,lineScale:.5}})),style,[.2,.8,1.6]);out.styles++;}
    return out;
  });assert.deepEqual(smoke.failures,[]);assert.equal(smoke.components,862);log('allComponentRendering',smoke);
  const invariants=await page.evaluate(async()=>{
    const p=J.Agent.normalize({lyrics:'曙光\n透明声音\n走向明天',lang:'zh-Hans',extra:true,seed:123,timing:{offset:0,lineTimes:{0:0,1:2,2:4},snap:false,tail:.2},overrides:{0:{single:true,layout:'center',decor:[],bg:'none'},1:{single:true},2:{single:true}},agent:{events:[{t:.4,type:'flash',amp:.5,dur:.1}]}});
    await J.Agent.prepare(p);let plan=J.plan(p),saved=J.Agent.serialize(p,plan);const reopened=J.plan(saved);
    const roundtrip=JSON.stringify(plan.cuts)===JSON.stringify(reopened.cuts) && JSON.stringify(plan.events)===JSON.stringify(reopened.events);
    const locked=J.Agent.edit(saved,[{op:'lock',line:0}]);let rejected=false;try{J.Agent.edit(locked,[{op:'cut',line:0,cut:0,patch:{params:{size:800}}}]);}catch{rejected=true;}
    const before=J.Agent.cutAtSlot(J.plan(locked),0,0),edited=J.Agent.edit(locked,[{op:'line',line:2,time:4.3},{op:'cut',line:1,cut:0,patch:{controls:{x:300},keyframes:[{path:'controls.x',keys:[{time:0,value:0},{time:2,value:300}]}]}}]);
    const after=J.Agent.cutAtSlot(J.plan(edited),0,0);
    const lockPreserved=JSON.stringify(before.params)===JSON.stringify(after.params) && before.layout===after.layout && before.seed===after.seed;
    const cv=document.createElement('canvas');cv.width=240;cv.height=135;
    const controls={...p,fx:{...p.fx,texture:0,glitch:0,chroma:0,hud:'off'},agent:{cuts:{'0:0':{controls:{opacity:0}}}}};
    new J.Renderer().frame(cv.getContext('2d'),J.plan(controls),.8,{scale:.125,transparent:true});
    const invisible=cv.getContext('2d').getImageData(0,0,240,135).data.every((v,i)=>i%4!==3||v===0);
    return {roundtrip,rejected,lockPreserved,invisible,keyframeMid:J.Agent.tween({easing:'linear',keys:[{time:0,value:0},{time:2,value:300}]},1)};
  });assert.deepEqual(invariants,{roundtrip:true,rejected:true,lockPreserved:true,invisible:true,keyframeMid:150});log('projectAndLocks',invariants);
  assert.deepEqual(errors.filter(e=>!e.startsWith('Canvas2D: Multiple readback operations')),[]);
});
// Real audio, generated locally for export verification (no copyrighted media needed).
const sr=48000,secs=7,n=sr*secs,wav=Buffer.alloc(44+n*2);wav.write('RIFF');wav.writeUInt32LE(wav.length-8,4);wav.write('WAVEfmt ',8);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(sr,24);wav.writeUInt32LE(sr*2,28);wav.writeUInt16LE(2,32);wav.writeUInt16LE(16,34);wav.write('data',36);wav.writeUInt32LE(n*2,40);for(let i=0;i<n;i++)wav.writeInt16LE(Math.round(Math.sin(i/sr*Math.PI*880)*6000),44+i*2);await fs.writeFile(path.join(output,'tone.wav'),wav);
const fixture=await read(path.join(root,'examples/storyboard.json'));fixture.agent.cuts['2:0']={start:4.1,end:6.4,controls:{x:88}};await fs.writeFile(path.join(output,'input.json'),JSON.stringify(fixture));
await cli('create','--spec',path.join(output,'input.json'),'--audio',path.join(output,'tone.wav'),'--out',path.join(output,'ai.jizura.json'));
const ai=await read(path.join(output,'ai.jizura.json'));
await session(async(page,host,browser)=>{
  const ui=await browser.newPage();await ui.route('**/*',r=>r.request().url().startsWith(host.url) || r.request().url().startsWith('blob:'+host.url)?r.continue():r.abort());
  await ui.addInitScript(()=>localStorage.setItem('jizura.tourDone','1'));
  const uiErrors=[];ui.on('pageerror',e=>uiErrors.push(e.message));
  await ui.goto(host.url+'/dist/zh-hans/index.html');await ui.waitForFunction(()=>J.ui?.plan && document.getElementById('agentPanel'));
  await ui.evaluate(()=>{localStorage.setItem('jizura.tourDone','1');document.getElementById('tour').hidden=true;});
  await ui.locator('#modePro').click();
  await ui.locator('#fileProject').setInputFiles(path.join(output,'ai.jizura.json'));await ui.waitForFunction(()=>J.ui.project.title==='曙光 / Dawn' && J.ui.audio?.buffer);
  const aiPlan=await page.evaluate(async p=>(await J.Agent.prepare(p)).plan.cuts,ai),uiPlan=await ui.evaluate(()=>J.ui.plan.cuts);assert.deepEqual(uiPlan,aiPlan);
  await ui.locator('#lineList .ln .lock').nth(0).click();
  const lockedBefore=await ui.evaluate(()=>J.Agent.clone(J.ui.plan.cuts.filter(c=>c.line===0)));
  await ui.locator('#agentPanel summary').click();await ui.locator('#agentCut').selectOption('1:0');
  const patch=JSON.parse(await ui.locator('#agentPatch').inputValue());patch.controls={x:120,y:40,rotation:-4};
  await ui.locator('#agentPatch').fill(JSON.stringify(patch));await ui.locator('#agentApply').click();await ui.waitForFunction(()=>document.getElementById('agentStatus').textContent==='镜头已更新');await ui.waitForFunction(()=>J.ui.project.agent.cuts['1:0']?.controls?.x===120);
  await ui.locator('#lineList .ln .lay').nth(1).focus();await ui.locator('#lineList .ln .lay').nth(1).selectOption('center');assert.equal(await ui.evaluate(()=>J.Agent.cutAtSlot(J.ui.plan,1,0).layout),'center');assert.equal(await ui.evaluate(()=>J.ui.project.agent.cuts['1:0'].controls.x),120);
  await ui.locator('#lineList .ln .time').nth(2).fill('4.15');await ui.locator('#lineList .ln .time').nth(2).press('Tab');
  assert.equal(await ui.evaluate(()=>J.ui.plan.lines[2].start),4.15);assert.equal(await ui.evaluate(()=>J.ui.project.agent.cuts['2:0'].start),undefined);
  await ui.locator('#btnUndoEdit').click();assert.equal(await ui.evaluate(()=>J.ui.plan.lines[2].start),4.1);assert.equal(await ui.evaluate(()=>J.ui.project.agent.cuts['2:0'].start),4.1);
  await ui.keyboard.press('Control+Shift+Z');assert.equal(await ui.evaluate(()=>J.ui.plan.lines[2].start),4.15);
  await ui.locator('#lineList .ln .edit').nth(1).click();await ui.locator('.txt-edit').fill('*新しい*声!');await ui.locator('.txt-edit').press('Enter');assert((await ui.evaluate(()=>J.Agent.cutAtSlot(J.ui.plan,1,0).text)).includes('新しい'));assert.equal(await ui.evaluate(()=>J.ui.project.agent.cuts['1:0'].controls.x),120);
  await ui.locator('#btnUndoEdit').click();assert((await ui.evaluate(()=>J.Agent.cutAtSlot(J.ui.plan,1,0).text)).includes('透明'));
  await ui.locator('#agentName').fill('往返验收工程');await ui.locator('#agentStore').click();await ui.locator('#agentLoad').click();await ui.waitForFunction(()=>document.getElementById('agentStatus').textContent==='工程已打开');assert.equal(await ui.evaluate(()=>J.ui.plan.lines[2].start),4.15);
  const downloadPromise=ui.waitForEvent('download');await ui.locator('#btnSave').click();const download=await downloadPromise;await download.saveAs(path.join(output,'human.jizura.json'));
  const human=await read(path.join(output,'human.jizura.json'));assert.equal(human.agent.cuts['1:0'].controls.x,120);assert.equal(human.overrides[0].lock,true);assert(human.agent.assets.audio.data);
  const randomSeed=await ui.evaluate(()=>J.ui.project.seed);await ui.locator('#btnOmakase').click();assert.notEqual(await ui.evaluate(()=>J.ui.project.seed),randomSeed);
  const lockedAfter=await ui.evaluate(()=>J.ui.plan.cuts.filter(c=>c.line===0));assert.deepEqual(lockedAfter.map(c=>c.params),lockedBefore.map(c=>c.params));
  await ui.locator('#btnPrev').click();assert.deepEqual(await ui.evaluate(()=>J.ui.project.agent.cuts),human.agent.cuts);assert.equal(await ui.evaluate(()=>J.ui.project.seed),human.seed);
  // Restore the human project, then exercise original range/PNG/LRC/AE/video export buttons.
  await ui.evaluate(p=>J.uiApi.openProject(p),human);await ui.locator('#lineList .ln .rng').nth(1).click();
  await ui.locator('[data-tab="out"]').click();
  for(const [button,file] of [['#btnLRC','lyrics.lrc'],['#btnAE','legacy-ae.json'],['#btnPNGA','ui-transparent.zip'],['#btnMP4','ui-video.mp4']]){
    const [download]=await Promise.all([ui.waitForEvent('download',{timeout:120000}),ui.locator(button).click()]);await download.saveAs(path.join(output,file));
  }
  await ui.screenshot({path:path.join(output,'editor.png'),fullPage:true});assert.deepEqual(uiErrors,[]);
  log('editorRoundtrip',{importedIdenticalCuts:true,parameterEdited:true,nativeComponentControl:true,explicitCutTimingEdited:true,timingUndoRedo:true,lyricEditUndo:true,lookHistoryRestoresAgent:true,timingEdited:true,librarySaveLoad:true,lockedRandomization:true,savedAudio:true,exports:['LRC','AE JSON','transparent PNG ZIP','MP4'],errors:uiErrors});
  await ui.close();
});
const ops=[{op:'cut',line:2,cut:0,patch:{controls:{rotation:7}}}];await fs.writeFile(path.join(output,'continue.json'),JSON.stringify(ops));
await cli('edit','--project',path.join(output,'human.jizura.json'),'--operations',path.join(output,'continue.json'),'--out',path.join(output,'continued.jizura.json'));
await cli('render','--project',path.join(output,'continued.jizura.json'),'--out',path.join(output,'final.mp4'));
await cli('render','--project',path.join(output,'continued.jizura.json'),'--out',path.join(output,'segment.mp4'),'--from','2','--to','3');
await cli('render','--project',path.join(output,'continued.jizura.json'),'--out',path.join(output,'transparent.zip'),'--format','pngzip','--transparent','--from','.5','--to','1');
await cli('render','--project',path.join(output,'continued.jizura.json'),'--out',path.join(output,'layers.zip'),'--format','layers','--from','.5','--to','1');
await cli('preview','--project',path.join(output,'continued.jizura.json'),'--out',path.join(output,'preview.png'),'--time','2.8');
const human=await read(path.join(output,'human.jizura.json')),continued=await read(path.join(output,'continued.jizura.json'));
assert.deepEqual(continued.agent.resolved.plan.cuts.filter(c=>c.line===0),human.agent.resolved.plan.cuts.filter(c=>c.line===0));
function zipEntries(b){const entries=[];let pos=0;while(b.readUInt32LE(pos)===0x04034b50){const size=b.readUInt32LE(pos+18),nl=b.readUInt16LE(pos+26),el=b.readUInt16LE(pos+28),start=pos+30+nl+el;assert.equal(b.readUInt16LE(pos+8),0);entries.push({name:b.subarray(pos+30,pos+30+nl).toString('utf8'),data:b.subarray(start,start+size)});pos=start+size;}return entries;}
const transparent=zipEntries(await fs.readFile(path.join(output,'transparent.zip'))),layers=zipEntries(await fs.readFile(path.join(output,'layers.zip')));assert.equal(transparent.length,12);assert.equal(layers.length,24);assert(layers.some(x=>x.name.startsWith('back/'))&&layers.some(x=>x.name.startsWith('front/')));
await session(async(page,host)=>{
  const alpha=await page.evaluate(async base64=>{const im=new Image();im.src=URL.createObjectURL(new Blob([J.Agent.bytes(base64)],{type:'image/png'}));await im.decode();const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const x=c.getContext('2d');x.drawImage(im,0,0);const data=x.getImageData(0,0,c.width,c.height).data;return {zero:data.some((v,i)=>i%4===3 && v===0),visible:data.some((v,i)=>i%4===3 && v>0)};},transparent[0].data.toString('base64'));assert.deepEqual(alpha,{zero:true,visible:true});log('alphaAndLockedContinuation',{...alpha,transparentFrames:12,layerFrames:24,lockedFullRecipeIdentical:true});
  for(const file of ['final.mp4','segment.mp4','ui-video.mp4']){
    const b=await fs.readFile(path.join(output,file));
    const decoded=await page.evaluate(async base64=>{
      const blob=new Blob([J.Agent.bytes(base64)],{type:'video/mp4'}),v=document.createElement('video');v.muted=true;v.src=URL.createObjectURL(blob);
      await new Promise((r,j)=>{v.onloadeddata=r;v.onerror=()=>j(Error('Video decode error'));});
      v.currentTime=Math.min(.5,v.duration/2);await new Promise(r=>v.onseeked=r);
      const c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);
      const ac=new AudioContext();let audio;try{const decoded=await ac.decodeAudioData(J.Agent.bytes(base64));const data=decoded.getChannelData(0);audio={channels:decoded.numberOfChannels,duration:decoded.duration,rms:Math.sqrt(data.reduce((s,v)=>s+v*v,0)/data.length)};}finally{await ac.close();}
      return {duration:v.duration,width:v.videoWidth,height:v.videoHeight,nonempty:c.getContext('2d').getImageData(0,0,c.width,c.height).data.some((v,i)=>i%4!==3 && v>0),audio};
    },b.toString('base64'));assert(decoded.duration>0);assert(decoded.nonempty);assert(decoded.audio.rms>.01);assert(decoded.audio.channels>0);log('decode-'+file,decoded);
  }
});
log('agentExports',{fullMP4:true,segmentMP4:true,transparentPNGZip:true,twoLayerPNGZip:true,previewPNG:true});
await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2));
console.log('Acceptance passed. '+path.join(output,'report.json'));
