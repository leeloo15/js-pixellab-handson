class Car {
  areHazardsOn = false;
  areLightsOn = false;

  constructor(left = 0, top = 0, color = 'black') {
    this.left = left;
    this.top = top;
    this.color = color;

    this.intervalId = -1;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    // this.frame.style.left = `${this.left}px`;
    // this.frame.style.top = `${this.top}px`;
    this.changePosition(this.left, this.top);

    this.createFragment();
  }

  createFragment() {
    this.car = document.createElement('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    // roof
    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // body
    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // light back
    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    // this.lightBack = this.createElement('div', ['light', 'light--back']);
    this.carBody.append(this.lightBack);

    // light front
    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    // wheel back
    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.wheelCapBack = document.createElement('div');
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.wheelCapBack);

    // wheel front
    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.wheelCapFront = document.createElement('div');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.wheelCapFront);
  }

  turnLightOn() {
    // this.lightFront.style.backgroundColor = 'yellow';
    // functioneaza dar nu e ok, varianta de jos e buna:
    this.lightFront.classList.add('light--on');
    this.areLightsOn = true;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');
    this.areLightsOn = false;
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });
    return element;
  }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      // stop hazards
      clearInterval(this.intervalId);
      this.areHazardsOn = false;
    } else {
      // start hazards; v2 for "this" - nu functioneaza cu function (), doar cu arrow function
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightOff();
        } else {
          this.turnLightOn();
        }
      }, 800);
      this.areHazardsOn = true;
    }

    return this;
  }

  render() {
    document.body.append(this.frame);

    // method chaining
    return this;
  }
}

const car = new Car(0, 250, 'red');
car.render();

// Folosind fisierele rezultate din exercitiul 04. Creeaza configurare pentru culoarea rotilor si a capacelor de roti si metode pentru schimbarea lor dinamica.
// Creeaza metode numite engageBreak() si disenagageBreak() care vor aprinde respectiv stinge farul din spate.
// Creeaza o metoda numita toggleHazards() care sa functioneze ca avarie si sa aprinda si sa stinga farurile repetat. Foloseste o proprietate numita areHazardsOn pentru a putea tine cont de statusul sistemului.
