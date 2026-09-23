// 1. A pure function addTax(price, taxRate) that returns the price after adding tax without modifying any external variable.

const addTax = (price, taxRate) => {
    return price += price * (taxRate / 100)
}

// 2. An impure function addToTotal(amount) that modifies an external total variable.

let total = 0;

const addToTotal = (amount) => {
    return total += amount;
}

let addedTax = addTax(100, 10);
console.log(addedTax);
let addedToTotal = addToTotal(100);
console.log(addedToTotal);
