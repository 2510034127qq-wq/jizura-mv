import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(await fs.readFile(path.join(root,'references/upstream-manifest.json'),'utf8'));
const adapted=['runtime/native/02_fonts.js','runtime/native/09_render.js','runtime/native/12_ui.js'];
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
let unchanged=0;
for(const file of manifest.files){
  const data=await fs.readFile(path.join(root,file.path));
  if(hash(data)===file.sha256){unchanged++;continue;}
  assert(adapted.includes(file.path),'Unexpected original source modification: '+file.path);
  if(file.path==='runtime/native/09_render.js'){
    const source=data.toString('utf8').replace("(!opt.transparent || layer === 'back' || (opt.backgroundGraphics && layer !== 'front'))","(!opt.transparent || layer === 'back')");
    assert([source,source.replace(/\r?\n/g,'\r\n'),source.replaceAll('\r\n','\n')].some(s=>hash(s)===file.sha256),'Renderer changed beyond the optional transparent-layer background condition');
  }
}
assert.equal(unchanged,manifest.files.length-adapted.length);
const result={upstreamCommit:manifest.commit,originalFiles:manifest.files.length,byteIdenticalFiles:unchanged,adapted,rendererOnlyAddsOptionalBackgroundCondition:true};
await fs.mkdir(path.join(root,'output/acceptance'),{recursive:true});await fs.writeFile(path.join(root,'output/acceptance/source-integrity.json'),JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));
