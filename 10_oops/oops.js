// onject literal

const users = {
    userName: "mukul",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function () {
        console.log(this);   // current context
    }
}

console.log(users.getUserDetails());
// console.log(this);  // window object


// Constructor function - new keyword => gives a new instance or context

function user(userName, loginCount, isLoggedIn) {
    this.userName = userName  // left one is variable and right one is parameter, to remove the confusion when the parameter and vairable have the same name, we use the this keyword.
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;  // and return this by default hota hi hai agar na bhi likhe toh
}

// const userOne = user("mukul", 5, true)
// const userTwo = user("john", 6, false)
// console.log(userOne);         // we printed userOne but still userTwo overwrites the value

// That's why we use the new keyword, bcoz har baar it gives a new instance

const userOne = new user("mukul", 5, true)
const userTwo = new user("john", 6, false)
console.log(userOne);         

// jab new keyword use karte hai, sabse pehle ek empty object create hota h jisko instance bolte hai

