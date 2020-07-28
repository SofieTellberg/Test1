var a = 0; // GLOBALT DEFINERAD VARIABEL. DENNA HAR VI ACCESS TILL ÖVERALLT
function addnumber() {
  a = 16;
  console.log(`A i funktionen: ${a}`);
}

addnumber();
console.log(`Nummret är: ${a}`);
