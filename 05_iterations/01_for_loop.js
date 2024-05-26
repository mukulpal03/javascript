// for loop

for(let i=1;i<=10;i++) {
    if(i == 5) {
        // console.log("5 is best number");
    }
    // console.log(i);
}

// console.log(i); // error

// nested loops

for(let i=0; i<3; i++) {
    // console.log(`outer loop ${i}`);
    for(let j=0; j<3; j++) {
        // console.log(`inner loop ${j}`);
    }
}

// looping through an array

let myArr = ["flash","batman","superman"];

for(let i=0; i<myArr.length; i++) {
    console.log(myArr[i]);
}

// break keyword

for(let i=1; i<=20; i++) {
    if(i == 5) {
        // console.log(i);
        break;
    }
    // console.log(i);
}

// continue keyword

for(let i=1; i<=20; i++) {
    if(i == 5) {
        continue;     // skip the iteration
    }
    console.log(i);
}

