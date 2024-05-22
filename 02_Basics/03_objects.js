// singleton - jab constructor se object banate h
// Object.create // creating object using constructor

// object literals - object ko declare karne ka tareeka / and literals se banne wale object singleton nahi bante.

const mySym = Symbol("key1"); // declaration of a symbol

// now how will u use the symbol as a key in the object?

const jsUser = {
    name: "mukul",  // key value pair  // object humesha key ko as a string leta h
    age: 20,
    [mySym]: "key1",  // symbol ko square bracket m hi likhna padta h
    location: "delhi",
    email: "mukul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
};

console.log(jsUser.name); // mostly we use this way only

console.log(jsUser["name"]); // it is considered to be a good way, it is also used for some special cases

console.log(jsUser[mySym]); // another special case

console.log(jsUser);

jsUser.email = "mukul@chatgpt.com"; // updating the value of any key

// Object.freeze(jsUser) // if you want to lock the object, now no changes will be made even if u try to change

jsUser.greeting = function() {
    console.log("Hello Js User");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greetingTwo());