// Lexical Scope Defines how variable names are resolved in nested function , ex: a child function inside a parent function would have access to parent function variables along with global variables


//a closure is a function having access to the parent scope even after the parent function is closed

//global scope - 

let x = 1;

const parent = () => {
    //local scope
    let myVal = 2;

    //child function

    const child = () => {
        console.log(x,myVal+1)
    }
    //in order to ensure that child function forms closure with parent and global , instead of calling we are only returning a reference of the function
    return child
}   

//if we try to access my myVal from outside the function we will get reference error
// child()

const res = parent();

console.log(res)

//Although the parent function is closed the child function still has reference to the lexical scope of the parent
res();

