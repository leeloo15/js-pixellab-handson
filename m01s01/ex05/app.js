var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var radius = inputRadius.value || 0;
  var result = (4 / 3) * Math.PI * Math.pow(radius, 3);
  // DRAGOS: eu nu am pus paranteze pentru 4/3 insa mi s-au pus automat la salvare
  elementResult.innerText = result;
});
