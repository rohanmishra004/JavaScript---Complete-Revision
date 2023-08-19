// //Prototypal Inheritance and Prototypal Chain

// //ES6 introduced classes which is modern way to construct objects

// //That said prototypal inheritance and chain are :;
// //1) classes are sysntactic sugar implementing prototypal inheritance and chain


// //Object Literals

// const person = {
//     alive : true
// }


// const musician = {
//     plays:true
// }

// //in order to implement inheritance from person to musician we can use __proto__

// // musician.__proto__ = person;

// // console.log(musician.plays)
// // console.log(musician.alive)
// // //we can do the above for person as well

// // console.log(person)


// //Above was the older way of doing things , JS has now getPrototypeOf and setPrototypeOf methods instead of using __proto__

// Object.setPrototypeOf(musician, person)

// // console.log(person)
// // console.log(Object.getPrototypeOf(musician))
// // console.log(musician.__proto__)

// // //we can also use === operator to check their equality

// // console.log(Object.getPrototypeOf(musician) === musician.__proto__)
// // // output - true


// const guitarist = {
//     strings: 6, 
//     __proto__ : musician
// }

// console.log(guitarist)

// console.log(guitarist.alive)
// console.log(guitarist.plays)
// console.log(guitarist.strings)

//--------------------------------------------------


//An object can directly inherit only from one Object

const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial(){
        return this.seats
    },

    //setters take one parameter
    set seatMaterial(material) {
        this.seats = material
    }
}

const luxuryCar = {}

// Object.setPrototypeOf(luxuryCar, car);
// luxuryCar.seatMaterial="leather"
// console.log(luxuryCar)
// //get keys of an object
// console.log(Object.values(luxuryCar))

// //forEach will not extract inherit props
// Object.keys(luxuryCar).forEach(key => console.log(key))


// //But a for .. in loop includes inherited props
// for (let key in luxuryCar) {
//     console.log(key)
// }
//-----------------------------------------------------------
//Object Constructors
function Animal(species) {
    this.species = species;
    this.eats = true
}

// In case of arrow functions the this keyword does not change as it is not bound to the refreence so it remains undefined , therefor its better to use regular functions

// Animal.prototype.walk=()=>{
//     console.log(`${species} is walkings`)
// }


Animal.prototype.walk= function(){
    console.log(`${this.species} is walking`)
}

//New instance from Animal constructors
const tiger = new Animal('tiger')
console.log(tiger)
console.log(tiger.walk())



