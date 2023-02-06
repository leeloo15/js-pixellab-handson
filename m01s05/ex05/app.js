const person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 32;
  },
};

const currentYear = new Date().getFullYear();

console.warn(`1. Afiseaza primul nume al persoanei folosind metoda getName()`);
// console.log(person.getName()); - rezolvarea ok insa sunt probleme cu Pixeltabul si am abordat urmatoarea rezolvare
console.log(person.getName().split(' ')[0]);
// cu spatiu in split (' ') imparte bucati in functie de spatiile din arr sau stringuri; fara spatiu imparte toate caracterele in parte

console.warn(
  `2. Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.`,
);
console.log(currentYear - person.getAge());

console.warn(
  `3. Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).`,
);
const fullBirthYear = currentYear - person.getAge();
// const abbreviatedYear = ('' + fullBirthYear.slice(-2)); e transformat in string si se poate face slice
const abbreviatedYear = fullBirthYear.toString().slice(-2);
console.log(`'${abbreviatedYear}`);

console.warn(`4. Afiseaza propozita: “Ma numesc xxx si am yy ani!”`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);

console.warn(
  `5. Afiseaza numele intreg al persoanei folosind metoda getName()`,
);
console.log(person.getName());

console.warn(`6. Afiseaza varsta persoanei folosind metoda getAge()`);
console.log(person.getAge());

console.warn(
  `7. Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”`,
);
console.log(`M-am nascut in ${currentYear - person.getAge()}.`);

console.warn(
  `8. Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”`,
);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${
    currentYear - person.getAge()
  }!`,
);
