// basic demonstration of the difference between var and let scope by declaring variables with the same name in the global scope, inside a function, and inside a block. Print the value accessible at each scope.

var name = "Global Var";
let age = 20;

console.log("Global:");
console.log("name =", name);
console.log("age =", age);

function testScope() {
    var name = "Function Var";
    let age = 25;

    console.log("\nInside Function:");
    console.log("name =", name);
    console.log("age =", age);

    {
        var name = "Block Var";
        let age = 30;

        console.log("\nInside Block:");
        console.log("name =", name);
        console.log("age =", age);
    }

    console.log("\nAfter Block:");
    console.log("name =", name);
    console.log("age =", age);
}

testScope();

console.log("\nGlobal Again:");
console.log("name =", name);
console.log("age =", age);
