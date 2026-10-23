// Repères des réglages actuels; aucun paquet nécessaire.
const fs=require('node:fs'),path=require('node:path'),S=require('../js/simulation.js');
const common={reps:500,seed:2026,sigma:1,xdist:'uniform',edist:'normal',curve:0,growth:0,special:'none',specialX:9,shift:-18};
const configurations=[];
for(const n of [15,30,60])for(const scenario of ['ideal','vertical','follow','against','curve'])configurations.push({mode:'Simulation simple',config:{...common,n,scenario,b0:scenario==='curve'?36:20,b1:scenario==='curve'?-8:2,positiveOnly:true}});
for(const scenario of ['ideal','vertical','follow','against','skew','hetero','curve'])configurations.push({mode:'Simulation avancée',config:{...common,n:60,scenario,b0:1,b1:1}});
const results=configurations.map(({mode,config})=>{const r=S.repeat(config);return {mode,config:r.config,summary:Object.fromEntries(Object.entries(r.summary).map(([method,v])=>[method,{pente:v.a,ordonnee:v.b}]))};});
fs.writeFileSync(path.join(__dirname,'../docs/reperes-simulations.json'),JSON.stringify({description:'Repères des configurations actuelles, non arrondis. La simulation simple commence à n=15, a=2 et b=20 hors parabole; erreurs normales. Les références a et b des relations courbes ne sont pas les coefficients d’une vraie droite.',results},null,2)+'\n');
console.log('22 configurations actuelles enregistrées.');
