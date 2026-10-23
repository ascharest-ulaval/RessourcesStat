globalThis.Regression=require('../js/regression.js');
globalThis.Simulation=require('../js/simulation.js');
require('./cases.js');
console.log(TestReport.checks.join('\n'));
console.log(`${TestReport.count} tests réussis; ${TestReport.failed} échec(s).`);
process.exitCode=TestReport.failed?1:0;
