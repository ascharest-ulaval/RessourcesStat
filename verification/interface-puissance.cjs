const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const html=fs.readFileSync('applets/puissance-moyenne/index.html','utf8'),script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const nodes={};const node=()=>({value:'',textContent:'',innerHTML:'',children:[],attrs:{},setAttribute(k,v){this.attrs[k]=v},appendChild(x){this.children.push(x)},addEventListener(){}});
for(const m of html.matchAll(/\bid="([^"]+)"[^>]*>/g)){nodes[m[1]]=node();nodes[m[1]].value=m[0].match(/value="([^"]+)"/)?.[1]||'';}
Object.assign(nodes.typeTest,{value:'droite'});const ctx={Math,Number,parseFloat,parseInt,document:{getElementById:id=>nodes[id],createElementNS:()=>node()}};vm.createContext(ctx);vm.runInContext(script,ctx);
let count=0;for(const type of ['gauche','droite','bilateral'])for(const mu0 of [-3,0,3])for(const mu1 of [-3,0,3])for(const alpha of [.01,.05,.2])for(const n of [5,100]){
Object.entries({typeTest:type,mu0,mu1,alpha,n,sigma:1}).forEach(([k,v])=>nodes[k].value=String(v));nodes.graph.children=[];ctx.update();const alt=type==='droite'?mu1>mu0:type==='gauche'?mu1<mu0:mu1!==mu0;
assert.ok(nodes.results.innerHTML.includes(alt?'Puissance ≈':'Probabilité de rejet ≈'));assert.ok(!/NaN|Infinity/.test(nodes.results.innerHTML));assert.ok(!/NaN|Infinity/.test(JSON.stringify(nodes.graph.children)));assert.equal(nodes.graph.children.filter(x=>x.attrs['stroke-dasharray']).length,type==='bilateral'?2:1);count++;
}
console.log(`${count} combinaisons de controles : libelles, seuils et SVG numeriquement valides (DOM simule).`);
