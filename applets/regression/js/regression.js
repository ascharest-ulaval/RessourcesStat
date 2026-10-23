(function (root) {
  'use strict';
  const mean = a => a.reduce((s,v)=>s+v,0)/a.length;
  function quantile(a,p) { const b=[...a].sort((x,y)=>x-y), r=(b.length-1)*p, i=Math.floor(r); return b[i]+(b[Math.min(i+1,b.length-1)]-b[i])*(r-i); }
  const median = a => quantile(a,0.5);
  const point = (g,f) => ({x:f(g.map(p=>p.x)),y:f(g.map(p=>p.y))});
  function validate(data) { if(!Array.isArray(data)||data.some(p=>!p||typeof p.x!=='number'||typeof p.y!=='number'||!Number.isFinite(p.x)||!Number.isFinite(p.y))) throw Error('Chaque couple doit contenir deux nombres finis.'); return [...data].sort((a,b)=>a.x-b.x||a.y-b.y); }
  function line(a,b,p,extra={}) { if(!Number.isFinite(a)||!Number.isFinite(b)) return {error:'Droite indéterminée : abscisses identiques ou calcul non fini.'}; return {a,b,...extra}; }
  function fit(data,method) {
    let d; try {d=validate(data);} catch(e) {return {error:e.message};}
    if(d.length<(method==='median'?3:2)) return {error:'Pas assez de couples pour cette méthode.'};
    if(method==='ols') { const p=point(d,mean), xx=d.reduce((s,q)=>s+(q.x-p.x)**2,0), xy=d.reduce((s,q)=>s+(q.x-p.x)*(q.y-p.y),0), a=xy/xx; return line(a,p.y-a*p.x,p,{center:p}); }
    let groups;
    if(method==='mayer') {const k=Math.ceil(d.length/2); groups=[d.slice(0,k),d.slice(k)];}
    else if(method==='median') {const k=Math.round(d.length/3); groups=[d.slice(0,k),d.slice(k,d.length-k),d.slice(d.length-k)];}
    else return {error:'Méthode inconnue.'};
    const summaries=groups.map(g=>point(g,method==='mayer'?mean:median)), first=summaries[0], last=summaries.at(-1), a=(last.y-first.y)/(last.x-first.x), p=method==='mayer'?first:point(summaries,mean);
    return line(a,p.y-a*p.x,p,{groups,summaries,center:p});
  }
  function parse(text) {
    const data=[],errors=[]; const rows=text.replace(/^\uFEFF/,'').split(/\r?\n/);
    rows.forEach((row,i)=>{ if(!row.trim())return; const sep=row.includes(';')?';':row.includes('\t')?'\t':row.includes(',')?',':null; const cells=sep?row.split(sep):row.trim().split(/\s+/); if(i===rows.findIndex(r=>r.trim())&&cells.length===2&&cells[0].trim().toLowerCase()==='x'&&cells[1].trim().toLowerCase()==='y')return;
      const nums=cells.map(c=>c.trim().replace(',','.')); const number=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
      if(cells.length!==2||nums.some(c=>!number.test(c)||!Number.isFinite(Number(c)))) errors.push(`Ligne ${i+1} : deux nombres attendus.`); else data.push({x:Number(nums[0]),y:Number(nums[1])});
    }); if(!data.length)errors.push('Aucun couple valide.'); if(data.length>2000)errors.push('Maximum : 2 000 couples.'); return {data,errors};
  }
  const api={mean,median,quantile,validate,fit,parse}; root.Regression=api; if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
