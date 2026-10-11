/* Additional precise Agent controls; the original editor remains intact. */
(() => {
  async function boot(){
    if(!J.ui?.project){setTimeout(boot,25);return;}
    const api=J.uiApi,S=J.ui;
    const panel=document.createElement('details');panel.id='agentPanel';
    panel.innerHTML='<summary>Agent 工程 · 镜头参数 / 关键帧 / 图层 / 工程管理</summary><p>使用原生组件 ID 和参数。修改当前镜头的 JSON（params、decor、camP、controls、keyframes 等）。时间单位为秒，位置为设计像素。锁定镜头须先用原版行列表解锁。</p><label>镜头<select id="agentCut"></select></label><button id="agentInspect">读取参数</button><textarea id="agentPatch" aria-label="镜头参数 JSON"></textarea><button id="agentApply">应用镜头参数</button><p>图层 JSON：按 z 顺序叠加完整原生工程，可设置 start/end、opacity、controls 和 keyframes。</p><textarea id="agentLayers" aria-label="图层 JSON"></textarea><button id="agentApplyLayers">应用图层</button><button id="agentSave">保存完整可编辑工程</button><p>本地工程库：<input id="agentName" aria-label="工程名" placeholder="工程名"><button id="agentStore">存入工程库</button><select id="agentProjects" aria-label="工程库"></select><button id="agentLoad">打开工程</button><button id="agentDelete">删除所选工程</button></p><div class="agent-status" id="agentStatus"></div>';
    document.body.appendChild(panel);
    const enhancement=document.createElement('fieldset');enhancement.id='agentEnhancement';
    enhancement.innerHTML='<legend>AI 版之后 · 原版随机增强</legend><p>保留主体配方，以原版规划器补充后景装饰与背景；实时遮罩避开现有前景，锁定片段跳过。重抽替换这一层，移除恢复主体画面。增强后请预览确认视觉密度。</p><label>随机种子<input id="agentEnhanceSeed" type="number" min="0" step="1" value="42"></label><label>强度<select id="agentEnhanceStrength"><option value="gentle">轻</option><option value="standard" selected>标准</option><option value="dense">较丰富</option></select></label><label>起点秒<input id="agentEnhanceFrom" type="number" min="0" step=".01" placeholder="全部"></label><label>终点秒<input id="agentEnhanceTo" type="number" min="0" step=".01" placeholder="全部"></label><button id="agentEnhance">保留主体并随机增强 / 重抽</button><button id="agentEnhanceClear">移除随机增强</button><div id="agentEnhanceReport"></div>';
    panel.insertBefore(enhancement,panel.querySelector('label'));
    const $=id=>document.getElementById(id), status=x=>{$('agentStatus').textContent=x;};
    let dirty=false;
    $('agentPatch').addEventListener('input',()=>{dirty=true;});$('agentLayers').addEventListener('input',()=>{dirty=true;});
    function library(){try{return JSON.parse(localStorage.getItem('jizura.agent.library')||'{}');}catch{return {};}}
    function listLibrary(){const db=library();$('agentProjects').replaceChildren(...Object.keys(db).map(k=>{const o=document.createElement('option');o.value=k;o.textContent=k;return o;}));}
    function slots(){let per={};return S.plan.cuts.filter(c=>c.line>=0 && c.utext!=null).map(c=>({c,id:`${c.line}:${per[c.line]||0}`,k:per[c.line]=(per[c.line]||0)+1}));}
    function refresh(){const selected=$('agentCut').value;$('agentCut').replaceChildren(...slots().map(({c,id})=>{const o=document.createElement('option');o.value=id;o.textContent=`${id} · ${c.start.toFixed(2)}-${c.end.toFixed(2)} · ${c.text} · ${c.layout}`;return o;}));if([...$('agentCut').options].some(o=>o.value===selected))$('agentCut').value=selected;inspect();$('agentLayers').value=JSON.stringify(S.project.agent?.layers||[],null,2);const report=S.project.agent?.layers?.find(l=>l.generator==='native-enhance')?.report;$('agentEnhanceReport').textContent=report?`种子 ${report.seed} · ${report.addedCuts} 个镜头有补充候选 · ${report.eventCount} 个层内效果；实际可见范围由遮罩决定`:'尚未叠加随机增强';dirty=false;}
    function inspect(){const [line,k]=$('agentCut').value.split(':').map(Number),c=J.Agent.cutAtSlot(S.plan,line,k);if(!c)return;const pick={};for(const key of ['start','end','text','note','layout','enter','hold','exit','params','decor','treat','treatP','bg','bgP','cam','camP','trans','transP','transDur','inDur','outDur','controls'])if(c[key]!=null)pick[key]=c[key];pick.keyframes=S.project.agent?.cuts?.[$('agentCut').value]?.keyframes||[];$('agentPatch').value=JSON.stringify(pick,null,2);}
    async function applyProject(p){const prepared=await J.Agent.prepare(p);S.project=prepared.project;api.syncUI();api.replan();api.flushSave();refresh();}
    async function changeEnhancement(fn){
      if(S.exporting || S.tap){status('请在导出或打点结束后调整随机增强');return;}
      $('agentEnhance').disabled=$('agentEnhanceClear').disabled=true;
      try{await fn();}catch(e){status(e.message);}finally{$('agentEnhance').disabled=$('agentEnhanceClear').disabled=false;}
    }
    $('agentEnhance').onclick=()=>changeEnhancement(async()=>{const options={seed:Number($('agentEnhanceSeed').value),strength:$('agentEnhanceStrength').value};for(const [key,id] of [['from','agentEnhanceFrom'],['to','agentEnhanceTo']])if($(id).value!=='')options[key]=Number($(id).value);const result=J.Agent.enhance(S.project,options);await applyProject(result.project);status('已叠加原版随机增强；重抽会替换上一层。请预览后选择保留或移除。');});
    $('agentEnhanceClear').onclick=()=>changeEnhancement(async()=>{await applyProject(J.Agent.clearEnhancement(S.project));status('随机增强已移除，当前主体配方和人工图层保留');});
    $('agentInspect').onclick=inspect;$('agentCut').onchange=inspect;
    $('agentApply').onclick=async()=>{try{const [line,k]=$('agentCut').value.split(':').map(Number);await applyProject(J.Agent.edit(S.project,[{op:'cut',line,cut:k,patch:JSON.parse($('agentPatch').value)}]));status('镜头已更新');}catch(e){status(e.message);}};
    $('agentApplyLayers').onclick=async()=>{try{const layers=JSON.parse($('agentLayers').value),old=S.project.agent?.layers||[];for(const l of old.filter(l=>l.locked))if(JSON.stringify(layers.find(x=>x.id===l.id))!==JSON.stringify(l))throw Error('图层 '+l.id+' 已锁定');const p=J.Agent.clone(S.project);p.agent=p.agent||{};p.agent.layers=layers;await applyProject(p);status('图层已更新');}catch(e){status(e.message);}};
    $('agentSave').onclick=()=>J.saveFile((S.project.title||'JIZURA')+'.jizura.json',JSON.stringify(J.Agent.serialize(S.project,S.plan),null,2));
    $('agentStore').onclick=()=>{try{const name=$('agentName').value.trim()||S.project.title||'未命名工程';const db=library();db[name]=J.Agent.serialize(S.project,S.plan);localStorage.setItem('jizura.agent.library',JSON.stringify(db));listLibrary();status('工程已存入本地浏览器');}catch(e){status('工程库容量不足，请保存 JSON 文件：'+e.message);}};
    $('agentLoad').onclick=async()=>{try{await api.openProject(library()[$('agentProjects').value]);refresh();status('工程已打开');}catch(e){status(e.message);}};
    $('agentDelete').onclick=()=>{const db=library();delete db[$('agentProjects').value];localStorage.setItem('jizura.agent.library',JSON.stringify(db));listLibrary();};
    const oldReplan=api.replan;api.replan=(...args)=>{const result=oldReplan(...args);refresh();return result;};
    // Original closure-driven controls update the panel when it is opened or refreshed.
    panel.addEventListener('toggle',()=>{if(panel.open && !dirty)refresh();});refresh();listLibrary();
    const projectURL=new URL(location.href).searchParams.get('project');
    if(projectURL){try{const u=new URL(projectURL,location.href);if(u.origin!==location.origin)throw Error('Only local project URLs are supported');await api.openProject(await (await fetch(u)).json());refresh();status('已载入 Agent 工程');}catch(e){status(e.message);}}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
