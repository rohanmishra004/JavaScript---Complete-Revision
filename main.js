// //Official Def of Recursion
// // In CS recursion is the method to solve a problem by solving smaller instances of the same problem



// //Any interator function can be written as Recursive 

// const counter=(num)=>{
//     while (num > 0){
//         console.log(num);
//         num-=1
//     }
// }

// // counter(10)

// //Recursive functions have 2 calls - 
// // 1 - Recursive call to the function 
// // 2 - at least one conditon to exit

// const recurCounter = (num) => {

//     //exit condition
//     if (num < 0) {
//         return
//     }
//     console.log(num);
//     num -= 1
//     //recursive call
//     recurCounter(num)
// }

// // recurCounter(11)

// // --------------------------------------------------------


// //Standard example of recursion sample codes


// //Without recursion fibonacci

// const withoutRecurFibo = (num, array=[0,1]) => {
//     while (num > 2){
//         const [nextToLast, Last] = array.slice(-2);
//         array.push(nextToLast+ Last);
//         num-=1
//     }

//     return array
//     // return array[num]
// }

// // console.log(withoutRecurFibo(12))

// //Fibo with Recur

// const withRecurFibo = (num, array=[0,1]) => {
//     if (num <= 2) return array;
//     const [nextToLast, Last] = array.slice(-2);
//     console.log([...array])
//     console.log(nextToLast,Last)
//     return withRecurFibo(num-1, [...array, nextToLast+Last])
// }

// // console.log(withRecurFibo(12))


// //Return the nth position of the fibonacci sequence

// // Without recur

// const withoutRecur = (pos) => {
//     if (pos <= 1) return pos;
//     const seq = [0, 1]
//     for (let i = 2; i <= pos; i++){
//         const [nextToLast, last] = seq.slice(-2);
//         seq.push(nextToLast + last);
//     }

//     return seq[pos];
// }

// // console.log(withoutRecur(6))


// //With Recursion

// // const withRecur = (pos) => {
// //     if (pos <= 1) return pos;
// //     //Test code
// //     console.log(withRecur(pos-1))
// //     console.log(withRecur(pos-2))
// //     return withRecur(pos-1)+withRecur(pos-2)
// // }

// const withRecur = pos => pos<2?pos:withRecur(pos-1)+withRecur(pos-2)


// console.log(withRecur(7))




const artistsList = {
    jazz: ["miles ", "John"],
    rock: {
        classics: ["Bob Seager", 'The Eagles'],
        alt: {
            classic:["Pearl", "The Kiler"]
        }
    },
    unclassified: {
        new:["Caamp","Niel Young"]
    }
}

const getArtistsName = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist=> {
                arr.push(artist)
            })
        }
        getArtistsName(dataObj[key],arr)
    })
    return arr
}

console.log(getArtistsName(artistsList))
