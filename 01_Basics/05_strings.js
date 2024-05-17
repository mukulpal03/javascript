const name = "mukul";
const repoCount = 50;

console.log(name + repoCount); // old syntax

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); // modern syntax

const gameName = new String('mukul');

console.log(gameName.length);

console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-3);
console.log(anotherString);

const newString1 = "       mukul       ";
console.log(newString1.trim());

const url = "https://mukul.com/mukul%20pal";
console.log(url.replace('%20','-'));
console.log(url.includes('mukul'));
console.log(url.includes('munna'));