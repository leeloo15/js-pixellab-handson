//1. Folosind exemplul de la exercitiul 2, afiseaza mesajul intr-un paragraf in loc de consola.
// Inainte de a adauga elementul in DOM adauga-i clasa message. https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//2. Creaza o functie numita showMessage() pe care sa o chemi de fiecare data cand vrei sa afisezi un paragraf in DOM

// functie anonima autoapelanta; DOMContentLoaded poate fi inlocuit cu defer
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      const message = 'Mouseul este pe scena';
      console.log(message);
      showMessage(message);
      //sau showMessage(message, 'message'); pt varianta cu cssClass
    });

    stage.addEventListener('mouseout', () => {
      const message = 'Mouseul nu este pe scena';
      console.log(message);
      showMessage(message);
      //sau showMessage(message, 'message'); pt varianta cu cssClass
    });

    // function functions are hoisted

    function showMessage(message) {
      const paragrafElement = document.createElement('p');
      paragrafElement.innerText = message;
      paragrafElement.classList.add('message');
      // nu se pune .message fiindca nu e folosit selector
      document.body.append(paragrafElement);
    }
    // // sau function showMessage(message, cssClass = '') {
    //   const paragrafElement = document.createElement('p');
    //   paragrafElement.innerText = message;
    //   paragrafElement.classList.add(cssClass);
    //   document.body.append(paragrafElement);
    // }
  });
})();
