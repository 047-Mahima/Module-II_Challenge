class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
    return this; // Allow method chaining
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
    return this; // Allow method chaining
  }
}

class EVCl extends CarCl {
  // 2. Make the 'charge' property private
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    // Initialize the private 'charge' property
    this.#charge = charge;
  }

  // 3. Implement the 'chargeBattery' method for chaining
  chargeBattery(charge) {
    this.#charge = charge;
    console.log(`${this.make}'s battery is now charged to ${this.#charge}%.`);
    return this; // Allow method chaining
  }

  // Override the 'accelerate' method to consider charge level
  accelerate() {
    if (this.#charge < 20) {
      console.log(`${this.make}'s battery is too low to accelerate.`);
    } else {
      super.accelerate();
    }
    return this; // Allow method chaining
  }
}

// Create a new electric vehicle (EV)
const car1 = new EVCl("Rivian", 120, 23);

// Experiment with chaining methods
car1.accelerate().brake().chargeBattery(50).accelerate();

// Output:
// Rivian is now going at 130 km/h.
// Rivian is now going at 125 km/h.
// Rivian's battery is now charged to 50%.
// Rivian is now going at 135 km/h.
