type status = "started" | "stopped";
class Vehicle {
  status: status = "stopped";
  make: string;
  model: string;
  wheels: number;

  constructor(make: string, model: string, wheels: number) {
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
  constructor(make: string, model: string, wheels: number) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string, wheels: number) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle): void {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
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
  make: string | unknown[];
  model: string | unknown[];
  wheels: number;
  status: string;
  constructor(
    make: string | unknown[],
    model: string | unknown[],
    wheels: number,
    status: string
  ) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    this.status = status;
  }
  printMethod(
    number: number = 0,
    make: string | unknown[],
    model: string | unknown[]
  ): void {
    if (typeof make === typeof model)
      console.log(`This is ${make} & ${model} of NCycle.`);
    else {
    
      console.log(`This NCycle has a ${make} & ${model} at `);
    }
    console.log();
  }
  printAll(): void {
    console.log();
  }
}
