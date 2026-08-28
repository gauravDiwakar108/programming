const checkNumber = (number) => {
    if (number>0) return `${number} is positive`;
    else if (number<0) return `${number} is negative`;
    else return `${number} is Zero`;
}

console.log(checkNumber(0));
console.log(checkNumber(1));
console.log(checkNumber(-1));