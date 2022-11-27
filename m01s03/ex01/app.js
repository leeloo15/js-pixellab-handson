var object = {
  name: 'George',
  surname: 'Boole',
  age: 49,
  petOwner: false,
  carOwner: true,
};

// <!--
// 1. Folosind codul din index.html, introdu datele tale si afiseaza in consola numele mic si varsta

console.warn(
  `Folosind codul din index.html,
  introdu datele tale si afiseaza in consola numele mic si varsta`,
);
console.log(object.name);
console.log(object.age.toString());

// 2.Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare

console.warn(`Afiseaza fraza “Ma numesc xxx yyy si am xx ani.”
in consola folosind operatorul de concatenare`);
console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);
// 3.Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent (un proces numit hardcodare)

console.warn(`Afiseaza anul in care te-ai nascut
scazand varsta pe care ai trecut-o in obiect din anul
curent (un proces numit hardcodare)`);
console.log((2022 - object.age).toString());
// 4.Adauga o cheie noua de tip boolean cu numele petOwner (observa capitalizarea)

// 5.Afiseaza fraza “xxx yyy are xx ani.” in consola folosind operatorul de concatenare
console.warn(
  `Afiseaza fraza “xxx yyy are xx ani.” in consola folosind operatorul de concatenare`,
);
console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

// 6.Afiseaza fraza “xxx s-a nascut in aaaa.” Foloseste tot anul curent pentru a scadea varsta.
console.warn(
  `Afiseaza fraza “xxx s-a nascut in aaaa.” Foloseste tot anul curent pentru a scadea varsta.`,
);
console.log(object.name + ' s-a nascut in ' + (2022 - object.age) + '.');

// 7.Adauga o cheie noua de tip boolean cu numele carOwner (observa capitalizarea)
// -->
