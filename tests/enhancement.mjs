import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {root,session} from '../scripts/host.mjs';
import {build} from '../scripts/build.mjs';
const output=path.join(root,'output/enhancement');await fs.mkdir(output,{recursive:true});await build();
const report={date:new Date().toISOString(),checks:{}};
function log(key,value){report.checks[key]=value;console.log(key,JSON.stringify(value));}
async function cli(...args){return new Promise((resolve,reject)=>{const p=spawn(process.execPath,[path.join(root,'scripts/cli.mjs'),...args],{cwd:root,stdio:['ignore','pipe','pipe']});let out='';p.stdout.on('data',b=>out+=b);p.stderr.on('data',b=>out+=b);p.on('error',reject);p.on('exit',c=>c?reject(Error(out)):resolve(out));});}
await session(async(page,host)=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const result=await page.evaluate(async()=>{
    const lyrics=Array.from({length:6},(_,i)=>`[00:${String(i*2).padStart(2,'0')}.00]Scene ${i+1} / light`).join('\n');
    const raw={lyrics,lang:'en',title:'Native enhancement',style:'noir',seed:1903,extra:true,res:360,fps:24,timing:{offset:0,snap:false,tail:.2},fx:{texture:0,glitch:0,chroma:0,hud:'off',flash:false,koma:0,onTwos:false},overrides:Object.fromEntries(Array.from({length:6},(_,i)=>[i,{single:true,layout:'center',enter:'cut',hold:'still',exit:'cut',bg:'none',decor:[],cam:'push'}])),agent:{cuts:{'1:0':{controls:{x:130},keyframes:[{path:'controls.x',keys:[{time:0,value:30},{time:2,value:180}]}]}},layers:[{id:'human-caption',z:1,start:0,end:12,opacity:.8,project:{lyrics:'Subtitle',lang:'en',style:'noir',seed:92,timing:{offset:0,snap:false,lineScale:5},fx:{texture:0,glitch:0,chroma:0,hud:'off',flash:false,koma:0,onTwos:false},overrides:{0:{single:true,layout:'lowerThird',enter:'cut',exit:'cut',decor:[],bg:'none'}}}}]}};
    const ready=await J.Agent.prepare(raw),saved=J.Agent.serialize(ready.project,ready.plan);
    const base=J.Agent.serialize(J.Agent.edit(saved,[{op:'lock',line:0}]));
    const before=J.plan(base),first=J.Agent.enhance(base,{seed:42,strength:'dense'}),again=J.Agent.enhance(base,{seed:42,strength:'dense'}),second=J.Agent.enhance(first.project,{seed:43,strength:'dense'}),after=J.plan(first.project);
    const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
    const baselinePreserved=eq(before.cuts,after.cuts)&&eq(before.events,after.events)&&eq(base.overrides,first.project.overrides)&&eq(base.agent.cuts,first.project.agent.cuts)&&eq(base.agent.layers,first.project.agent.layers.filter(l=>l.generator!=='native-enhance'))&&base.seed===first.project.seed&&base.style===first.project.style&&eq(base.timing,first.project.timing)&&eq(base.fonts,first.project.fonts)&&eq(base.colors,first.project.colors);
    const child=after.agentLayers.find(l=>l.generator==='native-enhance');
    const recipes=child.plan.cuts.every(c=>(c.decor||[]).every(d=>J.DECOR[d.id]?.layer==='back'));
    const originalCopy=J.Agent.clone(first.project);delete originalCopy.agent.resolved;
    const reopened=J.plan(JSON.parse(JSON.stringify(first.project))),cleared=J.Agent.clearEnhancement(first.project),clearPlan=J.plan(cleared);
    const deterministic=eq(first.project,again.project),rerollReplaces=second.project.agent.layers.filter(l=>l.generator==='native-enhance').length===1&&!eq(first.report,second.report),removePreserves=eq(clearPlan.cuts,before.cuts)&&eq(clearPlan.events,before.events)&&eq(cleared.agent.layers,base.agent.layers);
    const cv=document.createElement('canvas'),original=document.createElement('canvas'),removed=document.createElement('canvas'),frontA=document.createElement('canvas'),frontB=document.createElement('canvas');
    for(const c of [cv,original,removed,frontA,frontB]){c.width=640;c.height=360;}
    const r=new J.Renderer(),rb=new J.Renderer(),rc=new J.Renderer(),bytes=c=>c.getContext('2d').getImageData(0,0,c.width,c.height).data;
    let protectedPixels=0,outsideChanges=0,frames=0,lockedPixelsEqual=true,removedPixelsEqual=true,frontExportEqual=true;const visible=[];
    for(const t of [.8,2.8,4.8,6.8,8.8,10.8]){
      const opt={scale:640/before.W};rb.frame(original.getContext('2d'),before,t,opt);r.frame(cv.getContext('2d'),reopened,t,opt);rc.frame(removed.getContext('2d'),clearPlan,t,opt);
      const a=bytes(original),b=bytes(cv),d=bytes(removed),mask=r.protectionMask(reopened,t,640,360).getContext('2d').getImageData(0,0,640,360).data;
      let changed=0;
      for(let i=0;i<a.length;i+=4){const diff=a[i]!==b[i]||a[i+1]!==b[i+1]||a[i+2]!==b[i+2]||a[i+3]!==b[i+3];
        if(t<2 && diff)lockedPixelsEqual=false;
        if(mask[i+3]){protectedPixels++;if(diff)throw Error(`Protected foreground changed at ${t}, pixel ${i/4}`);}else if(diff){outsideChanges++;changed++;}
        for(let k=0;k<4;k++)if(a[i+k]!==d[i+k])removedPixelsEqual=false;
      }
      r.frame(frontB.getContext('2d'),reopened,t,{...opt,transparent:true,layer:'front'});rb.frame(frontA.getContext('2d'),before,t,{...opt,transparent:true,layer:'front'});const frontPixels=bytes(frontB);if(!bytes(frontA).every((v,i)=>v===frontPixels[i]))frontExportEqual=false;
      if(changed)visible.push(t);frames++;
    }
    window.fixture={base,enhanced:first.project};window.visibleTime=visible[0]||2.8;
    const lockedAfter=J.Agent.edit(first.project,[{op:'lock',line:1}]),lockedPlan=J.plan(lockedAfter);
    // Runtime locks introduced after augmentation must also exclude the new pass.
    const lockedPlain=J.plan(J.Agent.clearEnhancement(lockedAfter));rb.frame(original.getContext('2d'),lockedPlain,2.8,{scale:640/before.W});r.frame(cv.getContext('2d'),lockedPlan,2.8,{scale:640/before.W});
    const lateLockedPixels=bytes(cv),lateLock=bytes(original).every((v,i)=>v===lateLockedPixels[i]);
    const lockedLayer=J.Agent.edit(first.project,[{op:'lock-layer',id:child.id}]);let layerLockRejects=false;try{J.Agent.clearEnhancement(lockedLayer);}catch{layerLockRejects=true;}
    const range=J.Agent.enhance(base,{seed:42,from:4,to:6,exclude:['2:0']}),rangeValid=range.report.rows.filter(r=>r.start>=4&&r.start<6).every(r=>r.skipped);
    return {baselinePreserved,deterministic,rerollReplaces,removePreserves,recipes,addedCuts:first.report.addedCuts,protectedPixels,outsideChanges,frames,lockedPixelsEqual,removedPixelsEqual,frontExportEqual,lateLock,layerLockRejects,rangeValid,visible,fixture:window.fixture};
  });
  const {fixture,...checks}=result;for(const key of ['baselinePreserved','deterministic','rerollReplaces','removePreserves','recipes','lockedPixelsEqual','removedPixelsEqual','frontExportEqual','lateLock','layerLockRejects','rangeValid'])assert.equal(checks[key],true,key);
  assert(checks.outsideChanges>0);assert(checks.protectedPixels>0);log('sharedRuntime',checks);
  const advanced=await page.evaluate(async()=>{
    let frames=0,actualForegroundPixels=0;
    for(const aspect of ['16:9','9:16','1:1']){
      const p=J.Agent.clone(window.fixture.base);delete p.agent.resolved;p.aspect=aspect;delete p.overrides[0].lock;
      p.lyrics='[00:00.00]Moving type\n[00:02.00]New scene\n[00:04.00][interlude 3]';
      p.overrides={0:{single:true,layout:'center',enter:'assemble',exit:'cut',decor:['rings'],bg:'none'},1:{single:true,layout:'center',enter:'cut',exit:'blur',bg:'none',decor:[]},2:{bg:'none'}};
      p.agent.cuts={'0:0':{controls:{rotation:17,x:30}},'1:0':{trans:'wipe',transDur:.35,controls:{x:60,scaleX:.8,opacity:.65},keyframes:[{path:'controls.x',keys:[{time:0,value:60},{time:2,value:200}]}]}};
      p.agent.layers[0].project.aspect=aspect;
      const x=await J.Agent.prepare(p),baseline=J.Agent.serialize(x.project,x.plan),plan=J.plan(J.Agent.enhance(baseline,{seed:42,strength:'dense'}).project);
      const canvases=Array.from({length:3},()=>document.createElement('canvas')),[a,b,fg]=canvases;
      for(const c of canvases){c.width=aspect==='9:16'?720:1920;c.height=Math.round(c.width*x.plan.H/x.plan.W);}
      const r=new J.Renderer(),original=new J.Renderer(),foreground=new J.Renderer();
      for(const t of [.3,1.2,2.13,2.31,3.5,4.8]){
        const opt={scale:a.width/x.plan.W};original.frame(a.getContext('2d'),x.plan,t,opt);r.frame(b.getContext('2d'),plan,t,opt);foreground.frame(fg.getContext('2d'),x.plan,t,{...opt,transparent:true,backgroundGraphics:false});
        const A=a.getContext('2d').getImageData(0,0,a.width,a.height).data,B=b.getContext('2d').getImageData(0,0,b.width,b.height).data,F=fg.getContext('2d').getImageData(0,0,fg.width,fg.height).data;
        for(let i=0;i<A.length;i+=4)if(F[i+3]){actualForegroundPixels++;if(A[i]!==B[i]||A[i+1]!==B[i+1]||A[i+2]!==B[i+2]||A[i+3]!==B[i+3])throw Error(`Actual foreground coverage changed: ${aspect} ${t} ${i/4}`);}
        frames++;
      }
    }
    const allDisabled=J.Agent.clone(window.fixture.base);for(const g of ['bg','decor','fx'])allDisabled.enabled[g]=Object.fromEntries(J.order(g).map(k=>[k,false]));
    const none=J.Agent.enhance(allDisabled,{seed:42}),disabledRespected=none.report.addedCuts===0 && none.report.eventCount===0;
    const reserved=J.Agent.clone(window.fixture.base);reserved.overrides[1].enhance=false;reserved.agent.cuts['2:0']={enhance:false};
    const exclusion=J.Agent.enhance(reserved,{seed:42}).report.rows.filter(r=>r.line===1||r.line===2).every(r=>r.skipped);
    const locked=J.Agent.clone(window.fixture.enhanced);locked.agent.layers.find(l=>l.id==='human-caption').locked=true;
    const lockPlan=J.plan(locked),plain=J.plan(J.Agent.clearEnhancement(locked)),c=document.createElement('canvas'),d=document.createElement('canvas');c.width=d.width=640;c.height=d.height=360;
    new J.Renderer().frame(c.getContext('2d'),lockPlan,4.8,{scale:640/lockPlan.W});new J.Renderer().frame(d.getContext('2d'),plain,4.8,{scale:640/plain.W});
    const D=d.getContext('2d').getImageData(0,0,640,360).data,lockedOverlay=c.getContext('2d').getImageData(0,0,640,360).data.every((v,i)=>v===D[i]);
    const protectedOverlay=J.Agent.clone(window.fixture.enhanced);protectedOverlay.agent.layers.find(l=>l.id==='human-caption').protectBase=true;
    const protectedPlan=J.plan(protectedOverlay);new J.Renderer().frame(c.getContext('2d'),protectedPlan,4.8,{scale:640/protectedPlan.W});
    const independentProtectedLayer=c.getContext('2d').getImageData(0,0,640,360).data.some((v,i)=>i%4!==3&&v>100);
    return {frames,aspects:3,actualForegroundPixels,fullHD:true,transitions:true,interlude:true,rotationOpacityKeyframes:true,disabledRespected,exclusion,lockedOverlay,independentProtectedLayer};
  });
  for(const key of ['disabledRespected','exclusion','lockedOverlay','independentProtectedLayer'])assert.equal(advanced[key],true,key);assert(advanced.actualForegroundPixels>0);log('advancedProtection',advanced);
  await fs.writeFile(path.join(output,'baseline.jizura.json'),JSON.stringify(fixture.base));await fs.writeFile(path.join(output,'enhanced.jizura.json'),JSON.stringify(fixture.enhanced));
  await page.addInitScript(()=>localStorage.setItem('jizura.tourDone','1'));
  await page.goto(host.url+'/dist/zh-hans/index.html');await page.waitForFunction(()=>J.uiApi && document.getElementById('agentEnhance'));
  if(await page.locator('#tour').isVisible())await page.locator('.tour-skip').click();
  await page.evaluate(async p=>J.uiApi.openProject(p),fixture.base);await page.locator('#agentPanel').evaluate(e=>e.open=true);
  await page.evaluate(()=>J.ui.exporting=true);await page.locator('#agentEnhance').click();
  assert.equal(await page.evaluate(()=>J.ui.project.agent.layers.some(l=>l.generator==='native-enhance')),false);
  await page.evaluate(()=>J.ui.exporting=false);
  await page.locator('#agentEnhanceSeed').fill('42');await page.locator('#agentEnhanceStrength').selectOption('dense');await page.locator('#agentEnhance').click();
  await page.waitForFunction(()=>J.ui.project.agent?.layers?.some(l=>l.generator==='native-enhance'));
  const uiPreserved=await page.evaluate(p=>JSON.stringify(J.ui.plan.cuts)===JSON.stringify(J.plan(p).cuts),fixture.base);assert(uiPreserved);
  const download=page.waitForEvent('download');await page.locator('#agentSave').click();const file=await download;await file.saveAs(path.join(output,'editor-saved.jizura.json'));
  await page.locator('#agentEnhanceClear').click();await page.waitForFunction(()=>!J.ui.project.agent?.layers?.some(l=>l.generator==='native-enhance'));
  const uiCleared=await page.evaluate(p=>JSON.stringify(J.ui.plan.cuts)===JSON.stringify(J.plan(p).cuts),fixture.base);assert(uiCleared);
  const saved=JSON.parse(await fs.readFile(path.join(output,'editor-saved.jizura.json'),'utf8'));
  await page.evaluate(async p=>J.uiApi.openProject(p),saved);const restored=await page.evaluate(()=>J.ui.project.agent.layers.some(l=>l.generator==='native-enhance'));assert(restored);assert.deepEqual(errors,[]);
  log('editor',{actualButton:true,exportGuard:true,baselinePreserved:uiPreserved,downloadedProject:true,removeButton:uiCleared,reopenEnhancement:restored,errors});
});
await cli('enhance','--project',path.join(output,'baseline.jizura.json'),'--out',path.join(output,'cli-enhanced.jizura.json'),'--seed','42','--strength','dense','--report',path.join(output,'cli-report.json'));
const api=JSON.parse(await fs.readFile(path.join(output,'enhanced.jizura.json'),'utf8')),command=JSON.parse(await fs.readFile(path.join(output,'cli-enhanced.jizura.json'),'utf8'));assert.deepEqual(command,api);
await cli('clear-enhancement','--project',path.join(output,'cli-enhanced.jizura.json'),'--out',path.join(output,'cli-cleared.jizura.json'));
await cli('preview','--project',path.join(output,'baseline.jizura.json'),'--time','4.8','--out',path.join(output,'baseline.png'));
await cli('preview','--project',path.join(output,'editor-saved.jizura.json'),'--time','4.8','--out',path.join(output,'enhanced.png'));
await cli('render','--project',path.join(output,'editor-saved.jizura.json'),'--from','4','--to','5','--out',path.join(output,'enhanced.mp4'));
await session(async(page,host)=>{
  const decoded=await page.evaluate(async url=>{const video=document.createElement('video');video.muted=true;video.src=url;await new Promise((r,e)=>{video.onloadeddata=r;video.onerror=e;});video.currentTime=.5;await new Promise(r=>video.onseeked=r);const c=document.createElement('canvas');c.width=video.videoWidth;c.height=video.videoHeight;c.getContext('2d').drawImage(video,0,0);const a=c.getContext('2d').getImageData(0,0,c.width,c.height).data;return {duration:video.duration,width:c.width,height:c.height,nonempty:a.some((v,i)=>i%4!==3&&v>20)};},host.url+'/output/enhancement/enhanced.mp4');
  assert(decoded.duration>.95&&decoded.duration<1.1);assert(decoded.nonempty);log('cliAndVideo',{sameAsSharedAPI:true,actualMP4Decode:decoded,bytes:(await fs.stat(path.join(output,'enhanced.mp4'))).size});
});
await fs.writeFile(path.join(output,'verification.json'),JSON.stringify(report,null,2));
console.log('Native random enhancement acceptance passed');
