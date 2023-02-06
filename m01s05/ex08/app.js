const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');

function clickHandler() {
  alert(`Ai apasat butonul!`);
}

console.warn(`1. Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si
foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime.`);
button.addEventListener('click', clickHandler);

console.warn(`2. Adauga un buton pe care scrie Elimina Evenimentul.`);
console.warn(`3. La click pe acest buton nou, foloseste metoda removeEventListener
al variabilei button si foloseste numele clickHandler ca parametru.`);
removeEventButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

console.warn(`4. Adauga un buton nou in document cu id-ul query si folosind addEventListener()
// ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.`);
console.warn(
  `5. Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.`,
);
console.warn(`6. Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila (paragraphElement),
apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.`);
const button2 = document.getElementById('query');
const paragraphElement = document.getElementById('message');
let personInput = '';
function ageQuery() {
  personInput = prompt(`Care e varsta dvs?`);
  console.log(`Ai ${personInput} ani.`);
  paragraphElement.innerText = `Ai ${personInput} ani.`;
}
button2.addEventListener('click', ageQuery);
