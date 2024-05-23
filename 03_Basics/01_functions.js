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

// aage jaake we'll make some projects and unn projects m mostly ek shopping cart hoti h, toh shopping cart mein user keeps on adding stuff toh hume pata nahi hota kitne number of arguments aane wale hai, hume bas sabki price add karni hoti h. it is a situation where we don't know how many arguments will be there.

// so to deal with this situation


function calculateCartPrice(...num1) {  // this is called rest operator, isse hi rest operator bolte hai and isse hi spread operator bhi, sirf usecase pe depend karta h
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000)); // now it'll take every argument, otherwise it was just taking the first one.

// function calculateCartPrice(val1, val2, ...num1) // now it'll take 200 and 400 as val1 & val2 and rest as num1.

const user = {
    username: "mukul",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({               // you can pass explicitly also
    username: "sam",
    price: 499
})

const myNewArray = [200, 400, 100, 600];

function handleArray(getArray) {
    return getArray[1];
}

console.log(handleArray(myNewArray));