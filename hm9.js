//Task 1
class Animal {
    static animalType = "animal";
    name;
    satiety;
    haveFood;
  
    constructor(name) {
      this.name = name;
      this.satiety = 50; 
      this.haveFood = false; 
    }
  
    run(distance) {
      const requiredSatiety = distance / 10;
      if (requiredSatiety <= this.satiety) {
        this.satiety -= requiredSatiety;
        console.log(`${this.name} is running ${distance} meters. Satiety level: ${this.satiety}`);
      } else {
        console.log(`${this.name} can't run ${distance} meters. Current satiety level: ${this.satiety}. Required satiety level: ${requiredSatiety}`);
      }
    }
  
    findFood() {
      if (this.haveFood) {
        console.log(`${this.name} doesn't need to find food. It already has some.`);
        return;
      }
  
      const chance = Math.random();
      if (chance >= 0.8) {
        this.haveFood = true;
        console.log(`${this.name} has found some food.`);
      } else {
        console.log(`${this.name} hasn't found any food.`);
      }
    }
  
    feed() {
      if (!this.haveFood) {
        console.log(`${this.name} has nothing to eat.`);
        return;
      }
  
      this.satiety += 20;
      console.log(`${this.name}'s satiety level is now ${this.satiety}.`);
      this.haveFood = false;
    }
  
    speak() {
      console.log(`This is a ${Animal.animalType}. It's name is ${this.name}.`);
    }
  }

  const animal = new Animal("Lion");

  animal.speak(); 
  animal.run(50); 
  animal.run(100); 
  animal.run(200); 
  animal.findFood(); 
  animal.feed(); 
  animal.findFood(); 
  animal.feed(); 

//Task 2
class Phone {
    constructor(number, model, weight) {
      this.number = number;
      this.model = model;
      this.weight = weight;
    }
  
    receiveCall(name) {
      console.log(`Звонит ${name}`);
    }
  
    getNumber() {
      return this.number;
    }
  }
  
  const phone1 = new Phone('121156111', 'Nokia 123', 150);
  const phone2 = new Phone('232323233', 'Samsung S10', 170);
  const phone3 = new Phone('454545455', 'Nokia 222', 160);
  
  console.log(phone1.number, phone1.model, phone1.weight);
  console.log(phone2.number, phone2.model, phone2.weight);
  console.log(phone3.number, phone3.model, phone3.weight);
  
  phone1.receiveCall('Kate Holmes'); 
  console.log(phone1.getNumber()); 
  phone2.receiveCall('Tom Thomson'); 
  console.log(phone2.getNumber()); 