// program that uses a do...while loop to repeatedly ask the user to enter a number. Stop when the user enters 0, and print the sum of all numbers entered before 0.

const prompt = require("prompt-sync")();

let sum = 0;
let user;
do {
    user = Number(prompt("Enter number -> "));
    sum += user;
} while (user !== 0);

console.log(sum);