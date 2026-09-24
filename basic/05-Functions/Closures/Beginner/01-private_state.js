// Create a function createBankAccount(initialBalance) that returns an object with two methods:

// deposit(amount) → adds money to the balance.
// getBalance() → returns the current balance.

// The balance variable must remain private and should only be accessible through the returned methods.

const createBankAccount = (initialBalance) => {
    let balance = initialBalance;
    return {
        deposit(amount) {
            balance = balance + amount;
            return balance;
        },
        getBalance() {
            return balance;
        }
    }
};

let myBank = createBankAccount(100);

console.log(myBank.deposit(100));
console.log(myBank.getBalance());