//  Stack ( primitive) , heap (non-primitive)

// in stack you got copy 
// in heap you got reference

// stack
let myYoutubeName = "CodeWiz"
let anothername = myYoutubeName

anothername = " chaiorCode"

console.log(anothername);
console.log(myYoutubeName);

// heap

let userOne = {
    email: "user@google.com",
    upi:"user@upi"
} 
let userTwo = userOne

userTwo.email = " user2@google.com"

console.log(userOne.email);
console.log(userTwo.email);