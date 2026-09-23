// Create an arrow function named isEven that accepts a number and returns true if the number is even and false if it is odd.

const isEven = (number) => {
    if (number > 0) {
        if (number % 2 === 0) return true;
        else return false;
    } else return false;
}

let result = isEven(2);
console.log(result);