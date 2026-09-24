// Create a createShoppingCart() function that keeps the cart items private.

// It should return an object with:

// addItem(item) → adds an item to the cart.
// removeItem(item) → removes the first matching item.
// getItems() → returns all current items.

// The items array must not be directly accessible from outside the function.

const createShoppingCart = () => {
    let cartItem = [];

    return {
        addItem(item) {
            cartItem.push(item);
        },
        removeItem(item) {
            cartItem.splice(cartItem.findIndex(e => e === item), 1);
        },
        getItems() {
            return cartItem;
        }
    }
};

let myCart = createShoppingCart();
myCart.addItem('banana');
myCart.addItem('orange');
myCart.addItem('milk');
console.log(myCart.getItems());
myCart.removeItem('milk');
console.log(myCart.getItems());