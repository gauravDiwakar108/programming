// program that uses a for loop to print numbers from 1 to 50, but:

// Use continue to skip multiples of 3.
// Use break to stop the loop when it reaches 40.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) continue;
    else if (i === 40) break;
    console.log(i);
}