var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

const pets = person.pets;
let petSumAge = 0;
let ageDiff = 0;
let i = 0;

// Tema
//1. Folosind codul din Ex 14
console.warn(
  `2. Afiseaza in consola folosind metoda forEach() numele fiecarui animal.`,
);
pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`. Folosind o bucla for afiseaza suma anilor animalelor.`);
for (i = 0; i < pets.length; i++) {
  petSumAge += pets[i].age;
}
console.log(petSumAge);

console.warn(
  `.4. Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);
pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`.5. Folosind o bucla for afiseaza cate una pe linie propozitiile:
“Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`);
for (i = 0; i < pets.length; i++) {
  ageDiff = new Date().getFullYear() - person.birthYear - pets[i].age;
  console.log(
    `Intre ${person.firstName} si ${pets[i].name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(`.6. Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii:
“Animalul meu se numeste xxxx.”.`);
for (i = pets.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${person.pets[i].name}.`);
}

console.warn(`.7. Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
“xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”`);
let oldestAnimal = pets[0];
for (i = 1; i < pets.length; i++) {
  let pet = pets[i];
  if (oldestAnimal.age < pet.age) {
    oldestAnimal = pet;
  }
  ageDiff = new Date().getFullYear() - person.birthYear - oldestAnimal.age;
}
console.log(
  `${oldestAnimal.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(
  `.8. Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
let message = `Am `;
pets.forEach(function (pet, index) {
  let punctuation = `, `;
  let arrayLength = pets.length;
  if (index === arrayLength - 1) {
    punctuation = `.`;
  }
  if (index === arrayLength - 2) {
    punctuation = ` si `;
  }
  message += pet.species + punctuation;
});
console.log(message);
