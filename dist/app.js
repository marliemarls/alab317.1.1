"use strict";
class Vehicle {
    constructor(make, model, wheels, status) {
        this.status = status;
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class Car extends Vehicle {
    constructor(make, model, wheels, status) {
        super(make, model, 4, "running");
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, wheels, status) {
        super(make, model, 2, "running");
    }
}
function printStatus(vehicle) {
    if (vehicle.status === "running") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S", 2, "stopped");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
const myBuick = new Car("Buick", "Regal", 4, "running");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
