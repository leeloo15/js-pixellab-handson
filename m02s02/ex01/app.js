// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

// const $p = $('<p>', {
//   id: 'myParagraph',
//   text: 'Textul care trebuie sa apara in paragraph',
//   class: 'clase de css',
// });

// $p.appendTo($('body'));

//1. Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo(). https://api.jquery.com/appendTo/
const $body = $('body');

// sau prin chaining:

const $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraph',
  class: 'clase de css',
}).appendTo($body);

//2. Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
// https://api.jquery.com/append/
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/

const $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebie sa fie mai mica de 5 caractere.',
});
$body.append($p2);
setTimeout(() => {
  $p2.addClass('error');
}, 1000 * 5);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// https://api.jquery.com/text/

// bad jQ
$('#message').text('Am schimbat dinamic acest paragraf.').removeClass('error');
// Creeaza un element de tip span cu idul password si cu textul “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
$('<span>', {
  id: 'password',
  text: ' Parola mea',
}).appendTo($p2);

$('#myParagraph, #message').wrapAll(
  $('<div>', {
    class: 'container',
  }),
);

//7. Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/
$('<h2>', {
  text: 'Mesaje',
}).prependTo($('.container'));

//8. Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda .after() https://api.jquery.com/after/
//12. Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind metoda .before() adauga-l deasupra divului .container
const $nav = $('<nav>', {
  class: 'navigation',
});
$('.container')
  .after($nav)
  .before(
    $('<h1>', {
      text: 'Invat jQuery',
    }),
  );

//9. Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation.
//10. Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation.

$('<h2>', {
  text: 'Navigatie',
}).prependTo($nav);
// Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link
// https://api.jquery.com/before/
//11. Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link
// https://api.jquery.com/prepend

$nav.append(
  $(`
<a href="/">
<sup>1</sup>
Primul Link</a>
`),
);

//13. Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery poate fi gasita aici”
// Cuvantul aici va fi o ancora care va deschide intr-o pagina noua documentia jQuery. Atributele target si href pot fi setate in acelasi fel cum sunt setate cele text sau class.
$('<p>', {
  text: 'Documentatia jQuery poate fi gasita ',
})
  .append(
    $('<a>', {
      text: 'aici',
      href: 'https://pixellab.ro',
      target: '_blank',
    }),
  )
  .append(
    $('<span>', {
      text: '.',
    }),
  )
  .appendTo($(document.body));
