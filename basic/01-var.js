// basic demonstration of the difference between var and let scope by declaring variables with the same name in the global scope, inside a function, and inside a block. Print the value accessible at each scope.

var x = 10;

function test() {
    console.log(x);

    var x = 20;

    if (true) {
        let x = 30;
        console.log(x);
    }

    console.log(x);
}

test();
console.log(x);