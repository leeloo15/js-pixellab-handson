//5 Toata informatia poate fi inventata. Nu divulga informatii personale inutil.
//20. Folosirea variabilelor este optionala dar incurajata.
//1. Creeaza un obiect numit person
//2. Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode.
//3. Proprietatea pets sa contina un array de obiecte cu trei pozitii.
//4. Obiectele din pets sa contina urmatoarele proprietati: name, species, age.
var person = {
  firstName: 'Lois',
  lastName: 'Lane',
  email: 'lois.lane@metropolis.com',
  birthYear: 1987,
  pets: [
    {
      name: 'Otis',
      species: 'caine',
      age: 6,
    },
    {
      name: 'Leia',
      species: 'pisica',
      age: 3,
    },
    {
      name: 'Picard',
      species: 'broasca testoasa',
      age: 50,
    },
  ],
  zipCode: '213456',
};

var difference = (2022 - person.birthYear - person.pets[0].age).toString();
//Dragos: cerinta 11 nu e urmarita de Pixelab:
//  11. Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
var petName = person.pets[0].name;
var personFullName = person.firstName + ' ' + person.lastName;

//6. Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.
console.warn(
  `6. Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”.
  Nu uita de proprietatea length a arrayului pets.`,
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

//7. Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.
console.warn(`7. Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log(`Am acelasi email din copilarie: ` + person.email + '.');

//8. Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
console.warn(`Unul din cele x animale ale mele este species si are age ani.”`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

//9. Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
console.warn(
  `9.Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);
console.log((2022 - person.pets[2].age).toString());

//10. Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si
// afiseaza aceasta diferenta. Foloseste anul curent.
console.warn(`10. Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta.
// Foloseste anul curent.`);
console.log(difference);

// Dragos: Cerinta 12 nu e urmarita de Pixellab
//12. Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
console.warn(
  `12. Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ` +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

// Dragos: cerintele 13-19 nu sunt urmarite de pixeltab

//13. In documentul HTML creeaza o lista neordonata <ul> cu 4 elemente goale <li>.
//14. Fiecare li sa aiba un id: prop01, prop02… etc
//15. Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person:
//16. Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
document.getElementById('prop01').innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa.';

//17. Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
document.getElementById('prop02').innerText = Math.abs(
  person.pets[0].age - person.pets[2].age,
);

//18. Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
document.getElementById('prop03').innerText =
  'Ma numesc ' +
  personFullName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode +
  '.';

//19. Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.
document.getElementById('prop04').innerText =
  'Animalele mele s-au nascut in ' +
  (2022 - person.pets[0].age) +
  ', ' +
  (2022 - person.pets[1].age) +
  ', respectiv ' +
  (2022 - person.pets[2].age) +
  '.';
