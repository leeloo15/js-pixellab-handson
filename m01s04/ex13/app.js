// Ce se intampla daca langa
// localVariable adaugi o variabila
// numita globalVariable cu valoarea
// “Nu ma aflu in contextul global.”?
// Ce se intampla daca afisezi in
// consola variabila localVariable imediat dupa blockul if?

var globalVariabile = `Ma aflu in contextul global`;

if (true) {
  var localVariable = `Ma aflu in contextul local`;
  var globalVariabile = `Nu ma aflu in contextul global`;

  console.log(globalVariabile);
  console.log(localVariable);
}
console.log(globalVariabile);

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

for (var i = 0; i <= 9; i++) {
  console.log(i);
}
console.log(i);
