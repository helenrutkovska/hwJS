//Task 1
class Car {
    constructor(brand, engineType) {
      this.brand = brand;
      this.engineType = engineType;
    }
  
    getMaxSpeed() {
      return "Unknown";
    }
  
    getCarCost() {
      return "Unknown";
    }
  
    displayInfo() {
      const maxSpeed = this.getMaxSpeed();
      const carCost = this.getCarCost();
      console.log(`This is ${this.brand}. It has ${this.engineType} engine and max speed equal to ${maxSpeed}. Approximetly cost of the car is ${carCost}.`);
    }
  }
  
  class SportCar extends Car {
    getMaxSpeed() {
      return "300 km/h";
    }
  
    getCarCost() {
      return "$100,000";
    }
  }
  
  class LuxuryCar extends Car {
    getMaxSpeed() {
      return "250 km/h";
    }
  
    getCarCost() {
      return "$200,000";
    }
  }
  
  const sportCar1 = new SportCar("Ferrari", "NewA");
  sportCar1.displayInfo();
  
  const luxuryCar1 = new LuxuryCar("Mercedes", "NewM");
  luxuryCar1.displayInfo();


//Task 2

