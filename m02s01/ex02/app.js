// constructor: functia care se ruleaza cand se instantiaza clasa
class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  // accelerate() {
  //   this.speed++;
  //   this.displaySpeed();
  // }

  // decelerate() {
  //   this.speed--;
  //   this.displaySpeed();
  // }

  // decelerate() {
  //   if (this.speed-- < this.topReverseSpeed) {
  //     this.speed = this.topReverseSpeed;

  //     return;
  //   }
  //   this.speed--;
  //   this.displaySpeed();
  // }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }
}

console.warn(`1.Instantiaza o bicicleta (marca Pegas, culoare red, viteza curenta 8, si viteza maxima 20).
// O poti stoca intr-o variabila numita bike.`);
console.warn(`2.Seteaza viteza instantei bike la 2`);
console.warn(`3.Foloseste metoda decelerate() de trei ori, ce observi? `);
console.warn(`4.Seteaza viteza instantei bike la -10, ce observi?`);
const bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();
bike.setSpeed(10);

// decelerate() {
//   it(this.speed < 0) {
//     this.speed = 0;
//   }

//   this.displaySpeed();
// }

// console.warn(`5.Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle, numita Tricycle. Diferenta fiind ca o tricicleta are trei roti. `)
class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }
}
// console.warn(`6.Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2, viteza minima -2, viteza maxima 9).
// O poti stoca intr-o variabila numita trike. `)
// console.warn(`7.Seteaza viteza instantei trike la 0`)
// console.warn(`8.Foloseste metoda decelerate() de trei ori, ce observi? `)
// console.warn(`9.Seteaza viteza instantei trike la -10, ce observi?`)
// console.warn(`10.Clasa Vehicle nu protejeaza vehiculele de supraaccelerare si subaccelerare.
// Modifica metodele accelerate() si decelerate() astfel incat viteza sa nu poata scadea sau creste sub viteza maxima sau minima. `)
// console.warn(`11.Seteaza viteza instantei trike la -10, ce observi?`)
// console.warn(`12.Creeaza o masina noua (marca Audi, culoare blue, viteza curenta 3, viteza maxima 140, viteza minima -50). `)
// console.warn(`13.Seteaza viteza noii instante la 140, apoi ruleaza metoda accelerate(), ce observi?`)
