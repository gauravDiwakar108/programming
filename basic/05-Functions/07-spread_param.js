// Create a function findLargest that accepts an array of numbers and uses the spread operator to pass its elements to Math.max()

const findLargest = (nums) => {
    return Math.max(...nums);
}

let result = findLargest([1, 2, 3, 4, 5]);
console.log(`largest -> ${result}`);