class Animal {
  constructor(color, leg_number) {
    this.color = color;
    this.leg_number = leg_number;
  }

  move() {
    return `I'm moving with ${this.leg_number} legs!`;
  }
}

class Cat extends Animal {
  constructor(color, leg_number) {
    super(color, leg_number);
  }
}

class Bug extends Animal {
  constructor(color, leg_number) {
    super(color, leg_number);
  }
}

class Bird extends Animal {
  constructor(color, leg_number, can_fly) {
    super(color, leg_number);
    this.can_fly = can_fly;
  }

  move() {
    if (this.can_fly) {
      return `I'm flying`;
    } else {
      return super.move();
    }
  }
}