// arrays

// const myArray = [0,1,2,3,4,5,6,7,8,9]
// const myAlfa = ["a","b,","c"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArray[0]);

// Methods

// myArr2.push(5)
// myArr2.push(6)

// myArr2.pop(0)

// myArr2.unshift(9)
// myArr2.shift()

// const newArr2 = myArr2.join() //convert it into string

// console.log(myArr2);
// console.log(newArr2);

// Slice, Splice

// console.log("a",myArr2);

const myN1 = myArr2.slice(1,3);
console.log("b",myArr2);
console.log(myN1);

const myN2 = myArr2.splice(1,3); //splice take out the splice element from orignal element whereas slice dont do anything to orignal array
console.log("b",myArr2);
console.log(myN2);