//4. Foloseste aceeasi metoda pentru a captura numele utilizatorului si pentru a afisa in document mesajul:
// “Numele meu este: xxx yyy.”
//5. Folosind aceeasi metoda afiseaza in document propozitia: “Numele introdus are xxx caractere.”
// Inlocuieste spatiile cu stringul gol pentru a nu le numara. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
//6 Folosind prompt() si String.includes() afiseaza mesajul: “Numele introdus contine|nu contine litera a.”
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// Creeati un fisier index2.html care va contine trei paragrafe cu iduri la alegere (mess01)
// Folosind metoda prompt, aflati numele utilizatorului
// Extrageti cele trei paragrafe din DOM
// Si afisati urmatoarele messaje in ele:
// "Numele meu este: xxx yyy."
// "Numele introdus are xxx caractere."
// "Numele introdus contine|nu contine litera a."

var userInput = prompt(`Care este prenumele si numele tau?`);
var userInputLength = userInput.replaceAll(' ', '').length;
var message01 = `Numele meu este: ${userInput}.`;
var message02 = `Numele introdus are ${userInputLength} caractere.`;
var message03 = ``;

var mess01Element = document.getElementById('mess01');
mess01Element.innerText = message01;

var mess02Element = document.getElementById('mess02');
mess02Element.innerText = message02;

if (userInput.includes('a')) {
  message03 = 'Numele introdus contine litera a.';
} else {
  message03 = 'Numele introdus nu contine litera a.';
}

var mess03Element = document.getElementById('mess03');
mess03Element.innerText = message03;
