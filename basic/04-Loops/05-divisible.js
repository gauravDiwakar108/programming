// program that uses a loop to find the first number between 1 and 100 that is divisible by both 7 and 9.

// Use break to stop the loop immediately after finding the number.

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && i % 9 === 0) {
        console.log(i);
        break;
    }
}