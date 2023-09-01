// //Closure - a combination of functions bundled together with its surrounding states, Closures are created every time a function is created

// //Nested Functions have access to variables declared in their own scope as well as in outer scope 


// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter)
//     }
//     // inner() //Counter value 1
//     /**
//     Here the inner function will check for counter value , since its not present in inner scope , it will check the outer scope or its parent scope , there it finds a value so it brings the counter value inside the inner scope and then add 1 to it , and if we call it multiple times then the counter value will keep on updating it 
//      */

//     // inner()   //here counter value is 2


//     /**
//     But instead of calling the inner function if we return the function then we can assign a function call to outer function
//      */

//     return inner
// }
// // outer()
// /**
// In the same instance if we call outer more than once it will create a new counter value and the output would be 1 again , but if we call inner twice and outer twice , then it will call the new value of second inner call as well , then the output would be 2 , meaning that second inner call has created a closure with second outer call
//  */
// // outer()


// //This way we can use this function call from inner function outside its scope but it will still maintain a reference to it parents elements , that is why the newFun() call will have access to counter value
// const newFunc = outer()

// newFunc()


//------------------------------------------------------------------------------------------------------------

//Function CURRYING - Breaking a function with many parameters to nested function with single parameter

//Example 1 

// const sum = (a, b, c) => {
//     console.log(a + b + c);
// }


// const currySum = (a) => {
//     return (b) => {
//         return (c) => {
//             console.log(a+b+c)
//         }
//     }
// }

// currySum(10)(20)(30)

//also currying helps us to break the function into customised functions

// const add10 = currySum(10)
// const add30 = add10(30);
// const add50 = add30(50);
// console.log(add50)

//-------------------------------------------------------------------------

// This keyword ---

/**
The JS this keyword refers to the object it belongs to , It makes function reusable by letting you decide the object value. this keyword value is determined entirely by how the function is called.
 */

//There are 4 ways to Invoke a function in JS

//1 - Implicit Binding - states that when function is invoked with implicit bind using a dot notation , the value to the left of the function is the object to which this is refering to 

// const user = {
//     name: "User",
//     userName: function () {
//         console.log(`my name is ${this.name}`)
//     }
// }

// user.userName()

 //2 - Explicit Binding - In explicit bind we use .call to the function to attach the object and the this keyword refers to that object explicitly

const user2 = {
     name:"User2"
}


function sayMyname() {
    console.log(`My name is ${this.name}`)
}

// sayMyname.call(user2)

//3 - New Binding

// function Person(name) {

//     //this={} , so we can add more properties to person object with this.property
//     this.name = name;
// }
// //with the help of new keyword we can create multiple objects of Person with different name , and this is called a constructor, so if we again use the same sayMyname function and attach .call to it , we can make this keyword pass to this reference

// const p1 = new Person('User1');
// const p2 = new Person('User2');

// sayMyname.call(p1)


//4 - Default Binding - if none of the above 3 are satisfied , then JS will automatically assign undefined to the function call

//Example  - we will call the same sayMyname function , because in this scenario , this keyword will check the global scope for the name variable , if we declare name in global window scope then we can call it with it

// globalThis.name = 'New User'
// sayMyname()


//Order of Precedence - Multiple rules can be used in case of this , so its important to know the order of precedence for this keyword

/*
Order is 
New Binding
Explicit Binding
Implicit Binding
Default Binding
*/


//---------------------------------------------------------



//Prototype


//Example

// function Person(fName, lName) {
//     this.fName = fName
//     this.lName = lName
// }

// Person.prototype.fullName = function(){
//     console.log(`Fullname is ::${this.fName} ${this.lName}`)
// }



// 1 - Prototype is use to share methods and properties across instances

//2 - Prototype helps JS to support inheritance


//we will create a subclass which will inherit properties from Person

// function Hero(fName, lName) {
//     //we can use this keyword to extend Person properties to this Hero object
//     Person.call(this, fName, lName)
//     this.isHero = true;
// }


//to inherit getFullName we will use Object.create - what the below does is , when we try to access Batman.fullName , Hero objects checks the prototype and looks for this function , since it cannot find in Hero , because of Object.create we have created a chain so it checks Person prototype as well
// Hero.prototype = Object.create(Person.prototype)
// Hero.prototype.constructor = Hero 

