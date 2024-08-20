let myName = "mukul";

console.log(myName);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
};

Object.prototype.mukul = function() {
    console.log("mukul is present in all objects");
}

myHeroes.mukul(); // Object is in the top level hierarchy that's why array inherited this property

// Inheritance

const user = {
    name: "John",
    email: "John@google"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const tASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}

// Teacher.__proto__ = user // old approach

Object.setPrototypeOf(teachingSupport, Teacher); // modern syntax

let anotherUsername = "Hello             "

String.prototype.trueLength = function() {
    console.log(`${this.trim().length}`);
}

anotherUsername.trueLength();  // this is anotherUsername here
myName.trueLength();      // this is myName here
