// Create a JavaScript program that takes two values and demonstrates the difference between **`=`, `==`, and `===`**, including examples where `==` and `===` produce different results.

// Take two values
let value1 = prompt("Enter the first value:");
let value2 = prompt("Enter the second value:");

// = is assignment
let assignedValue = value1;
console.log("Using = :", assignedValue);

// == checks value only (allows type conversion)
console.log("Using == :", value1 == value2);

// === checks both value and data type
console.log("Using === :", value1 === value2);

// Example where == and === are different
let num = 10;
let str = "10";

console.log("\nExample: 10 and \"10\"");
console.log("10 == \"10\" :", num == str);     // true
console.log("10 === \"10\" :", num === str);   // false
