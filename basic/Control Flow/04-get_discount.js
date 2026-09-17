// function getDiscount(price, isMember) that uses early return to handle invalid prices and non-members before calculating the final discount.

const getDiscount = (price, isMember) => {
    let discountPrice = price * 0.20;
    let finalPrice;
    if (price <= 0) return "Invalid price";
    else {
        if (isMember === false) return "No Discount";
        else {
            finalPrice = price - discountPrice;
            return finalPrice;
        }
    }
}