"use strict";
class Vehicle {
    constructor(make, model, wheels) {
        this.status = "stopped";
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
    constructor(make, model, wheels) {
        super(make, model, 4);
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, wheels) {
        super(make, model, 2);
    }
}
function printStatus(vehicle) {
    if (vehicle.status === "started") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S", 2);
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());
const myBuick = new Car("Buick", "Regal", 4);
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);
class NCycle {
    constructor(make, model, wheels, status) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
        this.status = status;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
    printMethod(wheels, number = 0, make, model) {
        if ((!Array.isArray(make) && !Array.isArray(model)))
            console.log(`This is ${make} & ${model} of NCycle.`);
        else {
            console.log(`This NCycle has a ${make} & ${model} at make[${number}] & model[${number}]`);
        }
        console.log();
    }
    printAll() {
        console.log();
    }
}
