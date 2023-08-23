// //Currying

// // Named after Haskell Curry

// //Concept from Lambda Calculus

// //Currying takes a function that receives more than one parameter and breaks it into a series of unary(one parameter) functions

// //A curried funtion takes only one parameter at a time 

// //Example 1


// // const buildBurger = (ingredient1) => {
// //     return (ingredient2) => {
// //         return `${ingredient1},${ingredient2}`
// //     }
// // }

// //Refactored above code
// const buildBurger = (ingredient1)=>(ingredient2)=>(ingredient3)=>`${ingredient1},${ingredient2}, ${ingredient3}`

// const myBurger = buildBurger('Bacon')('lettuce')('buns')
// console.log(myBurger)


// //Example 2

// const mult = (x, y) => { return x * y }

// const multiplyCurry = (x) => (y) => { return x * y }

// console.log(mult(10, 2))
// console.log(multiplyCurry(10)(3))

// //we can also create additional functions from currying

// const newMulti = multiplyCurry(10)
// console.log(newMulti(6))


// //Another example  - in this we can provide an id value and a header value to update the two fields simultaneously 
// const updateEle = id => content => document.querySelector(`#${ id }`).textContent = content

// updateEle('headerId')('New Heading')

// //Another common use of currying is function composition - allows calling small functions in a specific order 

// const addCust = fn => (...args) => {
//     console.log('Serving customer info')
//     return fn(...args)
// }

// const processOrder = fn => (...args) => {
//     console.log(`processing order #${ args[0] }`)
//     return fn(...args)
// }

// let completeOrder = (...args) => {
//     console.log(`Order #${[...args].toString()} completed.`)
// }

// completeOrder = (processOrder(completeOrder));
// console.log(completeOrder)
// completeOrder = addCust(completeOrder)
// completeOrder('1000')


// //without currying

// function addCust(...args) {
//     return function processOrder(...args) {
//         return function completeOrder(...args) {
//             //end
//         }
//     }
// }



// Requires a function with a fixed number of parameters
const curry = (fn) => {
    console.log(fn.length)
    return curried = (...args) => {
        console.log(args.length)
        if (fn.length !== args.length) {
            console.log(curried)
            return curried.bind(null,...args)
            //bind creates a new function
          
        }
        return fn(...args)
    }
}

const total = (x, y) => x + y ;
const curriedTotal = curry(total);
console.log(curriedTotal(10)(30))