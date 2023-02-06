//1.In functia adaugata ca parametru la addEventListener keywordul this face referinta la elementul de DOM al butonului.
// Folosind proprietatea innerText schimba mesajul Opreste Afisarea in Porneste Afisarea in functie de statusul evenimentelor.
//2. Folosind metode deja cunoscute, adauga un paragraf in DOM care contine textul: “Alerta va fi afisata”, respective “Alerta nu va fi afisata”
//  in functie de statusul evenimentelor.
//3. Adauga un buton in document pe care cand apesi, sunt eliminate celelate butoane cu metoda .remove()
//4. Folosind metoda confirm(), modifica codul de la punctul anterior astfel incat utilizatorul sa confirme eliminarea elementelor din DOM:
// “Esti sigur ca vrei sa stergi butoanele din DOM?”.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm

(function () {
  // no hoist
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    // sau  const toggleEventButton = document.getElementById('toggleEventButton');
    const removeButton = document.querySelector('#removeButton');
    let eventBound = true;

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    removeButton.addEventListener('click', function () {
      // early return
      if (!confirm('Stergem butoanele?')) {
        return;
      }

      toggleEventButton.remove();
      showButton.remove();
    });

    toggleEventButton.addEventListener('click', function () {
      let message = '';
      let label = '';

      if (eventBound) {
        // if event is bound, remove
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        message = 'Porneste afisarea';
        // sau, pt js vechi: this.innerText = 'Porneste afisarea';
        label = 'Alerta  NU va fi afisata';
      } else {
        // if event is not bound, add
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        message = 'Opreste afisarea';
        // sau, pt js vechi:  this.innerText = 'Porneste afisarea';
        label = 'Alerta va fi afisata';
      }

      this.innerText = message;
      showMessage(label);
    });

    // function functions are hoisted
    function showAlert() {
      alert('Butonul a fost apasat');
    }

    // sau function showMessage(message = '')
    function showMessage(message) {
      let paragraphElement = document.querySelector('.message');

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add('message');
      }

      paragraphElement.innerText = message;
      paragraphElement.classList.add('message');

      document.body.append(paragraphElement);
    }
  });
})();
