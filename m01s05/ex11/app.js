//console.warn(`1. Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
// Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
// Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`)

function calculateSurface(width, length, height) {
  switch (arguments.length) {
    case 1:
      return width * width;
    case 2:
      return width * length;
    case 3:
      return 2 * width * length + 2 * width * height + 2 * length * height;
  }
}

console.warn(
  `2. Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.`,
);

function calculateCircleArea(r) {
  return Math.PI * r ** 2;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(
  `3 Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.`,
);

const pet = {
  name: 'Aurora',
  species: 'pisica',
  age: 3,
  getName: function () {
    return this.name;
  },
  getSpecies: function () {
    return this.species;
  },
  getAge: function () {
    return this.age;
  },
};

console.warn(
  `4. Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”`,
);
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

console.warn(`5. Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia:
“Animalul meu are petAge ani.”`);

const petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
