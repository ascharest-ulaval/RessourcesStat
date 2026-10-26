// Depuis la racine de Régression : node tests/liens-locaux.cjs
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');let count=0;
// Integration au site : seul le script de comptage partage est autorise hors de l'applet.
const analytics=path.resolve(root,'../../analytics.js');
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())walk(file);else if(/\.(html|md)$/.test(file)){const text=fs.readFileSync(file,'utf8');const refs=file.endsWith('.html')?[...text.matchAll(/(?:href|src)="([^"]+)"/g)].map(m=>m[1]):[...text.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]);for(const ref of refs){if(/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(ref))continue;const clean=decodeURIComponent(ref.split(/[?#]/)[0]);if(!clean)continue;const target=path.resolve(path.dirname(file),clean);assert.ok(target===analytics||target===root||target.startsWith(root+path.sep),'Lien hors du projet : '+file+' → '+ref);assert.ok(fs.existsSync(target),'Lien absent : '+file+' → '+ref);count++;}}}}
walk(root);
const provenance=JSON.parse(fs.readFileSync(path.join(root,'docs/data/provenance-quebec.json'),'utf8'));
for(const file of provenance.files){const hash=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'docs/data',file.file))).digest('hex');assert.equal(hash,file.sha256,file.file);}
console.log(`${count} liens locaux valides; les trois empreintes des sources sont conformes.`);
