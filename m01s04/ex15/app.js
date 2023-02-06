//1. Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested) afiseaza
// diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
// Poti folosi metoda pentru a converti numerele negative in pozitive.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// 2.Ignore person.age, iteratiile se fac doar peste person.friends

// Exemplu:
// Intre Larry si Steven este o diferenta de x ani.
// Intre Larry si Carol este o diferenta de x ani.
// Intre Steven si Larry este o diferenta de y ani.

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

for (let x = 0; x < person.friends.length; x++) {
  const friendX = person.friends[x];

  for (let y = 0; y < person.friends.length; y++) {
    const friendY = person.friends[y];
    if (x === y) {
      continue;
    }
    const ageDiff = Math.abs(friendX.age - friendY.age);
    console.log(
      `Intre ${friendX.name} si ${friendY.name} este o diferenta de ${ageDiff} ani.`,
    );
  }
}
