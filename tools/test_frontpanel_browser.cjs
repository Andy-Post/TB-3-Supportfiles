// Optional regression test: needs Playwright and an unchanged baseline HTML.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),os=require('node:os');
const {pathToFileURL}=require('node:url');
if(!process.argv[2]){console.error('Usage: node tools/test_frontpanel_browser.cjs /path/to/original.html');process.exit(1);}
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=path.resolve(process.argv[2]);
const next=path.join(__dirname,'../TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html');
const old=fs.readFileSync(base,'utf8'),fresh=fs.readFileSync(next,'utf8');
function data(s){return vm.runInNewContext(s.slice(s.indexOf('const PANEL_DIMS='),s.indexOf('let lang='))+';({OPS,CONTROLS,PANEL_DIMS,FRONT,REAR,VIDEO_VISUALS,UI_I18N,CAT_I18N,CATS,'+(s.includes('const CONTENT=')?'CONTENT':'OP_I18N')+'})');}
const a=data(old),b=data(fresh);
const equal=(x,y,msg)=>assert.equal(JSON.stringify(x),JSON.stringify(y),msg);
for(const key of ['CONTROLS','PANEL_DIMS','FRONT','REAR','VIDEO_VISUALS','CAT_I18N','CATS'])equal(a[key],b[key],key);
assert.equal(old.match(/<style>\n([\s\S]*?)<\/style>/)[1],fresh.match(/<style>\n([\s\S]*?)<\/style>/)[1]);
for(const lang of ['de','en','fr']){
 const ui={...b.UI_I18N[lang]};delete ui.holdMatch;equal(a.UI_I18N[lang],ui,lang+' UI');
 for(const o of a.OPS){
  const t=lang==='de'?o:a.OP_I18N[lang][o.id],n=b.CONTENT[lang][o.id];
  for(const key of ['title','mode','summary','stepHeading','visualHeading','notes'])equal(t[key],n[key],lang+' '+o.id+' '+key);
  equal(lang==='de'?o.steps.map(s=>s[1]):t.steps,n.steps,lang+' '+o.id+' steps');
  equal(lang==='de'?(o.visuals||[]).map(v=>v.caption):(t.visuals||[]),n.visuals,lang+' '+o.id+' visuals');
 }
}
console.log('PASS: all original text, media, CSS and hardware data identical.');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.FRONTPANEL_BROWSER_CHANNEL?{channel:process.env.FRONTPANEL_BROWSER_CHANNEL}:{})});
 try {
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const pages=[await context.newPage(),await context.newPage()];const errors=[];
 for(const p of pages){p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});}
 const snapshot=p=>p.evaluate(()=>({title:document.title,lang:document.documentElement.lang,body:[...document.body.children].filter(e=>e.tagName!=='SCRIPT').map(e=>e.outerHTML).join('')}));
 const go=async(lang,id)=>{await Promise.all(pages.map((p,i)=>p.goto(pathToFileURL(i?next:base).href+'?lang='+lang+'#'+id)));for(const p of pages)assert.equal(await p.locator('html').getAttribute('lang'),lang,'URL language');await Promise.all(pages.map(p=>p.evaluate(id=>selectOp(id),id)));};
 const shots=fs.mkdtempSync(path.join(os.tmpdir(),'tb3-frontpanel-qa-'));console.log('Screenshot comparisons:',shots);
 for(const lang of ['de','en','fr']){
  await go(lang,'save-sound');
  for(const op of a.OPS){
   await Promise.all(pages.map(p=>p.evaluate(id=>selectOp(id),op.id)));
   assert.deepEqual(await snapshot(pages[0]),await snapshot(pages[1]),lang+' '+op.id+' rendered DOM');
  }
  for(const id of ['save-sound','backup','editor-setup','factory-reset']){
   await go(lang,id);
   await Promise.all(pages.map(p=>p.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));})));
   const images=await Promise.all(pages.map((p,i)=>p.screenshot({path:path.join(shots,`${lang}-${id}-${i?'after':'before'}.png`),fullPage:true})));
   assert.ok(images[0].equals(images[1]),lang+' '+id+' pixels');
  }
  for(const query of ['Pattern','Ring Mod','RECEIVE','USB','zzzz-no-results']){
   await Promise.all(pages.map(p=>p.locator('#search').fill(query)));
   assert.equal(await pages[0].locator('#sidebar').innerHTML(),await pages[1].locator('#sidebar').innerHTML(),lang+' search '+query);
  }
 }
 await go('de','copy-pattern');
 for(const p of pages){await p.locator('.step').nth(2).click();assert.equal(await p.locator('.callout.focus').getAttribute('data-idx'),'2');await p.locator('.callout').first().press('Enter');assert.equal(await p.locator('.step.active').getAttribute('data-idx'),'0');}
 for(const lang of ['fr','en','de']){
  await Promise.all(pages.map(p=>p.locator(`[data-lang="${lang}"]`).click()));
  assert.deepEqual(await snapshot(pages[0]),await snapshot(pages[1]),'switch '+lang);
  assert.ok(pages[1].url().includes('?lang='+lang+'#copy-pattern'));
 }
 for(const p of pages){await p.locator('.quick .qbtn').nth(4).click();assert.ok(p.url().endsWith('#editor-setup'));}
 await pages[1].evaluate(()=>localStorage.setItem('tb3-guide-lang','en'));
 await pages[1].goto(pathToFileURL(next).href+'?lang=fr#firmware');
 assert.equal(await pages[1].locator('html').getAttribute('lang'),'fr','URL takes precedence over saved language');
 await pages[1].goto(pathToFileURL(next).href+'?lang=es#firmware');
 assert.equal(await pages[1].locator('html').getAttribute('lang'),'en','invalid URL language uses saved language');
 await pages[1].evaluate(()=>localStorage.removeItem('tb3-guide-lang'));
 await pages[1].reload();
 assert.equal(await pages[1].locator('html').getAttribute('lang'),'de','default language');
 await pages[1].goto(pathToFileURL(next).href);
 assert.equal(await pages[1].evaluate(()=>current.id),'save-sound','default operation');
 for(const p of pages)await p.setViewportSize({width:390,height:844});
 await go('fr','save-sound');
 const mobile=await Promise.all(pages.map((p,i)=>p.screenshot({path:path.join(shots,`mobile-${i?'after':'before'}.png`),fullPage:true})));
 assert.ok(mobile[0].equals(mobile[1]),'mobile pixels');
 assert.deepEqual(errors,[],'Browser console');
 console.log('PASS: 126 rendered procedures; 13 pixel-identical screenshot pairs; search, URL languages, switching, quick navigation and marker click/keyboard tests under file://; no console errors.');
 } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
