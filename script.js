//CLASSES - blueprint for object


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
const user1 = new User('Rohan', 27)
const user2 = new User('Ren', 28)


//This creates a copy of the object
const user3 = { ...user1 }

//This ensure that both the objects point to the same location in memory
const user4 = user1

user1.name = 'Alex'
console.log(user3.name)

console.log(`${ user1.name }:::${ user1.age }:::${ user1.email }`);

console.log(user1.login().logout())
console.log(user2)