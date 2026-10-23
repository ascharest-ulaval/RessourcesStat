(function(root){
 'use strict';
 function csv(result,param){
 const c=result.config,parameter=param==='a'?'Pente a':'Ordonnée à l’origine b',curved=c.scenario==='curve'||c.scenario==='custom'&&c.curve!==0;
 const rows=[['Résultats de simulation — trois méthodes'],['Paramètre comparé',parameter],['Interprétation',curved?'Biais et EQM par rapport à la référence linéaire; la relation est courbe.':'Biais et EQM par rapport à la droite de départ.'],['Précaution','Résultats approximatifs; un autre germe peut modifier les valeurs.'],[],['Méthode','Résultats valides','Répétitions','Moyenne','Biais','Écart-type','EQM']];
 for(const [id,name]of [['mayer','Mayer'],['median','Médiane-médiane'],['ols','Moindres carrés']]){const s=result.summary[id][param];rows.push([name,s.count,c.reps,s.mean,s.bias,s.sd,s.mse]);}
 const labels={ideal:'Des points autour d’une droite',vertical:'Un point beaucoup plus haut',follow:'Point éloigné suivant la tendance',against:'Point éloigné contraire à la tendance',skew:'X asymétriques',hetero:'Variabilité croissante',curve:'Parabole',custom:'Personnalisé'};
 rows.push([],['Réglage','Valeur'],['Situation',labels[c.scenario]],['Nombre de points',c.n],['Répétitions',c.reps],['Pente de départ a',c.b1],['Ordonnée de départ b',c.b0],['Dispersion σ',c.sigma],['Germe',c.seed],['Coefficient quadratique',c.scenario==='curve'?.75:c.scenario==='custom'?c.curve:0]);
 if(c.scenario==='custom')rows.push(['Distribution de x',c.xdist],['Distribution des erreurs',c.edist],['Croissance de dispersion',c.growth],['Point spécial',c.special],['x du point spécial',c.specialX],['Déplacement vertical',c.shift]);
 const cell=value=>{const text=value==null?'':typeof value==='number'?Number.isFinite(value)?String(value).replace('.',','):'':String(value);return '"'+text.replaceAll('"','""')+'"';};
 return '\uFEFF'+rows.map(row=>row.map(cell).join(';')).join('\r\n')+'\r\n';
 }
 root.ResultsExport={csv};if(typeof module!=='undefined')module.exports=root.ResultsExport;
})(globalThis);
