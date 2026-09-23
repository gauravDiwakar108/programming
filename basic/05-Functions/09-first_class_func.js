// Create a function greetUser and store it in a variable. Then create another function executeFunction that accepts greetUser as an argument and executes it.

const greetUser = () => {
    return `Hello user`;
}

const executeFunction = (greetFunc) => {
    return greetFunc();
}

let result = executeFunction(greetUser);
console.log(result);