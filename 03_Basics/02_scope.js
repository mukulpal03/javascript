let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("inner a: ", a);  // block scope
}

console.log("outer a: ", a);   // global scope
// console.log(b);
console.log(c);   // that's why var should be avoided.

// important note => jab browser m inspect m jaake scope check karte h it is different from the one we use it in here using node.


// nested scoping

function one() {
    const userName = "mukul";
    function two() {
        const website = "youtube";
        console.log(userName);
    }
    // console.log(website);  uska scope two() ke andar hi khatam hogya.

    two();
}

one();

if(true) {
    const userName = "mukul";
    if(userName == "mukul") {
        const website = " youtube";
        console.log(userName + website);
    }
    // console.log(website); // outside scope
}

// console.log(userName);  // outside scope

// ------------------------- Interesting example --------------------------------------
console.log(addone(5));

function addone(num) {
    return num + 1;
}                                    // we can write function call before function definition also.


addTwo(5);                   // but this is not possible, error shows cannot access before initialization.

const addTwo = function(num) {      // function expression
    return num + 2;
}                      

// this is called a concept called hoisting.
