const score = 400; 
// console.log(score);

const balance = new Number(100); // another way of defining a number.
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const dec = 79.534;
// console.log(dec.toFixed());

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // en-in represents the indian standard , by default it shows US standard.


// +++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4));

console.log(Math.round(4.5));
console.log(Math.ceil(5.2));  // ceiling round off value
console.log(Math.floor(7.9)); // floor round off value 

console.log(Math.random()); // gives random value ranges between 0-1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number generator