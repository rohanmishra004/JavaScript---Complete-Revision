//Foundations for Pure Function


//JS data types

/**
 * Primitive Data Type
 * 1 - undefined
 * 2 - Boolean
 * 3 - Number
 * 4 - String
 * 5 - BigInt
 * 6 - Symbol
 */

/**
 * Structural Data Types 
 * 1 - Object : (new) Object , Array , Map , Set , WeakMap , Date
 * 2 - Functions
 */


//Passing by value vs Passing by reference



//Primitive - pass by value

let x = 2;
let y = x; //this will pass value of 2 to y
y += 1
console.log(y, x)


//Non Primitive or Structural Data types - pass by reference


//Array actually uses a pointer in memory to locate the values , therefore when we set xArray === yArray we are making a refrence to the values
let xArray = [1, 2, 3]
let yArray = xArray
yArray.push(4) //both xArray and yArray are getting updated
// yArray = yArray.map(item => item*2)
console.log(yArray)
console.log(xArray)


/**Primitive Data types pass values , Structural DataTypes pass by reference
 */


//Mutable and Immutable

//primitives are immutable

let myName = 'user';
myName[0] = 'Y'

//Reassignment is not as same as mutable as we are changing its pointer in memory

myName = "ren"

//Structural contains mutable Data
yArray[0] = 5  //this also updates the xReference
console.log(yArray)
console.log(xArray)


/**Pure Functions require you to avoid mutating data */


//Impure Functions mutate data
const addToScore = (array, score) => {
    array.push(score);
    return array
}
const scoreArray = [10,12.13]
console.log(addToScore(scoreArray, 5))

//This mutates the original Score Array and its considered to be a side-effect.

//Also const doesnt make the array immutable, we cannot reassign but we can change the elements in the array
console.log(addToScore(scoreArray, 6))




//---------------------------------------------------------


//Shallow Copy vs Deep Copy


//Shallow Copy - we can use spread operator to create a shallow copy

//Example 1

const zArray = [...yArray] //making a shallow copy 
console.log(zArray === yArray);
console.log(xArray === yArray)
zArray.push(10)

//We can also use Object.assign to assign the values for shallow copy 

const tArray = Object.assign([], yArray)
console.log(tArray === yArray)  //false

//When it comes to object.freeze

const userData = {
    "first": 1,
    "second": 2,
    "third": {
        "a":2,"b":4
    }
}

Object.freeze(userData);
console.log(userData)

userData.third.a = 7
console.log(userData)
//This will still mutate it as its a shallow freeze


//Deep Copy is needed to avoid these mutations


//Several Libraries like lodash, Ramda and others have this feature built in

//One line Vanilla JS solution but it does not work with Date, functions , maps Sets and other complex data types

const newScore = JSON.parse(JSON.stringify(userData))

console.log(newScore === userData)  //false


const deepClone = (obj) => {
    if (typeof obj != 'object' || obj === null) return obj;
     
    //create an array or object to hold the values
    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];

        //recursive call for nested objects
        newObj[key] = deepClone(value)
    }

    return newObj
}

// const newData = deepClone(userData)
// console.log(newData === userData)
// console.log(userData)
// newData.forth = 45
// console.log(newData)



//Pure Function that does not cause mutation


const pureAddToScore = (array, score, cloneFunction) => {
    const newArray = cloneFunction(array);
    newArray.push(score);
    return newArray
}

const ScoreVal = [1, 4, 5, 7, 1]
const newScoreVal = pureAddToScore(ScoreVal, 43, deepClone)
console.log(newScoreVal)
console.log(ScoreVal)
console.log(ScoreVal === newScoreVal)