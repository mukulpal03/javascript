const myNums = [1, 2, 3] 

const myTotal = myNums.reduce( (acc, curval) => {     // accumulator and current value
    console.log(`acc: ${acc} and current value: ${curval}`);
    return acc + curval;
}, 0)      // initial value of the accumulator

console.log(myTotal);

const shoppingCart = [{
    itemName: "Js course",
    price: 2999
}, {
    itemName: "python course",
    price: 999
}, {
    itemName: "app dev",
    price: 12999
}, {
    itemName: "dsa course",
    price: 3999
}]

// add all the prices in the shopping cart

const finalPrice = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(finalPrice);