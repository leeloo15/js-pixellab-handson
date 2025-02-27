// const calculateSurface = (width, length) = > {
//   console.log(arguments.length);
// }
// nu functioneaza fiindca nu merge cu arrowfunctions

function calculateSurface(width, length) {
  if (arguments.length === 2) {
    return width * length;
  } else if (arguments.length === 1) {
    return width ** 2;
  } else {
    // default
    console.warn('invalid parameters');
  }
}

console.warn(`1.Creeaza un wrapper numit calculateSquareSurface() pentru calculateSurface()
care sa primeasca un singur parametru si sa calculeze suprafata unui patrat.`);

function calculateSquareSurface(width) {
  const squareSurface = calculateSurface(width);

  return squareSurface;
}

console.warn(`2. Cu metoda noua calculeaza suprafata unui patrat de 4 pe 4.`);
console.log(calculateSquareSurface(4));

console.warn(`3. Creeaza un wrapper numit calculateRectangleSurface() pentru calculateSurface() care sa
primeasca doi parametrii si sa calculeze suprafata unui dreptunghi.`);

function calculateRectangleSurface(width, length) {
  const rectangleSurface = calculateSurface(width, length);

  return rectangleSurface;
}

console.warn(
  `4.Cu metoda noua calculeaza suprafata unui dreptunghi de 8 pe 9.`,
);
console.log(calculateRectangleSurface(8, 9));
