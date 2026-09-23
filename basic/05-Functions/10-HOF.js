// Create a function calculate that accepts two numbers and a function as arguments. Use the passed function to perform an operation on the two numbers and return the result. Test it with addition and multiplication.

const calculate = (num1, num2, func) => {
    return func(num1, num2);
}

const addition = (num1, num2) => {
    return num1+num2;
}

const multiplication = (num1, num2) => {
    return num1*num2;
}

let result = calculate(10, 10, multiplication);
console.log(result);