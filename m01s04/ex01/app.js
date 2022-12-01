//1.Folosind metoda prompt() prezentata,implementeaza schema logica prezentata si afiseaza mesajul: “Numarul este par|impar”.
//2.Nu afisa in consola, ci folosind metoda getElementById() si apoi proprietatea innerText afiseaza propozitia intr-un paragraf cu idul message.
// var number = prompt('Introdu un numar');
// var message = '';
// var messageElement = document.getElementById('message');

// if (number % 2 === 0) {
//   message = 'Numarul este par';
// } else {
//   message = 'Numarul este impar';
// }

// console.log(message);
// messageElement.innerText = message;

//3. Folosind metoda prompt() afiseaza in pagina mesajul: “Numarul introdus este mai mic | mai mare decat 20.”
// var userInput = prompt('Introdu un numar');
// var message = '';
// var messageElement = document.getElementById('message');
// var number = Number(userInput);
// // number poate fi un numar sau NaN
// // isNaN(number) || userInput === null

// if (userInput === null || isNaN(number)) {
//   message = 'Nu ai introdus un numar';
// } else {
//   if (number > 20) {
//     message = 'Numarul este mai mare decat 20';
//   } else if (number === 20) {
//     message = 'Numarul este egal cu 20';
//   } else {
//     message = 'Numarul este mai mic decat 20';
//   }
// }

// console.log(message);
// messageElement.innerText = message;

var userInput = prompt('Introdu un numar');
var referenceNumber = 20;
var message = '';
var messageElement = document.getElementById('message');
var number = Number(userInput);
// number poate fi un numar sau NaN
// isNaN(number) || userInput === null

if (userInput === null || userInput.trim().length === 0 || isNaN(number)) {
  message = 'Nu ai introdus un numar';
} else {
  if (number > referenceNumber) {
    message = `Numarul este mai mare decat ${referenceNumber}`;
  } else if (number === referenceNumber) {
    message = `Numarul este egal cu ${referenceNumber}`;
  } else {
    message = `Numarul este mai mic decat ${referenceNumber}`;
  }
}

console.log(message);
messageElement.innerText = message;

//4. Foloseste aceeasi metoda pentru a captura numele utilizatorului si pentru a afisa in document mesajul: “Numele meu este: xxx yyy.”
//5. Folosind aceeasi metoda afiseaza in document propozitia: “Numele introdus are xxx caractere.”
// Inlocuieste spatiile cu stringul gol pentru a nu le numara. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
//6 Folosind prompt() si String.includes() afiseaza mesajul: “Numele introdus contine|nu contine litera a.”
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
