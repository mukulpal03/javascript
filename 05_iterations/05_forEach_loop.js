const coding = ["js", "ruby", "java", "python", "c++"]

coding.forEach( (element) => {
    // console.log(element);
})

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe);     // another way, hume sirf reference dena h execute nahi karna h thatswhy we didn't write printMe()

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);      // forEach ke pas item ka bhi access hota h and as well as index and the whole array
});

const myCoding = [{
    langName: "javascript",
    languageFile: "js"
}, {
    langName: "java",
    languageFile: "java"
}, {
    langName: "python",
    languageFile: "py"
}]

myCoding.forEach( (item) => {
    console.log(item.langName);
} )