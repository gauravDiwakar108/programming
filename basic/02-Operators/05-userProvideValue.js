// JavaScript program to analyze a user-provided value

let input = prompt("Enter a value:");

// Convert the input to a number
let numberValue = Number(input);

// Determine the type using typeof
console.log("Type using typeof:", typeof input);

// Check whether the value is an Array using instanceof
console.log("Is the value an Array?", input instanceof Array);

// Unary + and -
console.log("Unary +:", +numberValue);
console.log("Unary -:", -numberValue);

// Unary ! to check truthiness
console.log("Unary !:", !input);

// Use ++ and -- to modify a number
let num = numberValue;

console.log("Original number:", num);

num++;
console.log("After ++:", num);

num--;
console.log("After --:", num);

// Ternary operator to check truthy or falsy
let result = input ? "Truthy" : "Falsy";
console.log("The value is:", result);
