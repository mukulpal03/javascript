const user = {
    userName: "mukul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to website`);  // when we refer to the current context, we use "this" keyword
        console.log(this);  // current context
    }

}

// user.welcomeMessage()

// user.userName = "sam";

// user.welcomeMessage()

console.log(this);  // current context - "empty", because we are in a node environment

// but if u do the above step on the browser, it will print the window object

function one() {
    let userName = "mukul";
    console.log(this);
    // console.log(this.userName);  // output - undefined, coz only works in the context of object
}

// one();

// Arrow functions

const chai = () => {
    let userName = "mukul"
    console.log(this.userName);
}

chai();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

const anotherAddTwo = (num1, num2) => (num1 + num2)  // implicit return

console.log(addTwo(1, 3));

console.log(anotherAddTwo(4, 5));

// returning a object in arrow function

const returnObj = () => ({userName: "mukul"})  // paranthesis is necessary

console.log(returnObj());

