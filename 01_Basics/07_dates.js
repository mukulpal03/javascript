// Dates

let myDate = new Date();
// console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23,13,3,7,); 
let myCreatedDate = new Date("01-14-2024"); // mm-dd-yy syntax 
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long"
});