// Exercise No. 44

/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time. */

let order1: string[] = ["cheese", "tomato", "cucumber"];
let order2: string[] = ["ketchup", "romaine leaves"]
let order3: string[] = ["mayonnaise", "onion", "chilli", "garlic"]

const orderSandwitch = (items: string[]) => {
    console.log("Your sandwich will have with");
    for (let i = 0; i < items.length; i++) {
        console.log(`${i + 1}: ${items[i]}`)
    }
}

orderSandwitch(order1);
orderSandwitch(order2);
orderSandwitch(order3);

