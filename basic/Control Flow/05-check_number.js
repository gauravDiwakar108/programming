// create a function to check if it is a number

const checkNumber = (number) => {
    if (typeof number !== "number") return "Invalid";
    else if (number > 0 && number % 2 === 0) return "Positive Even";
    else if (number > 0 && number % 2 !== 0) return "Positive Odd";
    else if (number < 0 && number % 2 === 0) return "Negative Even";
    else if (number < 0 && number % 2 !== 0) return "Negative Odd";
    else return "Zero";
}