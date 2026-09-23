// Create a function declaration named greetUser that accepts a user's name and returns a greeting message.

const prompt = require("prompt-sync")();

function greetUser(username) {
    return `Hello, ${username.toUpperCase()}`;
}

let name = prompt("Enter name -> ");

let result = greetUser(name);
console.log(result);