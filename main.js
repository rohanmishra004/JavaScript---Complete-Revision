//Debouncing - Debounce prevents functions from being called too soon 

const initApp = () => {
    const button = document.querySelector('button');
    button.addEventListener('click',debounce(clicklog, 2000));
}


const clicklog = () => console.log('clicked');

//This ensures that once HTML document has finished loading then the init function is triggered

document.addEventListener('DOMContentLoaded', initApp)


//we will create a debounce function to prevent the button clicked to be triggered quickly in succession

const debounce = (fn, delay) => {
    let id;
    console.log(`id at immediate load::${ id }`)
    return (...args) => {
        console.log(`Previous Id::${ id }`)
        if (id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}