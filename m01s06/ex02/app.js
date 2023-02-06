//1.Adauga mesaj pentru Firefox.

// const paragraphElement = document.createElement('p');
// const userAgentsString = navigator.userAgent;
// let message = 'Nu stiu ce browser folosesti';

// if (userAgentsString.toLowerCase().includes('chrome')) {
//   message = 'Navighezi folosind Chrome';
// }

// paragraphElement.innerText = message;

// document.body.append(paragraphElement);

const paragraphElement = document.createElement('p');
const userAgentsString = navigator.userAgent.toLowerCase();
let message = 'Nu stiu ce browser folosesti';
let browserName = ';';

if (userAgentsString.includes('chrome')) {
  message = 'Navighezi folosind Chrome';
}

if (userAgentsString.includes('firefox')) {
  message = 'Navighezi folosind Firefox';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);

//2. Folosind metoda window.setTimeout() afiseaza dupa 3 secunde un prompt cu mesajul: “nume browser vrea sa stie cum te cheama”.
//3. Cu rezultatul metodei prompt afiseaza un element h1 cu mesajul: “Salut nume utilizator!”.
//6. Dupa ce apare elementul h1, asteapta inca 3 secunde si elimina paragraful initial din DOM folosind metoda .remove()
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove

setTimeout(() => {
  const userName = prompt(`${browserName} vrea sa stie cum te cheama`);
  const headingElement = document.createElement('h1');
  headingElement.innerText = `Salut ${userName}!`;

  document.body.append(headingElement);
  // callback hell - ex 06
  setTimeout(() => {
    paragraphElement.remove();
    // variable look up
  }, 1000 * 3);
}, 3000);

// this does not wait

//4. Adauga mesaj pentru pentru Internet Explorer. - NA anymore
//5. Converteste codul rezultat la o instructiune de tip switch. - nu facem
