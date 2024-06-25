class Vehicle {
  make: string;
  model: string;
  wheels: number;
  status: string;

  constructor(make: string, model: string, wheels: number, status: string) {
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
  constructor(make: string, model: string,wheels:number,) {
    super(make, model, 4, "stopped");
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string,wheels:number) {
    super(make, model, 2, "started");
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "running") {
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
