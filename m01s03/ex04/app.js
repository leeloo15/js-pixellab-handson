var myArray = [1, 2, 3, 4, 5, 6];
console.warn(`1. Afiseaza numarul de pe pozitia 5 a arrayului.`);

console.log(myArray[5].toString());

console.warn(`2. Afiseaza numarul 3 din array.`);
console.log(myArray[2].toString());

console.warn(`3. Afiseaza lungimea arrayului.`);
console.log(myArray.length);

console.warn(`4. Afiseaza suma numerelor de pe pozitia 0 si 4.`);
console.log(myArray[0] + myArray[4]);

console.warn(`5. Afiseaza pozitia 1.`);
console.log(myArray[1].toString());

console.warn(`6. Afiseaza numarul de pe pozitia 2 a arrayului.`);
console.log(myArray[2]);
// DRAGOS: acest exercitiu nu este verificat de Pixeltab

console.warn(`7. Afiseaza numarul 4 din array.`);
console.log(myArray[3].toString());

console.warn(
  `8. Afiseaza diferenta dintre lungimea arrayului si valoarea din pozitia 5.`,
);
console.log((myArray.length - myArray[5]).toString());

console.warn(`9. Afiseaza suma numerelor de pe pozitia 1 si 3.`);
console.log(myArray[1] + myArray[3]);
// DRAGOS: acest exercitiu nu este verificat de Pixeltab

console.warn(`10.Afiseaza produsul numerelor de pe pozitia 0 si 5.`);
console.log(myArray[0] + myArray[5]);
// DRAGOS: acest exercitiu nu este verificat de Pixeltab

console.warn(`11.Afiseaza diferenta numerelor de pe pozitia 3 si 4.`);
console.log(myArray[3] - myArray[4]);

console.warn(
  `12.Folosind metoda Math.pow() afla rezultatul ridicarii la putere a numarului de pe pozitia 5 la numarul de pe pozitia 3`,
);
console.log(Math.pow(myArray[5], myArray[3]));
