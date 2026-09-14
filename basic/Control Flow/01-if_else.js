// program that takes a person's age and uses if and else to determine whether the person is eligible to vote or not eligible to vote.

let prompt = require('prompt-sync')();

let age = Number(prompt("Age : "));

if (age > 0) {
    if (age < 18) {
        console.log("You're not eligible to vote!");
    } else {
        console.log("You can vote");
    }
} else {
    console.log("Age should be greater than 0");
}