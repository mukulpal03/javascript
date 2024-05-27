// for of

// ["", "", ""]

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5] 

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello world";

for(const greet of greetings) {
    // console.log(greet);
}

// Map 

const map = new Map()
map.set('IN', "india")        // key value pair
map.set('USA', "United states of America")
map.set('FR', "France")

console.log(map);

for (const key of map) {
    console.log(key);       // it is printing the array 
}

for (const [key, value] of map) {         // array destructure
    console.log(key, ':- ', value);       
}

// for of loop on object

const myObject = {
    'Game1': "nfs",
    'Game2': "gta5"
}

for (const game of myObject) {
    // console.log(game);          // myObject is not iterable
}

