// Primitive

// 7 : string , Number , boolean , null , undefined , symbol , BigInt

const score = 100 // number 

const isLoggedIn = true // bool

const tempOutside = null // null

let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 343624563465767857896708908n
console.log(typeof bigNumber);

// Reference (Non primitive)

// Arrays , objects , Functions

const heroes = ["ironman" , "thor" , "hulk"] // array

let myObj = {  // object
    name: "mukul",  
    age: 20
}

const myFunction = function() {    // function
    console.log("hello world");
}

// console.log(typeof myFunction); 


// *************************************************************

// Memory - Stack => primitive m use hoti hai , Heap => non primitive m use hoti hai