var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
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
  `1. Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.`,
);
// for each - nu functioneaza continue si break, nu se utilizeaza la seturi de date mari;
// e(element), i(index), a(array - referinta catre adresa la care se regasesc datele - slide 33 din M01S04)

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`2. In mod similar, afiseaza skillurile care contin litera a.`);
person.skills.forEach(function (skill) {
  if (skill.includes('a') || skill.includes('A')) {
    console.log(skill);
  }
});

// pixelltab cere "," in loc de "si" insa noi am rezolvat in comentariu si varianta cerintei din curs
console.warn(
  `3. Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var arrayLength = friends.length;

  if (index === arrayLength - 1) {
    punctuation = '.';
  }

  // if (index === arrayLength - 2) {
  //   punctuation = ' si ';
  // }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(`4. Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
doar daca au varsta mai mare decat 30 inclusiv.`);
var sumAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    sumAge += friend.age;
  }
});
console.log(sumAge.toString());

console.warn(
  `5. Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.`,
);
var sumBirthYears = 0;
var currentYear = 2022;
// newDate().getFullYear();
person.friends.forEach(function (friend) {
  if (friend.age % 2 !== 0) {
    sumBirthYears += currentYear - friend.age;
  }
});
console.log(sumBirthYears.toString());

console.warn(`6. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends
daca aceasta este mai mare sau egala cu 2 ani.`);

person.friends.forEach(function (friend) {
  var diff = person.age - friend.age;

  if (diff >= 2) {
    console.log(diff);
  }
});

console.warn(
  `7. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven...`,
);
var message = '';
person.friends.forEach(function (friend) {
  var diff = person.age - friend.age;

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
});
console.log(message.trim());

console.warn(
  `8. Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.`,
);
// reverse e mutating function - spre exemplu, in caz ex 8, altereaza array-ul; slice clones reverse mutates
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

console.warn(
  `9. Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`,
);

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(`10. In mod similar, afiseaza skillurile care nu incep cu j.`);
person.skills.forEach(function (skill) {
  if (!skill.startsWith('j')) console.log(skill);
});

console.warn(
  `11. Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);
var message = 'Numele mari ale prietenilor mei sunt ';
var punctuation = ', ';

person.friends.forEach(function (friend, index) {
  var arrayLength = person.friends.length;

  if (index === arrayLength - 1) {
    punctuation = `.`;
  }
  message += `${friend.surname}${punctuation}`;
});
console.log(message);

console.warn(
  `12. Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`,
);

var sumYears = 0;
person.friends.forEach(function (friend) {
  var years = friend.age;
  sumYears += years;
});
console.log(sumYears.toString());

console.warn(
  `13. Folosind forEach, afiseaza suma anilor de nastere a persoanelor`,
);
var sumBirthYears = 0;

person.friends.forEach(function (friend) {
  var birthYear = new Date().getFullYear() - friend.age;
  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(
  `14. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);
person.friends.forEach(function (friend) {
  var diff = person.age - friend.age;
  console.log(diff);
});

console.warn(
  `15. Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`,
);

person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    var name = friend.name + ' ' + friend.surname;
    console.log(name);
  });
