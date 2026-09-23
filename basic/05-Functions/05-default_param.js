// Create a function greetUser that accepts a name parameter with a default value of "Guest".

const greetUser = (username = "Guest") => {
    return `Hello, ${username}`;
}

let result = greetUser();
console.log(result);