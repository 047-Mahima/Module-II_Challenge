// 1. Create a constructor function 'Car'
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 2. Implement an 'accelerate' method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `${this.make} is now going at ${this.speed} km/h after accelerating.`
  );
};

// 3. Implement a 'brake' method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is now going at ${this.speed} km/h after braking.`);
};

// 4. Create two 'Car' objects and experiment with methods
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Accelerate car1 and car2
car1.accelerate(); // BMW is now going at 130 km/h after accelerating.
car2.accelerate(); // Mercedes is now going at 105 km/h after accelerating.

// Brake car1 and car2
car1.brake(); // BMW is now going at 125 km/h after braking.
car2.brake(); // Mercedes is now going at 100 km/h after braking.
