// Create a function divideNumbers that accepts two numbers and uses early return to handle division by zero. If the divisor is 0, return "Cannot divide by zero"; otherwise, return the division result.

const divideNumbers = (num1, num2) => {
    if (num2===0) return `Cannot divide by zero`
    else return num1/num2;
}