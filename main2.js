//ES6 example of class inheritance

class Vehicle {
    constructor() {
        this.wheels = 4
        this.motorized = true
    }

    ready() {
        return 'Ready to go'
    }
}

//Inheritance
class Car extends Vehicle{
    constructor() {
        // we use super so we can use the this keyword to make a reference to the object
        super();
        this.wheels = 4
    }

    fast() {
        return 'Lets go fast'
    }
}


const BMW = new Car()

console.log(BMW.ready())
