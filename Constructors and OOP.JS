console.log("This is the demonstration of OOP, object literals and Constructors in JS");
let car = {
    name: "MAruti Suzuki 1000",
    maxSpeed: 90,
    run: function () {
        console.log("I am running")
    }
}
console.log(car);
function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.maxSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
}
let car1 = new generalCar("Audi", 300);
let car2 = new generalCar("BMW", 250);
console.log(car1);
console.log(car2);
