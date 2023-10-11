// 1. Create a CarCl class
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // 2. Add a getter for speed in mi/h
  get speedUS() {
    return this.speed / 1.6;
  }

  // 3. Add a setter for speed in mi/h
  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }

  // 4. Implement accelerate and brake methods
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is now going at ${this.speed} km/h.`);
  }
}

// Create a new car and experiment
const car1 = new CarCl("Ford", 120);

// Accelerate and brake using km/h
car1.accelerate(); // Ford is now going at 130 km/h.
car1.brake(); // Ford is now going at 125 km/h.

// Use the getter and setter for speed in mi/h
console.log(car1.speedUS); // 81.25 (mi/h)
car1.speedUS = 50; // Set speed to 50 mi/h
console.log(car1.speed); // Speed in km/h after setting to 50 mi/h: 80 km/h
