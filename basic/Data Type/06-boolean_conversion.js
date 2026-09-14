// program that takes an array of different values and separates them into truthy and falsy values using JavaScript's Boolean conversion

let mixedArray = [0, "hello", false, 42, "", null, true, undefined, [], "world"];

let truthyArray = [];
let falsyArray = [];

for (let i = 0; i < mixedArray.length; i++) {
    let item = mixedArray[i];

    if (Boolean(item)) {
        truthyArray.push(item);
    } else {
        falsyArray.push(item);
    }
}

console.log("Truthy values:", truthyArray);
console.log("Falsy values:", falsyArray);