import fs from 'node:fs';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE);
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1280,height:900},colorScheme:'light'});
const r={browser:browser.version(),errors:[],resources:[],guides:[],exercises:[],quiz:[],layout:[],axe:[]};
page.on('pageerror',e=>r.errors.push(e.message));page.on('response',s=>{if(s.status()>=400)r.resources.push({url:s.url(),status:s.status()})});
await page.goto('http://127.0.0.1:5173/');
const data=await page.evaluate(async()=>await import('/src/data/contenido.js'));
async function axe(label){await page.addScriptTag({path:'/tmp/pps-axe.js'});r.axe.push({label,...await page.evaluate(async()=>{const x=await axe.run();return {violations:x.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:x.incomplete.map(v=>v.id)}})});}
await axe('home');
for(let i=0;i<data.guias.length;i++){
 const b=page.locator('button.guia').nth(i);await b.focus();await page.keyboard.press('Enter');
 await page.locator('dialog h3').waitFor(); const steps=[];
 for(let j=0;j<data.guias[i].pasos.length;j++){
  await page.locator('dialog img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode().catch(()=>{}))));
  steps.push(await page.locator('dialog').evaluate(d=>({title:d.querySelector('h3').textContent,images:[...d.querySelectorAll('img')].map(i=>({loaded:i.complete&&i.naturalWidth>0,alt:!!i.alt})),links:[...d.querySelectorAll('a')].map(a=>a.getAttribute('href'))})));
  if(j===0) await axe(data.guias[i].id);
  if(j<data.guias[i].pasos.length-1)await page.getByRole('button',{name:'Siguiente →',exact:true}).click();
 }
 await page.getByRole('button',{name:'Entendido',exact:true}).click();
 r.guides.push({id:data.guias[i].id,steps,closed:await page.locator('dialog').evaluate(d=>!d.open),focusReturned:await b.evaluate(b=>b===document.activeElement)});
 await b.click();await page.locator('dialog h3').waitFor();await page.keyboard.press('Escape');await page.locator('dialog h3').waitFor({state:'detached'});r.guides.at(-1).escape=await page.locator('dialog').evaluate(d=>!d.open);
}
const input=page.locator('#emmet-input');r.playground=[];
for(const value of ['ul>li*3','','div[','>','img[src=x onerror="window.__audit=1"]']){await input.fill(value);r.playground.push({value,text:await input.locator('..').innerText(),active:await page.evaluate(()=>window.__audit??null),injectedImages:await input.locator('..').locator('img').count()});}
const alternatives=['ul>li+li+li+li+li','div[class=contenedor id=principal]','ul>li.producto1+li.producto2+li.producto3+li.producto4+li.producto5','input[placeholder="Nombre de usuario" name=usuario type=text]','ul>li{Producto 1}+li{Producto 2}+li{Producto 3}+li{Producto 4}+li{Producto 5}','nav.menu>ul>li>a{Inicio}^li>a{Productos}^li>a{Servicios}^li>a{Contacto}','(div.card>img+h2+p+a{Leer más})*3'];
for(let i=0;i<data.ejercicios.length;i++){
 const card=page.locator('.ejercicio').nth(i);
 for(const [kind,value] of [['solution',data.ejercicios[i].solucion],['alternative',alternatives[i]],['wrong','p{Incorrecto}'],['empty',''],['invalid','>']]){await card.locator('input').fill(value);await card.getByRole('button',{name:'Comprobar'}).click();r.exercises.push({exercise:i+1,kind,value,result:await card.locator('[role=status]').innerText()});}
}
for(const mode of ['correct','wrong','mixed']){
 for(let i=0;i<data.preguntasQuiz.length;i++){const p=data.preguntasQuiz[i];const idx=mode==='correct'||mode==='mixed'&&i%2===0?p.correcta:(p.correcta+1)%4;await page.locator('#quiz .opciones button').nth(idx).click();r.quiz.push({mode,question:i+1,status:await page.locator('#quiz [role=status]').innerText(),disabled:await page.locator('#quiz .opciones button:disabled').count()});await page.getByRole('button',{name:i===4?'Ver resultado':'Siguiente',exact:true}).click();}
 r.quiz.push({mode,final:await page.locator('#quiz .lead').innerText()});await page.getByRole('button',{name:'Repetir',exact:true}).click();
}
r.anchors=await page.locator('a[href^="#"]').evaluateAll(as=>as.map(a=>({href:a.getAttribute('href'),exists:!!document.querySelector(a.getAttribute('href'))})));
for(const width of [1280,375,320]){await page.setViewportSize({width,height:900});await page.screenshot({path:`evidencias/auditoria/local-${width}.png`,fullPage:true});r.layout.push(await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth})));}
await page.emulateMedia({reducedMotion:'reduce'});r.motion=await page.locator('.guia').first().evaluate(e=>({before:getComputedStyle(e,'::before').transitionDuration}));
await page.goto('https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/');r.published={title:await page.title(),guides:await page.locator('button.guia').count(),status:'loaded',footer:await page.locator('footer').innerText()};
fs.writeFileSync('evidencias/auditoria/browser-resultados.json',JSON.stringify(r,null,2));await browser.close();
