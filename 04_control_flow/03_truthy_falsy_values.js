const userEmail = "m@mukul.ai";  

const anotherUser = "";

if(userEmail) {                       // truthy value
    console.log("got user email");
} else {
    console.log("don't have user email");
}

if(anotherUser) {                       // falsy value
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// falsy values => false, 0, -0, BigInt(0n), "", null, undefined, NaN 

// except these all are truthy values

// example => "0", 'false', " ", [], {}, function() {}

let myArr = [] 

if(myArr.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
} 

// Nullish coalescing operator (??): for null & undefined

let val1;

val1 = 5 ?? 10

val1 = null ?? 10   // it will check the safety

val1 = undefined ?? 15

val1 = null ?? undefined

val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary Operator 

// (condition) ? true : false

let num = 5;

(num % 2 == 0) ? console.log("even") : console.log("odd");