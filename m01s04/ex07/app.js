var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
    friends: {},
  },
  {
    name: 'Larry',
    surname: 'Larryson',
    friends: {},
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
    friends: {},
  },
  {
    name: 'Carol',
    surname: 'Carolson',
    friends: {},
  },
  {
    name: 'Andra',
    surname: 'Andrason',
    friends: {},
  },
];

console.warn(
  '1. Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.',
);

for (var i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

console.warn(`2. Afiseaza numele complet inversat al tuturor prietenilor, insa o data ce l-ai gasit pe steven,
opreste bucla cu ajutorul keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.`);
for (var i = 0; i < friends.length; i++) {
  var person = friends[i];

  if (person.name === 'Steven') {
    console.log(`M-am oprit la ${person.surname} ${person.name}.`);
    break;
  }

  console.log(`${person.surname} ${person.name}`);
}

console.warn(`3. Folosind keywordul continue, afiseaza numele complet inversat al prietenilor,
doar daca numarul de caractere total al numelor lor este mai mare de 13 sub forma de propozitii
“Prenume Nume are mai mult de 13 caractere.”.`);

for (var i = 0; i < friends.length; i++) {
  var person = friends[i];
  var concatenetedName = person.surname + person.name;

  if (concatenetedName.length <= 13) {
    continue;
  }

  console.log(`${person.surname} ${person.name} are mai mult de 13 caractere.`);
}

console.warn(
  `4. Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.`,
);
for (i = 0; i < friends.length; i++) {
  var friendName = friends[i].name;
  console.log(friendName);
}

console.warn(`5. Afiseaza numele complet al tuturor prietenilor.`);
for (i = 0; i < friends.length; i++) {
  var person = friends[i];
  var name = `${person.name} ${person.surname}`;

  console.log(name);
}

console.warn(`6. Folosind keywordul break, afiseaza numele complet al prietenilor dar opreste bucla
la primul surname care are numarul de caractere mai mare sau egal decat 9 si afiseaz-l intr-o propozitie de forma
“M-am oprit la Nume Prenume.”.`);

for (i = 0; i < friends.length; i++) {
  var person = friends[i];
  var fullName = person.name + ' ' + person.surname;

  if (person.surname.length >= 9) {
    console.log(`M-am oprit la ${fullName}`);
    break;
  }
  console.log(fullName);
}
