// console.warn(
//   `1. Modifica exemplul astfel incat bucla sa numere de la 1 la 100.`,
// );
// var i = 1;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// console.warn(`2. Ce se intampla daca i este initializat cu valoarea 101?`);

// nu intra in while deoarece conditia nu e adevarata

//console.warn(`3. Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).`)
// var i = 1;

// while (i < 100) {
//   console.log(i);

//   i++;
// }

//console.warn(`4. Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).`)
// var i = 1;

// while (i < 100) {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// }

// in urmatoarea rezolvare se afiseaza de la 2 la 50 fiindca mai intai incrementeaza iar abia apoi se afiseaza:

// var i = 1;

// while (i < 100) {
//   i++;
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }

// in urmatoarea rezolvare se afiseaza de la 1 la 49
// var i = 1;

// while (i < 100) {
//   console.log(i);
//   i++;

//   if (i === 50) {
//     break;
//   }
// }

// Tema
// console.warn(
//   `5. Modifica exemplul astfel incat bucla sa numere de la 1 la 67.`,
// );
// var i = 1;
// while (i < 100) {
//   console.log(i);

//   if (i === 67) {
//     break;
//   }
//   i++;
// }

//console.warn(`6. Modifica exemplul astfel incat bucla sa numere de la 1 la 66.`)
// var i = 1;

// while (i < 100) {
//   console.log(i);

//   if (i === 66) {
//     break;
//   }
//   i++;
// }

//console.warn(`7. Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).`)
// var i = 1;

// while (i < 100) {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
//   i++;
// }

// console.warn(
//   `8. Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).`,
// );
// var i = 0;

// while (i <= 32) {
//   i++;

//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

console.warn(`9. Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi
afiseaza toti multiplii de numar intre 5 si limita superioara introduse.`);

var numberInput = prompt(
  `Introduceti numarul pentru care doriti sa aflati multiplii`,
);
var limitInput = prompt(
  `Introduceti limita pana la care doriti sa aflati multipli`,
);

var i = 1;
var multipleNumberInput = 1;

while (multipleNumberInput <= limitInput) {
  if (multipleNumberInput >= 5) {
    console.log(multipleNumberInput);
  }

  multipleNumberInput = i * numberInput;
  i++;
}
