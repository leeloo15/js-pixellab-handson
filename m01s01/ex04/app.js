var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var radius = inputRadius.value || 1;
  var result = Math.PI * Math.pow(radius, 2);

  elementResult.innerText = result;
});
