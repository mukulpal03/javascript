// singleton

const tinderUser = new Object(); 
// const tinderUser = {} // output will be same - empty obj, the only difference is that upper one is singleton and lower one is non singleton

tinderUser.id = "123abc";
tinderUser.name = "mukul";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {            // nested objects
    email: "sum@gmail.com",
    fullName: {
        userFullname: {
            firstName: "mukul",
            lastName: "pal"
        }
    }
}

console.log(regularUser.fullName.userFullname.firstName);

// console.log(regularUser.fullName?.userFullname.firstName); // we added ? after full name which means optional chaining, we use it ki what if fullName doesn't exist

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "a",
    4: "b"
};

// const obj3 = Object.assign({},obj1,obj2);  // merging two objects

const obj3 = {...obj1, ...obj2}  // another method of merging

console.log(obj3);  

const users = [
    {
        id: 1,
        email: "m@gmai.com"
    },
    {
        id: 1,
        email: "m@gmai.com"
    },
    {
        id: 1,
        email: "m@gmai.com"
    },
    {
        id: 1,
        email: "m@gmai.com"
    }
]

users[1].email // accessing arrays of objects

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // it'll take all the keys and store it in an array // important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // stores each key value pair as an array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // when we want to check whether this property exists or not