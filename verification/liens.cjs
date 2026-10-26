const fs=require('fs'),path=require('path');
const roots=['docs/MenuMath.html','docs/QELI.html','docs/Applets.html','docs/Secondaire.html','docs/applets/puissance-moyenne/index.html','docs/applets/puissance-moyenne/guide-profs.html','docs/applets/regression/index.html','docs/applets/regression/docs/guide-profs.html'];let count=0,missing=[];
for(const p of roots){const text=fs.readFileSync(p,'utf8');for(const m of text.matchAll(/(?:src|href)="([^"]+)"/g)){const ref=m[1];if(/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(ref))continue;const clean=decodeURIComponent(ref.split(/[?#]/)[0]);if(clean&&!fs.existsSync(path.resolve(path.dirname(p),clean)))missing.push({p,ref});count++;}}
console.log({checked:count,missing});
