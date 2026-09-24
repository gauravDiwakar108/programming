// Create a function createCounter that contains a private count variable and returns another function. Each time the returned function is called, it should increase count by 1 and return the updated value.

const createCounter = () => {
    let count = 1;

    return () => {
        return count++;
    };
};

let result = createCounter();
console.log(result());
console.log(result());
console.log(result());
console.log(result());