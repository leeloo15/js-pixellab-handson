var person = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

//2. Seteaza-l pe Steven ca prieten al lui Larry si al Andrei (si invers).
larry.friends.steven = steven;
steven.friends.larry = larry;

steven.friends.andra = andra;
andra.friends.steven = steven;

//3. Seteaz-o pe Carol ca prietena a Andrei (si invers).
carol.friends.andra = andra;
andra.friends.carol = carol;

//4. Folosind keywordul delete sterge prietenia dintre Person si Larry (si invers).
delete larry.friends.person;
delete person.friends.larry;

//5. Afiseaza numele complet al lui Person folosind obiectul Larry.
console.warn(
  `5.Afiseaza numele complet al lui Person folosind obiectul Larry.`,
);
console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

//6. Afiseaza numele complet a lui Larry folosind obiectul Person.
console.warn(
  `6. Afiseaza numele complet a lui Larry folosind obiectul Person.`,
);
console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

//7. Folosind obiectul Carol afiseaza numele complet al lui Persons.
console.warn(
  `7. Folosind obiectul Carol afiseaza numele complet al lui Persons.`,
);
console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);
//8. Folosind obiectul Andra afiseaza numarul total de caractere al numelui complet al lui Person.
console.warn(
  `8. Folosind obiectul Andra afiseaza numarul total de caractere al numelui complet al lui Person.`,
);
console.log(
  (
    andra.friends.steven.friends.person.name.length +
    andra.friends.steven.friends.person.surname.length
  ).toString(),
);
