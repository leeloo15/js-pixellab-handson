// 1.Folosind fisierul din folderul ex02
// 2.Afiseaza varsta prietenei Carol
// 3.Folosind anul curent calculeaza si afiseaza anul de nastere al lui Larry
// 4.Calculeaza diferenta si afiseaza propozitia: “Steven este cu xx ani mai mare decat Larry.” folosind proprietatile name.
// 5.Afiseaza propozitia: “Prietenul meu Steven Stevenson are xx ani.” folosind doar proprietatile
// 6.Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry.
// 7.Afiseaza numarul de caractere al numelui de familie al lui Steven

var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
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

console.warn(`Afiseaza varsta prietenei Carol`);
console.log(person.friends.carol.age.toString());

console.warn(
  `Folosind anul curent calculeaza si afiseaza anul de nastere al lui Larry`,
);
console.log((2022 - person.friends.larry.age).toString());

console.warn(`Calculeaza diferenta si afiseaza propozitia:
“Steven este cu xx ani mai mare decat Larry.” folosind proprietatile name.`);
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  `Afiseaza propozitia: “Prietenul meu Steven Stevenson are xx ani.” folosind doar proprietatile`,
);
console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani.',
);

console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt: Steven, Carol si Larry.`,
);
console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(
  `Afiseaza numarul de caractere al numelui de familie al lui Steven`,
);
console.log(person.friends.steven.surname.length.toString());

// 8.Folosind anul curent calculeaza si afiseaza anul de nastere al lui Steven.
console.warn(
  `8.Folosind anul curent calculeaza si afiseaza anul de nastere al lui Steven.`,
);
console.log((2022 - person.friends.steven.age).toString());

// 9.Calculeaza diferenta si afiseaza propozitia: “Steven este cu xx ani mai mare decat Carol.”
// folosind proprietatile name.
console.warn(`9.Calculeaza diferenta si afiseaza propozitia: “Steven este cu xx ani mai mare decat Carol.”
// folosind proprietatile name.`);
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.carol.age) +
    ' ani mai mare decat ' +
    person.friends.carol.name +
    '.',
);

// 10.Afiseaza propozitia: “Prietena mea Carol Carolson are xx ani.” folosind doar proprietatile.
console.warn(
  `10.Afiseaza propozitia: “Prietena mea Carol Carolson are xx ani.” folosind doar proprietatile.`,
);
console.log(
  'Prietena mea ' +
    person.friends.carol.name +
    ' ' +
    person.friends.carol.surname +
    ' are ' +
    person.friends.carol.age +
    ' ani.',
);

// 11.Afiseaza propozitia: “Prietenii mei sunt: Larry, Carol si Steven.”.
console.warn(`Prietenii mei sunt: Larry, Carol si Steven.`);
console.log(
  'Prietenii mei sunt: ' +
    person.friends.larry.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.steven.name +
    '.',
);

// 12.Afiseaza numarul de caractere al numelui de familie al lui Larry
console.warn(
  `12.Afiseaza numarul de caractere al numelui de familie al lui Larry`,
);
console.log(person.friends.larry.surname.length.toString());

// 13.Calculeaza diferenta dintre numarul de caractere al numelor lui Steven si Carol.
console.warn(
  `13.Calculeaza diferenta dintre numarul de caractere al numelor lui Steven si Carol.`,
);
console.log(
  (
    person.friends.steven.name.length - person.friends.carol.name.length
  ).toString(),
);
