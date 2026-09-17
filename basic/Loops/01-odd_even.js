// program that uses a for loop to print all numbers from 1 to 20. For each number, print whether it is even or odd.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i}->Even`);
    } else {
        console.log(`${i}->Odd`);
    }
}