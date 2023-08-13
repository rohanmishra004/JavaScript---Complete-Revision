// let user1Name = 'Rohan';
// let user1Email = 'rm@gmail.com';


// let user2Name = 'Ren';
// let user2Email = 'rem@gmail.com';


// function login(email) {
//     console.log(`${email} has logged in`)
// }

// login(user1Email)
// login(user2Email)


//The above code is called spaghetti code , so in order to store information in  a more streamlined manner , we can use objects to store data

//USING OBJECT LITERALS
let user1Details = {
    name: "rohan",

    //we are using getter method to update the property of the email dynamically when we update the name
    get email() {
        return `${ this.name}@gmail.com`
    },
    login: function () {
        //'this' - keyword here makes a reference to the object , but if its declared outside the object then it would refer to the window object
        console.log(`${this.email} logged in`)
    }
}
user1Details.login()

user1Details['name']='user1'
console.log(user1Details)
user1Details.age = 27


console.log(user1Details)

user1Details.login()

let user2Details = {
    name: "renm",
    email:"rem@gmail.com"
}