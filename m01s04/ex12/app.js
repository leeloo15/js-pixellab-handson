var globalVariable = 'Ma aflu in contextul global';

function contextTest() {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in contextul global.';

  console.log(globalVariable);
  console.log(localVariable);
  console.log(noVariable);
}

contextTest();

//1. Ce se intampla daca langa localVariable adaugi o variabila numita globalVariable cu valoarea “Nu ma aflu in contextul global.”?
//2. Ce se intampla daca afisezi in consola variabila localVariable imediat inainte de invocarea functiei contextTest?
//3. Dar daca afisezi variabila globalVariable?
//4. Ce se intampla daca langa localVariable adaugi o variabila numita globalVariable cu valoarea “Nu ma aflu in contextul global.”?
//5. Ce se intampla daca afisezi in consola variabila localVariable imediat dupa blockul if?
