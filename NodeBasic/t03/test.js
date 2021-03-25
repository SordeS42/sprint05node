/*
  Task 03 (test.js)
  Task name: firstUpper
*/

const i = require('./index');


console.log(`"  090 098": ${i.firstUpper("  090 098")}`);
console.log(`"   testing   String": ${i.firstUpper("   testing   String")}`);
console.log(`"07": ${i.firstUpper("07")}`);
console.log(`"": ${i.firstUpper("")}`);
console.log(`null: ${i.firstUpper(null)}`);

console.log(i.firstUpper('   ...I Will Rebuild Krypton Atop His Bones.'));
console.log(i.firstUpper(' 300room FOR yoUr   DESTiny   '));
