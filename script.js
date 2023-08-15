//CLASSES - blueprint for object

//Class Inheritance - taking properties from base class to extract the functionality



class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get email() {
        return `${this.name}@gmail.com`
    }
    login() {
        console.log(`${ this.email } has logged in`)
        return this;
    }
    logout() {
        console.log(`${ this.email } has logged out`)
        return this;
    }

}

class developer extends User{
    get language() {
        return this
    }
}


//extending base class
class Admin extends User {
    deleteUser(user) {

        //filter creates a new array so it has to be assigned to a variable 
        users = users.filter(u => {
            return u.email != user.email;
        })
    }

    //adding users
    addUser(name, age) {
        const user4 = new User(name, age);
        users.push(user4)
    }
}

const user1 = new User('Rohan', 27)
const user2 = new User('Ren', 28)
const user3 = { ...user1 };


let users = [user1,user2, user3]
const admin1 = new Admin("Steve", 35);

admin1.addUser("New Employee", 45)
console.log(users)
admin1.deleteUser(user1)

console.log(users)
// //This creates a copy of the object
// const user3 = { ...user1 }

// //This ensure that both the objects point to the same location in memory
// const user4 = user1

// user1.name = 'Alex'
// console.log(user3.name)

// console.log(`${ user1.name }:::${ user1.age }:::${ user1.email }`);

// console.log(user1.login().logout())
// console.log(user2)


