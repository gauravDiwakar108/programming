// Create a JavaScript program that demonstrates the difference in hoisting between a function declaration and a function expression. Show what happens when each is called before its definition.

declaration();
expression();


function declaration() {
    console.log("declaration");
};


let expression = function () {
    console.log("expression");
}