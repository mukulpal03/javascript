// Immediately Invoked Function Expression

(function chai() {  // named iife
    console.log("DB CONNECTED");
})();                                  // semicolon is necessary to end the code, otherwise the other iife won't execute.

// first paranthesis - function definition

// second paranthesis - execution call

// note => global scope ke pollution se problem hoti h kayi baar toh uss global scope ke pollution ko hatane ke liye we use iife.

( (name) => {     // unnamed iife
    console.log(`DB CONNECTEDB 2 ${name}`);
})('mukul');