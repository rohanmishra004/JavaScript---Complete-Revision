//Throttle and Debounce both help to improve the function of the web app


const init = () => {
    const button = document.querySelector('button')
    button.addEventListener('click',throttle(clicked,2000))
}

const clicked = () => {
    console.log('clicked')
};


document.addEventListener('DOMContentLoaded', init)

//Throttle ignore repeated calls to the function until the interval is reached
const throttle = (fn,delay) => {
    let lastTime = 0;
    console.log('called Throttle');
    let id =0
    return (...args) => {
        const now = new Date().getTime();
        //The time hast expired so we cannot retrigger the function again
        id++;
        if (now - lastTime < delay) {
            return 
        }
        lastTime = now;
        console.log(`Event Id :${id}`)
        fn(...args);

    }
}


//Debounce - useful when we want the function at the end of an event

//Throttle - useful we we want the function to be triggered at certain intervals or intermediate states