//difference between primitive and reference types by copying a primitive value and an object into separate variables

let number1 = 10;
let number2 = number1;

number2 = 20;

console.log("Primitive values:");
console.log("Original:", number1);
console.log("Copy:", number2);


// Reference type
let person1 = {
    name: "Rahul",
    age: 20
};

let person2 = person1;

person2.age = 25;

console.log("\nReference values:");
console.log("Original:", person1);
console.log("Copy:", person2);
