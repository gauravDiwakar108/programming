import { reverseString } from "./6-reverse-string.js";

const isPalindrome = (text) => {
    let reverseText = reverseString(text);

    if (text === reverseText) {
        return `${text} is Palindrome`;
    } else return `${text} is not a Palindrome`;
};

console.log(isPalindrome("madam"));