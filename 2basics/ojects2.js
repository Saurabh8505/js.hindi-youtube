//singleton

const tinderUser = new Object()

tinderUser.id = "123abs"
tinderUser.name = "Saurabh Mishra"
tinderUser.age = 24
tinderUser.status = "Single"

// console.log(tinderUser);

const regularUser = {
    email: "saurabh@google.com",
    fullName: {
        firstName: "Saurabh",
        lastName: "MIshra"
    },
    College: {
        mainGroup: "Oriental Group",
        CollageName:{
            Collage1: "Oriental Institute of Technology",
            Collage2: "Oriental Collage of Technology" 
        }
    } ,
    age: 22
}
// console.log(regularUser.College);
const obj1 = {
    name1:"Saurabh Mishra",
    Collage1: "OCT"
}
const obj2={
    name2:"Naruto Uzumaki",
    Collage2:"OIST"
}
const newObj = [...obj1,...obj2]
console.log(newObj);