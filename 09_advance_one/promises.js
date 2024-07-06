// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network call
    setTimeout(function () {
        console.log("Async task is completed");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({userName: "mukul", email: "mukul@com"}) // resolve ke parameters m data bhi pass kar sakte hai
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if(!error) {
            resolve({userName: "mukul", password: "abc"})
        } else {
            reject("ERROR: something went wrong")
        }
    }, 1000)
})

promiseFour
.then(function (user) {
    console.log(user);
    return user.userName
})
.then(function (userName) {
    console.log(userName);
})
.catch(function (error) {
    console.log(error);
})
.finally(function () {
    console.log("Promise is either resolved or rejected");
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if(!error) {
            resolve({userName: "javascript", password: "abc"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

// another approach of handling promises

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()  // the only problem is async await cannot handle errors. so for that we must use try catch block

// activity - json response

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// getAllUsers()

// with then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})