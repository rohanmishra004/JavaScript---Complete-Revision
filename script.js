//Using prototypes

function User(email, name, login) {
    this.email = email;
    this.name = name;
    this.online = false;
}

//protoype functions can be attached to classes only and not their instances , instances can call prototype method with 
User.prototype.login=function(){
    this.online = true;
    console.log(`${this.name} has logged in`)
}

User.prototype.logout=function(){
    this.online = false;
    console.log(`${this.name} has logged `)
}


//Prototype Inheritance
function Admin(...args) {
    // console.log(args)

    //we are extending user class and usign this method to apply the functionality of user class to admin class
    User.apply(this, args)
    this.role= 'super user'

    this.deleteUser= function(user){
        users = users.filter((u) => {
            return u.email!= user.email
        })
    }
}


let user1 = new User('user1@gmail.com', "user One", false)
let user2 = new User('user2@gmail.com', "user Two", false)
let admin = new Admin("admin@gmail.com", "New admin", false)
let users = [user1,user2, admin]
console.log(admin)
user1.login()
user1.logout()
console.log(users)
admin.deleteUser(user1)
console.log(users)

