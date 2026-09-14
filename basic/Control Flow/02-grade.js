// program that takes a student's marks and uses if, else if, and else to assign a grade

let prompt = require('prompt-sync')();

let marks = Number(prompt("Enter marks : "));

if (marks >= 0 && marks <= 100) {
    if (marks <= 100 && marks >= 90) {
        console.log("Grade : A");
    }
    else if (marks < 90 && marks >= 80) {
        console.log("Grade : B");
    }
    else if (marks < 80 && marks >= 70) {
        console.log("Grade : C");
    }
    else if (marks < 70 && marks >= 60) {
        console.log("Grade : D");
    }
    else {
        console.log("Grade : F");
    }
} else {
    console.log("Invalid marks");
}