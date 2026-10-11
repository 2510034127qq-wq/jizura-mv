"""Build the original seven editor editions; component code remains shared."""
import os, sys, json
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
os.chdir(ROOT / 'editor')
sys.path.insert(0, str(ROOT / 'editor'))
from app import i18n
from app.english import localize_body, localize_js
out = ROOT / 'dist'
version = (ROOT / 'VERSION').read_text(encoding='utf-8').strip()
body0 = Path('app/body.html').read_text(encoding='utf-8').replace('@VERSION@', version)
ui0 = (ROOT / 'runtime/native/12_ui.js').read_text(encoding='utf-8').replace('@VERSION@', version)
for code, folder, hl, name in i18n.EDITIONS:
    body = body0.replace('    <div class="acts">', '    ' + i18n.nav(code) + '\n    <div class="acts">', 1)
    ui, labels = ui0, ''
    if code == 'en':
        body = localize_body(body)
        ui = localize_js(ui, '12_ui.js')
        labels = Path('app/english.js').read_text(encoding='utf-8')
    elif code != 'ja':
        body = i18n.localize_body(code, body)
        ui = i18n.localize_js(code, ui, '12_ui.js')
        labels = Path('app/english.js').read_text(encoding='utf-8') + '\n' + i18n.labels_js(code)
    dest = out / folder
    dest.mkdir(parents=True, exist_ok=True)
    (dest / 'body.html').write_text(body, encoding='utf-8')
    (dest / 'ui.js').write_text(ui, encoding='utf-8')
    (dest / 'labels.js').write_text(labels, encoding='utf-8')
    print(code, 'editor preserved')
