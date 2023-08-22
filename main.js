//JS 

// Decorators function weap a function into another function

//These wrappers 'decorate' the original function with new capabilities




//Ex -1 - Using closures to log how many times a function is called 

let sum = (...args) => {
    return [...args].reduce((acc,num)=>acc+num)
}

const callCounter = (fn) => {
    let count = 0;

    return (...args) => {
        console.log(`Sum has been called ${count += 1 } times`)
        return fn(...args)
    }
}

// sum = callCounter(sum)
// console.log(sum(1,2,4,5))
// console.log(sum(1,2,5))


//Example 2 - Check for valid data and number of params
let rectArea = (length, width) => {
    return length*width
}


const countParams = (fn) => {
    return (...args) => {
        if (args.length !== fn.length) {
            throw new Error('Incorrrct number of params ', fn.name)
        }

        return fn(...args)
    }
}


const reqInteger = (fn) => {
    return (...params) => {
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new Error(`Params for ${fn.name} should be integer`)
            }
        })
        return fn(...params)
    }
}


// rectArea = countParams(rectArea)
// rectArea = reqInteger(rectArea)

// console.log(rectArea(10,"20"))



//Example 3 - Decorating API calls functions 
//Time data requests during developement
let url = "https://jsonplaceholder.typicode.com/todos/42"
let reqData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (err) {
        console.log(err)
    }
}


let dataResonseTime = (fn) => {
    return async (url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data
    }
}


const testFunction = async () => {
    reqData = dataResonseTime(reqData);
    const data = await reqData(url);
    console.log(data)
}

testFunction()