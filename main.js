//IIFE - Imediately Invoked function Expression

// const counter = (() => {
//     let count = 0;
//     console.log(`Initial Value :${ count }`)
//     return () => { count += 1; console.log(count) }
// })();


// counter()
// counter()




const credit = ((num) => {
    let credit = num;
    console.log(`Initial Credit::${ credit }`)
    return (() => {
        credit -= 1;
        if (credit != 0) {
            console.log(`Playing game::${ credit }`);
        }
        if (credit === 0) {
            console.log(`Add more credit to play`)
        }
    })
})(3)

credit()
credit()
credit()







