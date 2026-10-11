/* A reversible native-planner pass over an unchanged Agent/editor baseline. */
(() => {
  'use strict';
  const {clone,normalize,serialize,nativePlan}=J.Agent;
  const generated=l=>l.generator==='native-enhance';
  const levels={gentle:{opacity:.22,maxDecor:1},standard:{opacity:.34,maxDecor:2},dense:{opacity:.45,maxDecor:3}};
  function withoutEnhancement(project){
    const p=normalize(project);
    if(p.agent.layers.some(l=>generated(l) && l.locked))throw Error('Random enhancement layer is locked; unlock it before replacing/removing it');
    const plan=J.plan(p);p.agent.layers=p.agent.layers.filter(l=>!generated(l));
    return {project:serialize(p,plan),plan:{...plan,agentLayers:(plan.agentLayers||[]).filter(l=>!generated(l))}};
  }
  function clearEnhancement(project){return withoutEnhancement(project).project;}
  function enhance(project,options={}){
    const strength=options.strength||'standard',level=levels[strength];if(!level)throw Error('strength must be gentle, standard or dense');
    const {project:p,plan:base}=withoutEnhancement(project),seed=options.seed==null?J.h(p.seed,92731):Number(options.seed);
    if(!Number.isSafeInteger(seed) || seed<0)throw Error('Enhancement seed must be a nonnegative safe integer');
    const from=Number(options.from??0),to=Number(options.to??base.duration);
    if(!(from>=0 && to>from && to<=base.duration))throw Error('Invalid enhancement range');
    if(options.exclude!=null && (!Array.isArray(options.exclude) || options.exclude.some(s=>typeof s!=='string')))throw Error('exclude must be an array of cut slot strings');
    const excluded=new Set(options.exclude||[]);
    const roll=J.omakase(p,J.rng(seed),p.themeId);
    // Omakase chooses its native mood/pools. The AI palette, fonts, flags and primary
    // composition stay authoritative. User-disabled candidates remain disabled.
    const candidate=clone(p);candidate.seed=roll.seed;candidate.mood=roll.mood;
    candidate.fx={...roll.fx,density:p.fx.density,koma:p.fx.koma,onTwos:p.fx.onTwos,hud:'off',texture:0};
    for(const [key,on] of Object.entries(p.locks?.params||{}))if(on && p.fx[key]!=null)candidate.fx[key]=p.fx[key];
    candidate.agent={version:1,cuts:{},events:[],layers:[],assets:{fonts:[]},audioTiming:clone(p.agent.audioTiming||{})};
    candidate.overrides={};candidate.enabled=clone(roll.enabled);
    for(const [group,on] of Object.entries(p.locks?.tech||{}))if(on)candidate.enabled[group]=clone(p.enabled?.[group]||{});
    for(const g of J.GROUP_KEYS)for(const id of J.order(g)){
      if(p.enabled?.[g]?.[id]===false || (g==='decor' && J.DECOR[id]?.layer!=='back'))candidate.enabled[g][id]=false;
    }
    // Exact primary layouts/counts guide the original busy/compatibility rules.
    for(const line of base.lines){const cs=base.cuts.filter(c=>c.line===line.index && c.utext!=null);
      candidate.timing.lineTimes[line.index]=line.start+(p.typeset?0.2:0);
      candidate.overrides[line.index]={cuts:cs.length,cutTech:Object.fromEntries(cs.map((c,k)=>[k,{layout:c.layout,trans:'none'}]))};
      if(cs.length===1)candidate.overrides[line.index].layout=cs[0].layout;
    }
    const native=nativePlan(candidate,candidate.agent.audioTiming),counts={},rows=[];
    const selected=base.cuts.map((c,index)=>{
      const slot=c.line>=0 && c.utext!=null?`${c.line}:${counts[c.line]||0}`:`special:${index}`;
      const k=counts[c.line]||0;if(c.line>=0 && c.utext!=null)counts[c.line]=k+1;
      const pool=native.cuts.filter(n=>n.line===c.line && (c.utext==null?n.utext==null:n.utext!=null)),draw=pool[k]||pool[0];
      const ov=p.overrides[c.line],patch=p.agent.cuts[slot];
      const blocked=!!ov?.lock || ov?.enhance===false || patch?.enhance===false || excluded.has(slot) || c.end<=from || c.start>=to;
      const busy=J.LAYOUTS[c.layout]?.busy,existing=new Set((c.decor||[]).map(d=>d.id));
      const decor=blocked?[]:(draw?.decor||[]).filter(d=>J.DECOR[d.id]?.layer==='back' && !existing.has(d.id) && !(busy && !J.DECOR[d.id].subtle)).slice(0,Math.max(0,level.maxDecor-(c.decor||[]).filter(d=>J.DECOR[d.id]?.layer==='back').length));
      const bg=!blocked && (!c.bg || c.bg==='none') && draw?.bg && !(busy && !J.BG[draw.bg]?.subtle)?draw.bg:'none';
      const added=clone(c);added.decor=clone(decor);added.bg=bg;added.bgP=bg==='none'?{}:clone(draw.bgP||{});
      // Core geometry/camera/timing remain the AI recipe. Only original new decoration
      // recipes and backgrounds are drawn, with native back-only rendering.
      added.trans=null;added.transP={};added.transDur=0;added.morph=null;
      delete added.agentKeyframes;
      if(c.utext!=null && c.line>=0 && patch?.keyframes){candidate.agent.cuts[slot]={keyframes:clone(patch.keyframes.filter(t=>/^(controls|params|camP)\./.test(t.path)))};}
      rows.push({slot,line:c.line,start:c.start,end:c.end,layout:c.layout,decor:decor.map(d=>d.id),bg,skipped:blocked});
      return added;
    });
    // Retain native event accents only inside an eligible cut; they process the added
    // layer itself and never the AI foreground or its camera/transitions.
    const events=native.events.filter(e=>e.t>=from && e.t+e.dur<=to && rows.some(r=>!r.skipped && e.t>=r.start && e.t+e.dur<=r.end && (r.decor.length || r.bg!=='none')) && !base.events.some(b=>b.type===e.type && Math.abs(b.t-e.t)<.25));
    const child={...native,cuts:selected,events,lines:clone(base.lines),duration:base.duration,style:base.style,styleKey:base.styleKey,seed:roll.seed,agentLayers:[]};
    selected.forEach((c,i)=>c.index=i);
    const id='native-enhance',report={version:1,seed,candidateSeed:roll.seed,mood:roll.mood,strength,from,to,rows,eventCount:events.length,addedCuts:rows.filter(r=>r.decor.length || r.bg!=='none').length};
    let layerId=id;while(p.agent.layers.some(l=>l.id===layerId))layerId+='-';
    const layer={id:layerId,generator:'native-enhance',z:Math.max(0,...p.agent.layers.map(l=>l.z||0))+1,start:from,end:to,offset:from,opacity:level.opacity,renderLayer:'back',protectBase:true,respectLocks:true,report,project:serialize(candidate,child)};
    p.agent.layers.push(layer);
    return {project:serialize(p,base),report};
  }
  Object.assign(J.Agent,{enhance,clearEnhancement});
})();
