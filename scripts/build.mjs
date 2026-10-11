import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export async function build() {
  const python = process.env.JIZURA_PYTHON || 'python';
  const p = spawnSync(python, [path.join(root,'scripts/localize.py')], {encoding:'utf8'});
  if(p.status !== 0) throw new Error(`Python 3 is required for the original UI translations: ${p.stderr || p.error}`);
  const native = (await fs.readdir(path.join(root,'runtime/native'))).filter(f=>f.endsWith('.js') && f!=='12_ui.js').sort();
  const head = '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">';
  function scripts(up){ return ['runtime/vendor/mp4-muxer.min.js',...native.map(f=>'runtime/native/'+f),'runtime/project.js','runtime/enhance.js','runtime/fonts.js'].map(f=>`<script src="${up}${f}"></script>`).join('\n'); }
  for(const [folder,lang] of [['','ja'],['en','en'],['zh-hant','zh-Hant'],['zh-hans','zh-Hans'],['ko','ko'],['id','id-ID'],['vi','vi']]){
    const dest=path.join(root,'dist',folder), up=folder?'../../':'../';
    const body=await fs.readFile(path.join(dest,'body.html'),'utf8');
    await fs.writeFile(path.join(dest,'index.html'),`<!doctype html><html lang="${lang}"><head>${head}<title>JIZURA</title><link rel="stylesheet" href="${up}editor/app/style.css"><link rel="stylesheet" href="${up}editor/agent.css"></head><body>${body}${scripts(up)}<script src="labels.js"></script><script src="ui.js"></script><script src="${up}editor/agent.js"></script></body></html>`);
  }
  await fs.writeFile(path.join(root,'dist/render.html'),`<!doctype html><html lang="ja"><head>${head}<title>JIZURA shared renderer</title></head><body><canvas id="render"></canvas>${scripts('../')}</body></html>`);
  return native.length;
}
if(process.argv[1] === fileURLToPath(import.meta.url)) console.log(`Built editor and headless entry: ${await build()} shared native sources`);
