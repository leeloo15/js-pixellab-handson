//1. Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza protectiile deja cunoscute.
//2. Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.
//3. Ruleaza metoda accelerate().
//4. Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
//5. Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
//6. Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().

const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  displaySeed: function () {
    console.log(`Viteza curenta este ${this.speed}.`);
  },
  accelerate: function () {
    this.speed++;
    this.displaySeed();
  },
  decelerate: function () {
    this.speed++;
    this.displaySeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
