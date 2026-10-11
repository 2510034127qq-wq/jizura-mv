/* Shared Agent/editor project extensions. Native component implementations are untouched. */
(() => {
  'use strict';
  const clone=x=>JSON.parse(JSON.stringify(x));
  const bad=new Set(['__proto__','prototype','constructor']);
  function safe(x){
    if(x && typeof x==='object') for(const [k,v] of Object.entries(x)){if(bad.has(k))throw Error('Unsafe project key: '+k);safe(v);}
    if(typeof x==='number' && !Number.isFinite(x))throw Error('Non-finite number');
  }
  function merge(a,b){
    for(const [k,v] of Object.entries(b||{})) a[k]=v && typeof v==='object' && !Array.isArray(v)?merge(a[k] && typeof a[k]==='object' && !Array.isArray(a[k])?a[k]:{},v):clone(v);
    return a;
  }
  const nativePlan=J.plan, NativeRenderer=J.Renderer;
  const fields={layout:'params',treat:'treatP',bg:'bgP',cam:'camP',trans:'transP'};
  const groupField={layout:'layout',enter:'enter',hold:'hold',exit:'exit',treat:'treat',bg:'bg',cam:'cam',trans:'trans'};
  const signature=p=>JSON.stringify({...Object.fromEntries(Object.entries(p).filter(([k])=>k!=='agent' && k!=='appVersion')),agent:Object.fromEntries(Object.entries(p.agent||{}).filter(([k])=>k!=='resolved'))});
  function validate(p){
    safe(p);
    if(!p || typeof p!=='object' || Array.isArray(p))throw Error('Project must be a JSON object');
    if(p.style && !J.STYLES[p.style])throw Error('Unknown style '+p.style);
    if(p.aspect && !['16:9','9:16','4:3','3:4','1:1','4:5','21:9'].includes(p.aspect))throw Error('Unknown aspect');
    if(p.fps!=null && (!(p.fps>0) || p.fps>120))throw Error('fps must be in (0,120]');
    if(p.res!=null && (!(p.res>=16) || p.res>4320))throw Error('res must be in [16,4320]');
    function component(c){
      for(const [g,f] of Object.entries(groupField))if(c[f] && !(g==='trans' && c[f]==='none') && !J.registry(g)[c[f]])throw Error(`Unknown ${g}.${c[f]}`);
      for(const d of c.decor||[])if(!J.DECOR[typeof d==='string'?d:d.id])throw Error('Unknown decor '+(d.id||d));
    }
    for(const o of Object.values(p.overrides||{})){
      component(o);for(const t of Object.values(o.cutTech||{}))component({...t,decor:t.decor && t.decor!=='none'?[t.decor]:[]});
    }
    for(const c of Object.values(p.agent?.cuts||{})){
      component(c);for(const track of c.keyframes||[])validateTrack(track);
      if(c.controls)validateControls(c.controls);
    }
    for(const e of p.agent?.events||[])if(!J.FXE[e.type] || !(e.dur>0) || !(e.t>=0) || !(e.amp>=0))throw Error('Invalid effect event');
    const ids=new Set();
    for(const l of p.agent?.layers||[]){
      if(!l.id || ids.has(l.id))throw Error('Layer IDs must be unique');ids.add(l.id);
      if(l.project?.agent?.layers?.length)throw Error('Nested layer projects are not supported');
      if(!(l.end>l.start) || l.start<0)throw Error('Invalid layer span');
      if(l.renderLayer!=null && !['back','front'].includes(l.renderLayer))throw Error('Invalid layer renderLayer');
      for(const t of l.keyframes||[]){validateTrack(t);if(!t.path.startsWith('controls.'))throw Error('Layer keyframes must target controls; use layer.project.agent.cuts for component parameters');}
      validate(l.project);
    }
    return true;
  }
  function validateControls(c){
    for(const [k,v] of Object.entries(c))if(!['x','y','rotation','scaleX','scaleY','opacity'].includes(k) || typeof v!=='number')throw Error('Invalid control '+k);
  }
  function validateTrack(t){
    if(!t || !/^(params|treatP|bgP|camP|transP|decor|controls)\.[\w.]+$/.test(t.path) || t.path.split('.').some(k=>bad.has(k)))throw Error('Invalid keyframe path');
    if(!['linear','step','inQuad','outQuad','inOutCubic','inOutSine'].includes(t.easing||'linear'))throw Error('Unknown easing');
    if(!Array.isArray(t.keys)||!t.keys.length)throw Error('Empty keyframe track');
    let prev=-Infinity;for(const k of t.keys){if(!(k.time>=0) || k.time<=prev || !['number','string','boolean'].includes(typeof k.value))throw Error('Invalid keyframe');prev=k.time;}
  }
  function normalize(p={}){
    validate(p);const result=merge(J.defaultProject(),clone(p));
    result.agent=merge({version:1,cuts:{},events:[],layers:[],assets:{fonts:[]}},result.agent||{});
    if(result.agent.version!==1)throw Error('Unsupported Agent project version '+result.agent.version);
    // The original editor performs its v0.10 lyric-order migration for legacy files.
    return result;
  }
  function applyPatch(c,patch,plan){
    const oldLayout=c.layout;
    const plain=clone(patch);delete plain.keyframes;
    if(plain.layout && plain.layout!==oldLayout && !plain.params){
      plain.params=J.LAYOUTS[plain.layout].plan(J.rng(c.seed),{text:c.text,n:J.glyphCount(c.text),W:plan.W,H:plan.H,dur:c.dur},plan.style);
    }
    for(const [g,f] of Object.entries(fields))if(g!=='layout' && plain[g] && plain[g]!==c[g] && !plain[f]){
      const d=J.registry(g)[plain[g]];plain[f]=d?.plan?d.plan(J.rng(c.seed),plan.style):{};
    }
    merge(c,plain);c.dur=c.end-c.start;
    if(!(c.dur>0) || !(c.start>=0))throw Error('Cut start must be nonnegative and end must exceed start');
    if(patch.keyframes)c.agentKeyframes=clone(patch.keyframes);
  }
  J.plan=(project,audio)=>{
    const p=normalize(project), a=p.agent;
    let plan=nativePlan(p,audio||a.audioTiming||null);
    const reused=a.resolved?.signature===signature(p);
    if(reused){
      const saved=clone(a.resolved.plan);
      // Keep the current language labels and style implementation, with saved exact recipes/timing.
      plan={...plan,...saved,style:J.resolveStyle(p)};
      plan.evOwner=new Map((saved.eventOwners||[]).flatMap((owner,i)=>owner>=0 && plan.cuts[owner]?[[plan.events[i],plan.cuts[owner]]]:[]));
    }
    const byLine={};
    for(const c of plan.cuts){if(c.line<0 || c.utext==null)continue;const k=byLine[c.line]||0;byLine[c.line]=k+1;
      const patch=a.cuts[`${c.line}:${k}`];if(patch)applyPatch(c,patch,plan);
    }
    plan.cuts.sort((x,y)=>x.start-y.start);plan.cuts.forEach((c,i)=>c.index=i);
    for(const ln of plan.lines){const cs=plan.cuts.filter(c=>c.line===ln.index && c.utext!=null);if(cs.length){ln.start=Math.min(...cs.map(c=>c.start));ln.end=Math.max(...cs.map(c=>c.end));}}
    plan.duration=Math.max(plan.duration,...plan.cuts.map(c=>c.end),...a.layers.map(l=>l.end));
    if(!reused)plan.events.push(...clone(a.events));plan.events.sort((x,y)=>x.t-y.t);
    plan.agentLayers=a.layers.filter(l=>l.visible!==false).map(l=>{
      // Enhancement snapshots keep exact native recipes even when output fps changes.
      const child=J.plan(l.generator==='native-enhance'?l.project:{...l.project,aspect:l.project.aspect||p.aspect,fps:p.fps});
      child.fps=p.fps;return {...clone(l),plan:child};
    }).sort((x,y)=>(x.z||0)-(y.z||0));
    plan.agentLockedSpans=[...plan.lines.filter(ln=>p.overrides[ln.index]?.lock).map(ln=>({start:ln.start,end:ln.end})),...plan.cuts.filter(c=>p.overrides[c.line]?.lock).map(c=>({start:c.start,end:c.end})),...a.layers.filter(l=>l.locked && l.visible!==false && l.generator!=='native-enhance').map(l=>({start:l.start,end:l.end}))];
    plan.agentVersion=1;return plan;
  };
  function setPath(o,path,value){const parts=path.split('.');let p=o;for(const k of parts.slice(0,-1)){if(p[k]==null)p[k]=/^\d+$/.test(k)?[]:{};p=p[k];}p[parts.at(-1)]=value;}
  function tween(track,t){
    const ks=track.keys;if(t<=ks[0].time)return ks[0].value;if(t>=ks.at(-1).time)return ks.at(-1).value;
    const i=ks.findIndex(k=>k.time>t),a=ks[i-1],b=ks[i];
    if(track.easing==='step' || typeof a.value!=='number' || typeof b.value!=='number')return a.value;
    let u=(t-a.time)/(b.time-a.time);if(track.easing && track.easing!=='linear')u=J.E[track.easing](u);
    return J.lerp(a.value,b.value,u);
  }
  function animated(plan,t){
    if(!plan.cuts.some(c=>c.agentKeyframes?.length))return plan;
    return {...plan,cuts:plan.cuts.map(c=>{if(!c.agentKeyframes?.length)return c;const cc=clone(c);for(const track of c.agentKeyframes)setPath(cc,track.path,tween(track,t-c.start));return cc;})};
  }
  function transform(ctx,c,W,H){
    ctx.translate(W/2+(c.x||0),H/2+(c.y||0));ctx.rotate((c.rotation||0)*J.DEG);ctx.scale(c.scaleX??1,c.scaleY??1);ctx.translate(-W/2,-H/2);ctx.globalAlpha*=J.clamp(c.opacity??1);
  }
  // The original texture algorithm uses Math.random. Seed that exact algorithm at its synchronous boundary.
  function seeded(seed,fn){const prev=Math.random;Math.random=J.rng(seed);try{return fn();}finally{Math.random=prev;}}
  class Renderer extends NativeRenderer{
    constructor(){const prev=Math.random;Math.random=J.rng(0);try{super();}finally{Math.random=prev;}this.layerRenderers=new Map();this.textureSeed=0;}
    paper(W,H){return seeded(J.h(this.textureSeed,W,H),()=>super.paper(W,H));}
    drawCut(env){
      const c=env.cut.controls;if(!c)return super.drawCut(env);
      const alpha=J.clamp(c.opacity??1);if(alpha===0)return null;
      const ctx=env.ctx;ctx.save();transform(ctx,{...c,opacity:1},env.W,env.H);
      try{
        if(alpha===1)return super.drawCut(env);
        const proxy=new Proxy(ctx,{get:(target,k)=>k==='globalAlpha'?target.globalAlpha/alpha:typeof target[k]==='function'?target[k].bind(target):target[k],set:(target,k,v)=>{target[k]=k==='globalAlpha'?v*alpha:v;return true;}});
        const options={...env};delete options.ctx;
        const patched=super.makeEnv(proxy,env.plan,env.cut,env.sc,options);proxy.globalAlpha=1;
        return super.drawCut(patched);
      }finally{ctx.restore();}
    }
    protectionMask(plan,t,width,height,excludeLayer){
      // Render the actual native foreground (including transitions and existing
      // overlays), then dilate its alpha. This clips additions; no component is redrawn.
      const w=Math.min(width,640),h=Math.max(1,Math.round(height*w/width));
      if(!this.guardRenderer){this.guardRenderer=new Renderer();this.guardCanvas=document.createElement('canvas');this.guardSpread=document.createElement('canvas');}
      const raw=this.guardCanvas,spread=this.guardSpread;raw.width=spread.width=w;raw.height=spread.height=h;
      // Existing protected overlays contribute conservative silhouettes without
      // recursively requesting another protection render. Exclude the layer being clipped.
      const base={...plan,agentLayers:(plan.agentLayers||[]).filter(l=>l.generator!=='native-enhance' && l.id!==excludeLayer).map(l=>({...l,protectBase:false}))};
      this.guardRenderer.frame(raw.getContext('2d',{willReadFrequently:true}),base,t,{scale:w/plan.W,transparent:true,backgroundGraphics:false});
      const x=raw.getContext('2d'),pixels=x.getImageData(0,0,w,h);
      for(let i=0;i<pixels.data.length;i+=4){pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=255;pixels.data[i+3]=pixels.data[i+3]?255:0;}x.putImageData(pixels,0,0);
      const sx=spread.getContext('2d',{willReadFrequently:true});sx.filter=`blur(${Math.max(2,20*w/plan.W)}px)`;sx.drawImage(raw,0,0);sx.filter='none';
      const padded=sx.getImageData(0,0,w,h);for(let i=3;i<padded.data.length;i+=4)padded.data[i]=padded.data[i]?255:0;sx.putImageData(padded,0,0);
      return spread;
    }
    frame(ctx,plan,t,opt={}){
      if(this.textureSeed!==plan.seed){this.textureSeed=plan.seed;this.paperCache.clear();}
      const current=animated(plan,t), outer=!this.nativeDepth;
      this.nativeDepth=(this.nativeDepth||0)+1;
      try{super.frame(ctx,current,t,opt);}finally{this.nativeDepth--;}
      // Native transitions recursively draw the preceding main frame. Independent
      // overlays are composited once, after the main transition has completed.
      if(!outer)return;
      const tq=Math.floor(t/J.stepDur(plan.fx,plan.fps)+1e-6)*J.stepDur(plan.fx,plan.fps);
      for(const l of plan.agentLayers||[]){
        if(t<l.start || t>=l.end)continue;
        if(l.generator==='native-enhance' && opt.layer==='front')continue;
        if(l.respectLocks && plan.agentLockedSpans?.some(s=>(t>=s.start && t<s.end)||(tq>=s.start && tq<s.end)))continue;
        let r=this.layerRenderers.get(l.id);if(!r){r={engine:new Renderer(),canvas:document.createElement('canvas')};this.layerRenderers.set(l.id,r);}
        r.canvas.width=ctx.canvas.width;r.canvas.height=ctx.canvas.height;
        const time=t-l.start+(l.offset||0);
        r.engine.frame(r.canvas.getContext('2d'),l.plan,time,{...opt,layer:l.renderLayer||opt.layer,scale:r.canvas.width/l.plan.W,transparent:true,backgroundGraphics:l.background!==false});
        const controls={...(l.controls||{}),opacity:l.opacity??l.controls?.opacity??1};
        for(const track of l.keyframes||[])setPath({controls},track.path,tween(track,t-l.start));
        const adjusted={...controls,x:(controls.x||0)*(opt.scale||1),y:(controls.y||0)*(opt.scale||1)};
        ctx.save();ctx.setTransform(1,0,0,1,0,0);
        if(l.protectBase){
          if(!r.composite)r.composite=document.createElement('canvas');r.composite.width=ctx.canvas.width;r.composite.height=ctx.canvas.height;
          const cx=r.composite.getContext('2d');cx.save();transform(cx,adjusted,r.composite.width,r.composite.height);cx.drawImage(r.canvas,0,0);cx.restore();
          const guard=this.protectionMask(plan,t,ctx.canvas.width,ctx.canvas.height,l.id);
          cx.globalCompositeOperation='destination-out';cx.imageSmoothingEnabled=false;cx.drawImage(guard,0,0,r.composite.width,r.composite.height);
          ctx.globalCompositeOperation=l.blend||'source-over';ctx.drawImage(r.composite,0,0);
        }else{transform(ctx,adjusted,ctx.canvas.width,ctx.canvas.height);ctx.globalCompositeOperation=l.blend||'source-over';ctx.drawImage(r.canvas,0,0);}
        ctx.restore();
      }
    }
  }
  J.Renderer=Renderer;
  async function prepare(project){
    const p=normalize(project);
    let audio=null;
    if(p.agent.assets.audio){const a=p.agent.assets.audio,ac=new AudioContext();try{
      const buffer=await ac.decodeAudioData(bytes(a.data)),peaks=new Array(1600).fill(0),step=Math.max(1,Math.floor(buffer.length/peaks.length));
      for(let ch=0;ch<buffer.numberOfChannels;ch++){const data=buffer.getChannelData(ch);for(let b=0;b<peaks.length;b++)for(let i=b*step;i<Math.min(buffer.length,(b+1)*step);i+=4)peaks[b]=Math.max(peaks[b],Math.abs(data[i]));}
      audio={buffer,duration:buffer.duration,peaks};p.agent.audioTiming={...(p.agent.audioTiming||{}),duration:buffer.duration};if(!p.audioName)p.audioName=a.name;
    }finally{await ac.close();}}
    const allFonts=[...p.agent.assets.fonts||[],...p.agent.layers.flatMap(l=>l.project.agent?.assets?.fonts||[])];
    for(const f of allFonts){
      if(!J.SAFE_FONT_KEY.test(f.key))throw Error('Invalid custom font key');
      J.addUserFont(f.key,f.label,J.safeFamily(f.family),f.weight||400);
      const face=new FontFace(J.safeFamily(f.family),bytes(f.data));await face.load();document.fonts.add(face);J.FONTS[f.key].loaded=true;
    }
    J.setLang(J.resolveLang(p));
    let plan=J.plan(p);
    await J.localFontsReady;
    // Fonts in all overlays must be ready before any planning/exports.
    for(const pp of [plan,...(plan.agentLayers||[]).map(l=>l.plan)]){
      J.setLang(pp.lang||plan.lang);await J.ensureFonts(pp.cuts.map(c=>c.text+' '+(c.note||'')).join(' ')+(pp.title||'')+'0123456789 No.REC',J.fontsOfPlan(pp));
    }
    plan=J.plan(p);
    return {project:p,plan,audio};
  }
  function bytes(data){const s=atob(data),u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u.buffer;}
  function base64(buf){let s='';const u=new Uint8Array(buf);for(let i=0;i<u.length;i+=16384)s+=String.fromCharCode(...u.subarray(i,i+16384));return btoa(s);}
  function serialize(project,plan){
    const p=normalize(project);delete p.agent.resolved;
    const pp=plan||J.plan(p), saved=clone(pp);delete saved.agentLayers;delete saved.evOwner;
    saved.eventOwners=pp.events.map(e=>pp.evOwner?.get(e)?.index??-1);
    // Resolved cuts are a complete inspectable snapshot; extensions are applied once on re-open.
    for(const c of saved.cuts)delete c.agentKeyframes;
    p.agent.resolved={signature:signature(p),plan:saved};p.appVersion='0.10.1-skill';return p;
  }
  function cutAtSlot(plan,line,k){return plan.cuts.filter(c=>c.line===line && c.utext!=null)[k];}
  function locked(p,line){return !!p.overrides?.[line]?.lock;}
  function edit(project,ops){
    const p=normalize(project);delete p.agent.resolved;
    const assertLine=line=>{if(locked(p,line))throw Error(`Line ${line} is locked; use an explicit unlock operation first`);};
    for(const op of ops){
      if(op.op==='cut'){
        assertLine(op.line);if(!cutAtSlot(J.plan(p),op.line,op.cut||0))throw Error('Cut does not exist');
        const id=`${op.line}:${op.cut||0}`;p.agent.cuts[id]=merge(p.agent.cuts[id]||{},op.patch);
      }else if(op.op==='line'){
        assertLine(op.line);const parsed=J.parseLyrics(p.lyrics);
        if(!parsed.lines[op.line])throw Error('Line does not exist');
        if(op.text!==undefined && parsed.lines.some((l,i)=>l.src===parsed.lines[op.line].src && i!==op.line && locked(p,i)))throw Error('This LRC source row also feeds a locked line');
        if(op.text!==undefined){const rows=p.lyrics.split('\n'),src=parsed.lines[op.line].src,prefix=(rows[src].match(/^\s*(?:\[\d+:\d+(?:[.:]\d+)?\])*/)||[''])[0];rows[src]=prefix+String(op.text);p.lyrics=rows.join('\n');parsed.lines.forEach((l,i)=>{if(l.src===src)releaseContent(p,i);});}
        if(op.time!==undefined){releaseTimings(p,op.line);p.timing.lineTimes[op.line]=op.time;}
        if(op.components)p.overrides[op.line]=merge(p.overrides[op.line]||{},op.components);
      }else if(op.op==='lock'){
        const plan=J.plan(p),snap=J.lineSnapshot(plan,op.line);if(!snap)throw Error('Line does not exist');
        p.overrides[op.line]=merge(p.overrides[op.line]||{},{lock:true,lockedSeed:plan.lines[op.line]?.seed,lockedCuts:snap});
      }else if(op.op==='unlock'){
        const o=p.overrides[op.line];if(o){delete o.lock;delete o.lockedSeed;delete o.lockedCuts;}
      }else if(op.op==='project'){
        const safeOutputFields=['seed','res','fps','quality','includeAudio','exportRange'];
        if(Object.values(p.overrides).some(o=>o.lock) && Object.keys(op.patch).some(k=>!safeOutputFields.includes(k)))throw Error('Global patch can alter locked lines; use scoped line/cut edits');
        if(p.agent.layers.some(l=>l.locked) && Object.keys(op.patch).some(k=>['agent','aspect','fps'].includes(k)))throw Error('Global patch can alter locked layers');
        merge(p,op.patch);
      }else if(op.op==='lock-layer' || op.op==='unlock-layer'){
        const l=p.agent.layers.find(l=>l.id===op.id);if(!l)throw Error('Layer does not exist');l.locked=op.op==='lock-layer';
      }else if(op.op==='layer'){
        const i=p.agent.layers.findIndex(l=>l.id===op.id);if(i>=0 && p.agent.layers[i].locked)throw Error('Layer '+op.id+' is locked');
        if(op.remove){if(i>=0)p.agent.layers.splice(i,1);}else if(i>=0)merge(p.agent.layers[i],op.patch);else p.agent.layers.push({id:op.id,...clone(op.patch)});
      }else throw Error('Unknown edit operation '+op.op);
    }
    validate(p);return p;
  }
  function releaseRecipes(project,line,groups=J.GROUP_KEYS,slot){
    if(!project.agent)return;
    delete project.agent.resolved;
    const targets={layout:['layout','params'],enter:['enter','inDur'],hold:['hold'],exit:['exit','outDur'],decor:['decor'],treat:['treat','treatP'],bg:['bg','bgP'],cam:['cam','camP'],trans:['trans','transP','transDur','morph'],fx:[]};
    for(const [id,c] of Object.entries(project.agent.cuts||{})){
      const [li,k]=id.split(':').map(Number);
      if(line==null?locked(project,li):li!==line)continue;if(slot!=null && k!==slot)continue;
      const names=groups.flatMap(g=>targets[g]||[]);for(const name of names)delete c[name];
      c.keyframes=(c.keyframes||[]).filter(t=>!names.includes(t.path.split('.')[0]));
    }
  }
  function releaseTimings(project,line,slot,currentPlan){
    if(!project.agent)return;
    const previousSlot=line!=null && slot==null && !locked(project,line-1)?(currentPlan||J.plan(project)).cuts.filter(c=>c.line===line-1 && c.utext!=null).length-1:-1;
    delete project.agent.resolved;
    for(const [id,c] of Object.entries(project.agent.cuts||{})){
      const [li,k]=id.split(':').map(Number);
      if(line==null?locked(project,li):li!==line)continue;
      if(slot!=null && k!==slot && k!==slot-1)continue;
      if(slot==null || k===slot)delete c.start;
      delete c.end;delete c.dur;
    }
    // Moving a line boundary changes the preceding line's final end as well.
    if(previousSlot>=0){
      const c=project.agent.cuts?.[`${line-1}:${previousSlot}`];if(c){delete c.end;delete c.dur;}
    }
  }
  function releaseContent(project,line){
    if(!project.agent)return;delete project.agent.resolved;
    for(const [id,c] of Object.entries(project.agent.cuts||{}))if(+id.split(':')[0]===line){
      for(const k of ['params','text','utext','lineText','note','words'])delete c[k];
    }
  }
  J.Agent={version:1,normalize,validate,prepare,serialize,edit,clone,merge,base64,bytes,cutAtSlot,tween,nativePlan,NativeRenderer,releaseRecipes,releaseTimings,releaseContent};
})();
