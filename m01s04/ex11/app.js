var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`1. Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.
Folosind propozitii de forma: “person.name cunoaste: html.” “person.name cunoaste: javaScript.”`);

var skillKeys = Object.keys(person.skills);
// ['html', 'css', 'javaScript']
skillKeys.forEach(function (key) {
  if (person.skills[key] === true) {
    console.log(`${person.name} cunoaste: ${key}.`);
  }
});

console.warn(
  `2. Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor.`,
);

var friendKeys = Object.keys(person.friends);
// ['larry', 'steven', 'carol']

friendKeys.forEach(function (key) {
  var friend = person.friends[key];
  console.log(`${friend.surname} ${friend.name}`);
});

console.warn(
  `3. Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()`,
);
var friendKeys = Object.keys(person.friends);
var message = 'Prietenii mei sunt ';
for (var i = 0; i < friendKeys.length; i++) {
  var key = friendKeys[i];
  var friend = person.friends[key];
  var punctuation = ', ';

  if (i === friendKeys.length - 1) {
    punctuation = '.';
  }

  if (i === friendKeys.length - 2) {
    punctuation = ' si ';
  }

  message += `${friend.name}${punctuation}`;
}
console.log(message);

console.warn(`4. Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze:
“Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…`);
var friendKeys = Object.keys(person.friends);
friendKeys.forEach(function (key) {
  var friend = person.friends[key];
  var diff = Math.abs(person.age - friend.age);

  console.log(
    `Diferenta de varsta intre ${friend.name} si ${person.name} este de ${diff} ani.`,
  );
});

// Tema
console.warn(
  `5. Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.`,
);

var skillsKeys = Object.keys(person.skills);
skillsKeys.forEach(function (skill) {
  console.log(skill);
});

console.warn(
  `6. Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.`,
);
var friendKeys = Object.keys(person.friends);
// imi returneaza array-ul ['larry', 'steven', 'carol']

friendKeys.forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  console.log(`${friend.name} ${friend.surname}`);
});

console.warn(
  `7. Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()`,
);
var friendKeys = Object.keys(person.friends);
// imi returneaza array-ul ['larry', 'steven', 'carol']
var message = 'Prietenii mei sunt ';

friendKeys.forEach(function (friendKey, index) {
  var friend = person.friends[friendKey];
  var punctuation = ', ';
  if (index === friendKeys.length - 1) {
    punctuation = '.';
  }
  if (index === friendKeys.length - 2) {
    punctuation = ' si ';
  }
  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(`8. Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze:
“Larry are xx ani. Steven are …”`);

var friendKeys = Object.keys(person.friends);
// imi returneaza array-ul ['larry', 'steven', 'carol']

friendKeys.forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  var message = `${friend.name} are ${friend.age} ani.`;
  console.log(message);
});
