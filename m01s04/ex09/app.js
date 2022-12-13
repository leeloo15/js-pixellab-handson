//1. Modifica exemplul astfel incat bucla sa numere de la 1 la 100.
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

//2. Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 100);

//3. Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 0;

// do {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

// TEMA
// Modifica exemplul astfel incat bucla sa numere de la 1 la 52
// var i = 0;

// do {
//   i++;

//   console.log(i);

//   if (i === 52) {
//     break;
//   }
// } while (i < 100);

// sau

// var i = 0;

// do {
//   i++;

//   console.log(i);
// } while (i < 52);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// var i = 0;

// do {
//   i++;

//   console.log(i);

//   if (i === 51) {
//     break;
//   }
// } while (i < 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
// var i = 0;

// do {
//   i++;
//   console.log(i);
//   if (i === 12) {
//     break;
//   }
// } while (i < 100);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 8;

// do {
//   i++;

//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// } while (i < 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza
// toti multiplii de numar intre limita inferioara si limita superioara introduse.

var userNr = prompt(`Introduceti un nr`);
var lowerLimit = prompt(`Introduceti limita inferioara`);
var upperLimit = prompt(`Introduceti limita superioara`);

var numberMultiple;
var i = 0;

do {
  i++;
  numberMultiple = userNr * i;

  if (numberMultiple > lowerLimit) {
    console.log(numberMultiple);
  }
} while (numberMultiple < upperLimit - userNr);
