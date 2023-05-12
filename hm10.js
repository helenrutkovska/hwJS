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
class Person {
    constructor(name) {
      this.name = name;
    }
  
    whatsYourName() {
      console.log(`My name is ${this.name}.`);
    }
  }
  
  const person1 = new Person("Harry");
  const person2 = new Person("Elizabeth");
  const person3 = new Person("Andrew");
  const person4 = new Person("Mona");
  
  person1.whatsYourName(); 
  person3.whatsYourName(); 

//Task 3
  
class CarDetails {
    constructor(doors, steering) {
      this.doors = doors;
      this.steering = steering;
    }
    
    shareCarDetails() {
      console.log(`This car has ${this.doors} doors and this is ${this.steering}-hand drive car.`);
    }
  }
  
  const car1 = new CarDetails(4, "left");
  const car2 = new CarDetails(2, "right");
  const car3 = new CarDetails(5, "right");
  const car4 = new CarDetails(4, "left");
  
  car1.shareCarDetails(); 
  car3.shareCarDetails();  