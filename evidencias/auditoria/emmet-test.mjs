import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
const cases=[['valid','ul>li*3'],['empty',''],['invalid','div['],['active','img[src=x onerror="alert(1)"]'],['long','div{'+ 'a'.repeat(50000)+'}'],['repeat','li*10000'],['nested','div>'.repeat(300)+'span'],['repeat-limit','li*1000000']];
const results=[];
for(const [id,input] of cases){
 const script=`import expand from 'emmet';const start=performance.now();try{const out=expand(${JSON.stringify(input)}); console.log(JSON.stringify({length:out.length,ms:performance.now()-start,sample:out.slice(0,180)}))}catch(e){console.log(JSON.stringify({error:e.name,ms:performance.now()-start}))}`;
 const r=spawnSync(process.execPath,['--max-old-space-size=128','--input-type=module','-e',script],{timeout:5000,maxBuffer:8192});
 results.push({id,inputLength:input.length,status:r.status,signal:r.signal,error:r.error?.code,result:r.stdout?.toString().trim(),resourceFailure:r.stderr?.toString().includes('heap out of memory')});
}
fs.writeFileSync('evidencias/auditoria/emmet-resultados.json',JSON.stringify(results,null,2));
