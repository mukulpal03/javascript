// For in

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
};

for (const key in myObject) {
    console.log(`${key} stands for ${myObject[key]}`);
}

const programming = ["js", "ruby", "cpp", "java", "python"]

for(const lang in programming) {     // outputs the keys of the array
    console.log(`${lang} :- ${programming[lang]}`);           
}

// for of loop ke andar values aati h

// for in loop ke andar keys aati h

// maps are not iterable