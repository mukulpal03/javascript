function sayMyName() {
    console.log("M");
    console.log("u");
    console.log("k");
    console.log("u");
    console.log("l");
}

sayMyName();  // sayMyName => reference , sayMyName() => execution

// function addTwoNum(num1, num2) {   // jab function definition m kuch input dete h then they are called parameters.
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2) {
    let result = num1 + num2;
    return result;
    console.log("mukul");  // this line will never execute becoz return ke baad function doesn't work.
}

const result = addTwoNum(2, 3);    // and if we pass something in function call, they are called arguments.

console.log("Result: ", result);   // the value of result showed undefined. why? because we did console log first because of which function was not returning anything. 

function loginUserMessage(username = "sam") {  // "sam" => we gave a default value, if someone didn't pass any argument, a default value will be executed. 
    return `${username} just logged in`
}

console.log(loginUserMessage("mukul"));

// console.log(loginUserMessage());  // what if you don't pass any value, it will return undefined.