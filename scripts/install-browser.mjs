import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const r=spawnSync(process.execPath,[path.join(root,'node_modules/playwright/cli.js'),'install','chromium'],{
  stdio:'inherit',env:{...process.env,PLAYWRIGHT_BROWSERS_PATH:process.env.PLAYWRIGHT_BROWSERS_PATH||path.join(root,'node_modules/.browsers')}
});process.exit(r.status??1);
