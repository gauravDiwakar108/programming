// program that uses a while loop to calculate and print the sum of all numbers from 1 to 100.

let last = 100;
let i = 1;
let sum = 0;
while (i <= last) {
    sum = sum + i;
    i++;
}
console.log(sum);