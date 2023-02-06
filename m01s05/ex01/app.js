//1. Stocheaza valoarea pentru ora intr-o variabila numita hours.
//2. Apeleaza din consola (nu editor) variabila hours.
//3. Stocheaza valoarea pentru minute intr-o variabila numita minutes.
//4. Stocheaza valoarea pentru secunde intr-o variabila numita seconds.
//5. Creeaza si afiseaza in consola un mesaj: “hh:mm:ss, am ajuns la Pixellab.”.
// Adauga si milisecundele intr-o variabila numita milliseconds.
// Schimba mesajul astfel incat sa afiseze si milisecundele.
// Creeaza o functie numita getTime care sa salveze intr-o variabila exactTime ora, minutele si secundele curente. Foloseste keywordul return pentru a elimina nevoia de variabila
// Optional: foloseste template strings (``)
// Afiseaza mesajul “hh:mm:ss, am ajuns la Pixellab.”.

// console.log(`
// ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`);

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const exactTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  return exactTime;
}

console.log(`${getTime()} am ajuns la Pixellab`);
