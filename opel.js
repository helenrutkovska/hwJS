import Car from "D:\K6\LoadProject1\hwJS\car.js";

class OPEL extends Car {
  constructor() {
    super("OPEL");
  }

  startEngine() {
    console.log("Starting the Opel engine...");
  }

  accelerate(speed) {
    if (speed <= 0) {
      throw new Error("Invalid speed. Speed must be greater than 0.");
    }
    console.log(`Accelerating the Opel to ${speed} km/h...`);
  }
}

export default OPEL;