// default shipping will be 5
// default discount will be 0
// Tax rate as 1.1

// Write a function which returns total
// first you need to count total for items
// after that you need to apply discount if discount has been provided
// after that you need to add taxes to your total i.e total = total * 1.1
// and then add shipping i.e total = total + shipping

const totalAmount = ({ discount = 0, tax, shipping = 0 } = {}) => {
    let total = 0;
    items.forEach((item) => {
        total += item.price * item.quantity;
    });
    total = (total*tax);

    if(discount > 0) 
        total = total - total*discount;
    else
        console.log("No Discount");
    
    if(shipping > 0)
        total = total + shipping;
    else
        console.log("No Shipping Charges");
    return total;
}

// Creating an addition Object
let addition = {
    // discount: 0.5,
    tax: 1.1,
    // shipping: 5
}

// Initializing an array of objects
var items = [
    {price: 10, quantity: 1},
    {price: 20, quantity: 2},
    {price: 30, quantity: 3},
    {price: 10, quantity: 2}
]

//To check if an array is empty 
function arrayIsEmpty(array){
    //If it's not an array, return FALSE.
    if(!Array.isArray(array)) return false;

    //If it is an array, check its length property
    //Return TRUE if the array is empty
    if(array.length == 0) return true;
    
    //Otherwise, return FALSE.
    return false;
}

if(arrayIsEmpty(items))
    console.log("No items");
else
    console.log("Total Cost",totalAmount(addition));


