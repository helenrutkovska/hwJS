import Car from "D:\K6\LoadProject1\hwJS\car.js";

class RENO extends Car {
  constructor() {
    super("RENO");
  }

  startEngine() {
    console.log("Starting the RENO engine...");
  }

  accelerate(speed) {
    if (speed <= 0) {
      throw new Error("Invalid speed. Speed must be greater than 0.");
    }
    console.log(`Accelerating the RENO to ${speed} km/h...`);
  }
}

export default RENO;
