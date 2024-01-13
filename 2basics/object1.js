//singleton
Object.create

//object literals

const mySym = Symbol("Key1");

const JsUser = {
    name: "Saurabh Mishra",
    age: 22,
    [mySym]: "myKey1",
    location: "Bhopal",
    email: "Saurabh@google.com",
    lastLogindays:["Monday", "Tuesday"]
}
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// JsUser.email ="Mishra@google.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello ${this.name} your age is ${this.age} and you live in ${this.location}. your email is ${this.email} which is last login on ${this.lastLogindays} `)
}
console.log(JsUser.greeting());