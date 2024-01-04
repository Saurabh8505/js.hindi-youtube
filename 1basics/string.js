const name = "Saurabh"
const surName = "Mishra"
let age = 21

console.log(`My Fisrt name is ${name} and my Surname is ${surName}. My age is ${age} `)

const gameName = new String(`${name} ${surName} ${age}` )
const newString = gameName.substring(0, 4)
console.log(newString)

const anothernewString = gameName.slice(2, 7)
console.log(anothernewString)

const spaces = "    Saaurabh.    "
console.log(spaces.trim())

const url = "https://google.com/saurabh%20drip"
console.log(url.replace('%20', '-'))
console.log(url.includes('@20'))

console.log(gameName.split(' '));

// console.log(gameName[2])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.endsWith())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(`u`))








