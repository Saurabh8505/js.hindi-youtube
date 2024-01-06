//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myBirthday = new Date(2002, 1 , 2)
// console.log(myBirthday.toLocaleDateString());

// let myTimeStamp = Date.now()
// let myCreatedDate = new Date("01-01-2024")
// console.log(myTimeStamp);
// console.log(myCreatedDate.toLocaleString());
// console.log(Math.floor(((myCreatedDate.getTime() / 1000) / 60) / 60 ));


let newDate = new Date()

newDate.toLocaleString('default', {
    weekday:"long"
})

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

// console.log(`${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`);
