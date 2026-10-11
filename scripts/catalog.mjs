import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {root,session} from './host.mjs';
import {build} from './build.mjs';
await build();
const files=await fs.readdir(path.join(root,'runtime/native'));
const sources=await Promise.all(files.filter(f=>f.endsWith('.js')).map(async f=>({file:'runtime/native/'+f,source:await fs.readFile(path.join(root,'runtime/native',f),'utf8')})));
const contracts={layout:'布局、排版与文字组合',enter:'文字登场运动',hold:'停留期间的连续运动',exit:'文字退场运动',decor:'前景或后景图形装饰',treat:'文字材质、轮廓与加工',bg:'全画面背景图案',cam:'镜头移动与变形',fx:'画面效果事件',trans:'前后两个镜头之间的转场'};
const data=await session(async(page,host,browser)=>{
  const collect=()=>{
    const components=[];
    for(const group of J.GROUP_KEYS)for(const [key,def] of Object.entries(J.registry(group))){
      const metadata={},methods={};for(const [k,v] of Object.entries(def))if(typeof v==='function')methods[k]=v.toString();else metadata[k]=v;
      const samples=[];
      if(def.plan){
        for(let seed=1;seed<=12;seed++){
          const rng=J.rng(seed*7919),st=J.STYLES[J.STYLE_ORDER[(seed-1)%J.STYLE_ORDER.length]];
          const v=group==='layout'?def.plan(rng,{text:'夜明けの色を覚えてる',n:11,W:1920,H:1080,dur:2.4},st):def.plan(rng,st);
          samples.push(v||{});
        }
      }else if(group==='decor'){
        const preview=J.previewPlan(J.defaultProject(),group,key);samples.push(preview.cuts[0].decor[0]);
      }
      const fieldNames=new Set(samples.flatMap(x=>Object.keys(x||{})));
      for(const source of Object.values(methods)){
        for(const m of source.matchAll(/\b(?:P|p|params)\.([A-Za-z_$][\w$]*)/g))fieldNames.add(m[1]);
        for(const m of source.matchAll(/cut\.params\.([A-Za-z_$][\w$]*)/g))fieldNames.add(m[1]);
        for(const m of source.matchAll(/\{([^{}]+)\}\s*=\s*(?:P|p|(?:env\.)?cut\.params)\b/g))for(const field of m[1].split(',')){const name=field.trim().split(/[:=]/)[0].trim();if(/^[\w$]+$/.test(name))fieldNames.add(name);}
      }
      const parameters=Object.fromEntries([...fieldNames].sort().map(k=>[k,{types:[...new Set(samples.filter(s=>s?.[k]!==undefined).map(s=>Array.isArray(s[k])?'array':s[k]===null?'null':typeof s[k]))],example:samples.find(s=>s?.[k]!==undefined)?.[k]}]));
      components.push({id:group+'.'+key,key,group,name:metadata.name,metadata,parameters,samples:samples.slice(0,3),methods});
    }
    return {components,styles:J.STYLE_ORDER.map(key=>({id:'style.'+key,key,group:'style',...J.STYLES[key]})),counts:Object.fromEntries(J.GROUP_KEYS.map(g=>[g,{selectable:J.order(g).length,registered:Object.keys(J.registry(g)).length}]))};
  };
  const current=await page.evaluate(collect);
  const aliases={};
  for(const [lang,file] of [['en','english.js'],['zh-Hans','chinese_hans.js']]){
    await page.addScriptTag({content:await fs.readFile(path.join(root,'editor/app',file),'utf8')});
    aliases[lang]=await page.evaluate(()=>Object.fromEntries(J.GROUP_KEYS.flatMap(g=>Object.entries(J.registry(g)).map(([k,d])=>[g+'.'+k,d.name]))));
  }
  const beforeDigest=JSON.parse(await fs.readFile(path.join(root,'references/upstream-components.json'),'utf8'));
  return {current,beforeDigest,aliases};
});
function digest(d){return {counts:d.counts,components:d.components.map(c=>({id:c.id,metadata:c.metadata,methods:Object.fromEntries(Object.entries(c.methods).map(([k,v])=>[k,crypto.createHash('sha256').update(v.replaceAll('\r\n','\n')).digest('hex')]))})),styles:d.styles};}
if(JSON.stringify(digest(data.current))!==JSON.stringify(data.beforeDigest))throw Error('Component/style definition changed from the frozen upstream baseline');
for(const c of data.current.components){
  c.names={ja:c.name,en:data.aliases.en[c.id],'zh-Hans':data.aliases['zh-Hans'][c.id]};
  const methods=c.methods;c.methods={};const sourceRefs=[];
  for(const [k,v] of Object.entries(methods)){
    const found=sources.find(s=>s.source.includes(v));
    c.methods[k]={signature:v.slice(0,v.indexOf('{')>=0?v.indexOf('{'):Math.min(80,v.length)).trim(),sha256:crypto.createHash('sha256').update(v.replaceAll('\r\n','\n')).digest('hex')};
    if(found){const line=found.source.slice(0,found.source.indexOf(v)).split('\n').length;sourceRefs.push({method:k,file:found.file,line});}
  }
  c.sources=sourceRefs;c.purpose=`${contracts[c.group]}：${c.names['zh-Hans']} / ${c.names.en} (${c.key})`;
  c.parameterTarget={layout:'params',decor:'decor[index]',treat:'treatP',bg:'bgP',cam:'camP',trans:'transP',fx:'agent.events: t/type/amp/dur'}[c.group]||'inDur/outDur/stagger + controls；原生 apply(env,item,progress)';
  c.example={op:'cut',line:0,cut:0,patch:c.group==='decor'?{decor:[c.samples[0]||{id:c.key,seed:1}]}:c.group==='fx'?undefined:{[c.group]:c.key,...(['layout','treat','bg','cam','trans'].includes(c.group)?{[{layout:'params',treat:'treatP',bg:'bgP',cam:'camP',trans:'transP'}[c.group]]:c.samples[0]||{}}:{})}};
  if(c.group==='fx')c.example={agent:{events:[{t:0.5,type:c.key,amp:c.metadata.amp||1,dur:(c.metadata.dur||6)/24}]}};
}
const catalog={upstream:'852wa/JIZURA',upstreamCommit:JSON.parse((await fs.readFile(path.join(root,'references/upstream-manifest.json'),'utf8')).replace(/^\uFEFF/,'')).commit.trim(),counts:data.current.counts,components:data.current.components,styles:data.current.styles};
await fs.writeFile(path.join(root,'references/components.json'),JSON.stringify(catalog,null,2));
let md='# 完整组件目录\n\n索引由真实浏览器加载原生注册表生成；包含特殊标题/间奏组件。参数类型为原生 plan 采样结果，静态读取字段一并列出。全部方法、条件和动态字段以对应源码为最终定义。查询完整 JSON 用 `node scripts/cli.mjs query --id layout.center`。\n\n';
for(const [g,c] of Object.entries(catalog.counts))md+=`- ${g}: ${c.selectable} 可选 / ${c.registered} 注册\n`;
for(const c of catalog.components)md+=`\n## ${c.id} · ${c.name}\n\n${c.purpose}。标签：${(c.metadata.tags||[]).join(', ')}；参数位置：${c.parameterTarget}。\n\n参数：${Object.keys(c.parameters).join(', ')||'无组件专属可序列化参数；使用公共时间、运动和视觉控制'}。\n\n源码：${c.sources.map(s=>`${s.file}:${s.line} (${s.method})`).join('；')}\n\n调用示例：\n\n\`\`\`json\n${JSON.stringify(c.example)}\n\`\`\`\n`;
md+='\n# 视觉风格\n\n';for(const s of catalog.styles)md+=`- ${s.id}: ${s.name} — ${s.desc}；调用：\`{"style":"${s.key}"}\`\n`;
await fs.writeFile(path.join(root,'references/components.md'),md);
console.log(JSON.stringify({counts:catalog.counts,total:catalog.components.length,styles:catalog.styles.length,identicalDefinitions:true},null,2));
