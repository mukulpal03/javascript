const marvelHeros = ["thor","hulk","ironman"]
const dcheros = ["flash","batman","superman"]

// console.log(marvelHeros.push(dcheros)); 

// console.log(marvelHeros);

console.log(marvelHeros.concat(dcheros));

const allNewHeros = [...marvelHeros,...dcheros] // spread method
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usableAnotherArr = anotherArr.flat(Infinity)

console.log(usableAnotherArr);

console.log(Array.isArray("mukul")); // sometimes we get the the data in some other format like string and we want to convert it into an array.
console.log(Array.from("mukul")); // so we use the from method to do so.

console.log(Array.from({name: "mukul"})); // interesting (empty array).

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));