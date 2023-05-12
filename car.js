class Car {
    constructor(brand) {
      this.brand = brand;
    }
  
    startEngine() {
      throw new Error("This method must be implemented in the child class");
    }
  
    accelerate(speed) {
      throw new Error("This method must be implemented in the child class");
    }
  };
  
  export default Car; 