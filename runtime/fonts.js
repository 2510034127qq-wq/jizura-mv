/* Local font map is generated from the original Google Fonts family/weight specs. */
(() => {
  const root=new URL('../',document.currentScript.src);
  J.localFontsReady=fetch(new URL('assets/fonts/manifest.json',root)).then(r=>{
    if(!r.ok)throw Error('Local fonts are missing. Run node scripts/vendor-fonts.mjs');return r.json();
  }).then(manifest=>{
    J.LOCAL_FONT_CSS=Object.fromEntries(Object.entries(manifest.specs).map(([spec,file])=>[spec,new URL('assets/fonts/'+file,root).href]));
    J.fontManifest=manifest;return manifest;
  });
})();
