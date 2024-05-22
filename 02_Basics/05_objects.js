// de-structuring 

const course = {
    courseName: "js",
    price: 999,
    courseTeacher: "hitesh"
};

// console.log(course.courseTeacher); // suppose you have to use it again n again so this syntax will be pretty hectic

const {courseTeacher: instructor} = course // so we use this syntax // we can provide the key diff name also or could've just written the key name only.

console.log(instructor);

// whenever you see a {} syntax, it means destructuring

