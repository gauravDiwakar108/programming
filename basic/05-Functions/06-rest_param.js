// Create a function sumNumbers that accepts any number of numeric arguments using a rest parameter and returns their total sum.

const sumNumbers = (...values) => {
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}

let result = sumNumbers(1, 2, 3, 4, 5);
console.log(result);