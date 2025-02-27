var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `1. Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(`2.In mod similar, afiseaza skillurile care NU incep cu j.`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') !== true) {
    console.log(skill);
  }
}

console.warn(
  `3.Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.`,
);

var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  // message = message +
  message += `${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);

console.warn(`4.Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
doar daca varsta este mai mare sau egala cu 30 de ani.`);

var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;
  if (friendAge >= 30) {
    sumAge += person.friends[i].age;
  }
}

console.log(sumAge.toString());

console.warn(
  `5.Folosind un for, afiseaza suma anilor de nastere a persoanelor.`,
);
var sumBirthYear = 0;
var currentYear = new Date().getFullYear();

for (i = 0; i < person.friends.length; i++) {
  var personAge = person.friends[i].age;
  var personBirthYear = currentYear - personAge;

  sumBirthYear += personBirthYear;
}
console.log(sumBirthYear.toString());

console.warn(
  `6.Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.`,
);

for (var i = 0; i < person.friends.length; i++) {
  var ageDifference = person.age - person.friends[i].age;

  if (ageDifference < 2) {
    continue;
  }
  console.log(ageDifference);
}

console.warn(`7.Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ",
doar daca varsta prietenului este impara.`);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = person.age - friend.age;

  if (friend.age % 2 === 0) {
    continue;
  }

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}
console.log(message.trim());

console.warn(`8.Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills.
Atentie, va trebui sa numeri invers, de la length la 0.`);

for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(
  `9. Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana`,
);
for (var i = 0; i < person.skills.length; i++) {
  console.log(person.skills[i]);
}

console.warn(`10. In mod similar, afiseaza skillurile care incep cu c`);
for (var i = 0; i < person.skills.length; i++) {
  if (person.skills[i].startsWith('c')) {
    console.log(person.skills[i]);
  }
}

console.warn(
  `11. Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."`,
);

var message = `Numele de familie ale prietenilor mei sunt: `;

for (var i = 0; i < person.friends.length; i++) {
  var friendsName = person.friends[i].surname;
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  // message = message + friendsName + punctuation;
  message += friendsName + punctuation;
}
console.log(message);

console.warn(
  `12. Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`,
);
var sumAge = 0;
for (i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;

  sumAge += friendAge;
}
console.log(sumAge.toString());

console.warn(
  `13. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);
for (i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;
  var diff = person.age - friendAge;
  console.log(diff);
}

console.warn(`14. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ".
Repeta pentru tot arrayul friends.`);

var message = '';
for (i = 0; i < person.friends.length; i++) {
  var friendName = person.friends[i].name;
  var diff = person.age - person.friends[i].age;

  message += `Intre ${person.name} si ${friendName} este o diferenta de ${diff} ani. `;
}

console.log(message.trim());

console.warn(`15. Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni.
(Numarand de la length la 0).`);

var message = 'Prietenii mei sunt: ';
for (i = person.friends.length - 1; i >= 0; i--) {
  var friendName = person.friends[i].name + ' ' + person.friends[i].surname;
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }
  message += friendName + punctuation;
}
console.log(message);