// Hero.prototype.FightCrime = function () {
//     console.log('Fighting crime')
// }

// const Batman = new Hero('Bruce','Wayne')
// Batman.fullName()
// console.log(Batman.FightCrime())
// console.log(Batman)


//---------------------------------------------------------
//We can write the above code with classes as well as they are just a new way of implementing prototype inheritance


// class NewPerson {
//     constructor(fName, lName) {
//         this.fName = fName;
//         this.lName = lName;
//     }

//     fullName() {
//         return `${this.fName} ${this.lName}`
//     }
// }

// to create a new instance

// const newP1 = new NewPerson('Ron',"test")
// console.log(newP1.fullName())

// //Class Inheritance

// class SuperHero extends Person{
//     constructor(fName, lName) {
//         super(fName, lName),
//         this.isHero=true;
//     }
//     fighCrime = function () {
//         console.log('fighting crime')
//     }
// }

// const hero1 = new SuperHero('Clark', "Kent")
// hero1.fullName()
// hero1.fighCrime()

// console.log(newP1)

//----------------------------------------------
//Sample Code

// function newPersonClass(first, last) {
//     this.first = first;
//     this.last = last;
// }

// newPersonClass.prototype.getFullName = function(){
//     return `${this.first} ${this.last}`
// }

// let newPerson1 = new newPersonClass('Test', "user")
// console.log(newPerson1.getFullName())


// //we create a subclass from person class

// function SuperHero(first, last) {
//     Person.call(this, first, last);
//     this.isSuperHero = true;
// }

// // Set up prototype inheritance correctly
// SuperHero.prototype = Object.create(newPersonClass.prototype);
// SuperHero.prototype.constructor = SuperHero;

// SuperHero.prototype.fightCrime = function () {
//     console.log('fight crime')
// }
// let newSuper = new SuperHero('Wonder', "woman")

// SuperHero.prototype.constructor = SuperHero
//In order to inherit function from person class using prototype inheritance we can do

//this way if we call any function which is on person class but not in SuperHero class , we will be able to call it


// console.log(newSuper.getFullName())
// console.log(newSuper.fightCrime())
// console.log(newSuper.isSuperHero)

//---------------------------------------------------

//Class inheritance


// class Person {
//     constructor(first, last) {
//         this.first = first;
//         this.last = last;
//     }

//     getFullName = function () {
//         console.log( this.first +" "+this.last )
//     }
// }

// //Instance of person 
// const p1 = new Person('Test', "User")
// p1.getFullName()

// //subclass

// class SuperHero extends Person{
//     constructor(first, last) {
//         super(first, last);
//         let isHero = true;
//     }

//     fightCrime = function () {
//         console.log('Fight Crimes')
//     }
// }

// //Instance of subclas
// const s1 = new SuperHero('Clask', "Kent")

// s1.getFullName()
// s1.fightCrime()


//-----------------------------------------------------------

//Iterators and Iterables

/**
3 Methos
- for loop
- while loop
- do-while loop
 */

let s1 = "Rohan";

// for (let i = 0; i < s1.length; i++){
//     // console.log(s1[i])
//     // console.log(s1.charAt(i))
//     console.log(s1[i]===s1.charAt(i))
// }

//the same code can be written in iterable manner
// for (let char of s1) {
//     console.log(char)
// }

//same output as above but here we dont have to keep track of string variable

/*Iterable 4 conditions
1- It must implement method at key[Symbol.iterator]
2- That method should not accept any args and should return an object that conforms to iterator protocol
3- Object must have next method and return an object with two props , value and done 
*/


const obj = {
    [Symbol.iterator]: function () {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if (step === 1) {
                    return {value:"hello", done:false}
                } else if (step === 2) {
                    return {value:"world", done:false}
                }
                return{value:undefined, done:true}
            },
        }
        return iterator

    }
}

for (let char of obj) {
    console.log(char)
}

//---------------------------------------------------------------

//GENERATORS - a special functions that simplify the task of writing iterable , by returning an iterable

//Normal Functions do not stop execution midway 
//Generator Functions can stop execution midway due to the yield keyword 

//Sample - we will write the above code as a generator 

function* generatorFunc() {
    yield 'Hello'
    yield 'World';
}

const generatorObj = generatorFunc()
console.log(typeof generatorObj)
for (let word of generatorObj) {
    console.log(word)
}
