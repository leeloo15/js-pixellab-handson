console.warn(
  `2.Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.`,
);
console.warn(
  `3.Adauga o proprietate numita topSpeed si asigneaza-i valoarea implicita 160.`,
);
console.warn(
  `4.Adauga o proprietate numita topReverseSpeed si asgineaza-i valoarea implicita -50.`,
);
console.warn(`5.Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza.
Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed`);

console.warn(
  `6.Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false. `,
);
console.warn(
  `7..Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.`,
);
console.warn(
  `8.Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false. `,
);
console.warn(
  `9.Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea. `,
);
console.warn(
  `10.Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda setTimeout().`,
);

class Car {
  areLightsOn = false;

  // functia ruleaza cand creem o instanta
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    // this este o referinta catre locatia in memorie a intantei curente
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;

    // v1 syntax
    this.isTrunkOpen = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();
    // v1 for preserving this a.i sa nu treaca in window:
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5 * 1000);
  }
}

const audi = new Car('Audi', 'black', 4, 50);

console.warn(
  `1.Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3). O poti salva intr-o variabila numita opel.`,
);
const opel = new Car('Opel', 'red', 4, 3);

// console.warn(`11.Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])`)
const cars = [audi, opel];

console.warn(`12.Ruleaza o bucla prin forEach prin Cars si afiseaza propozitiile (pentru fiecare din masini)
// “Masina era marca make si se deplasa cu speed km/h.”`);
// console.warn(`13.In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h.”`)
// trebuie facuta o bucla prin array
// bug pixelltab...posibil sa nu fie validate toate exercitiile datorita js asincron?

cars.forEach((car) => {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );

  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();
  car.decelerate();

  console.log(`Viteza noua este ${car.speed} km/h.`);
});
