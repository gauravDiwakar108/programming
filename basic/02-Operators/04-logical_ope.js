// JavaScript program using logical operators

let age = Number(prompt("Enter your age:"));
let hasPermission = prompt("Do you have permission? (yes/no)") === "yes";
let isHealthy = prompt("Are you healthy enough for the activity? (yes/no)") === "yes";

// Logical conditions
let condition1 = age >= 18 && hasPermission;
let condition2 = age >= 18 || hasPermission;
let condition3 = !isHealthy;

// Print results
console.log("Condition 1 (Age >= 18 AND has permission):", condition1);
console.log("Condition 2 (Age >= 18 OR has permission):", condition2);
console.log("Condition 3 (NOT healthy):", condition3);

// Final eligibility
let eligible = age >= 18 && hasPermission && isHealthy;

console.log("Eligible for the activity:", eligible);

if (eligible) {
    console.log("The person is eligible to participate.");
} else {
    console.log("The person is not eligible to participate.");
}
