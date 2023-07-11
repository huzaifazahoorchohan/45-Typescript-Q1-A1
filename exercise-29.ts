// Exercise No. 29

/* Favorite Fruit: Make a array of your favorite fruits,
and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement, such as You really like bananas! */

let myFruits: string[] = ["Apple", "Mango", "Banana"];

if (myFruits.includes("Apple")) {
    console.log("Wow, you really like Apples");
}

if (myFruits.includes("Mango")) {
    console.log("Wow, you really like Mangoes");
}

if (myFruits.includes("Banana")) {
    console.log("Wow, you really like Bananas");
}

if (myFruits.includes("Cherry")) {
    console.log("Wow, you really like Cherries");
} else {
    console.log("You don't have Cherries");
}


if (myFruits.includes("Pineapple")) {
    console.log("Wow, you really like Pineapples");
} else {
    console.log("You don't have Pineapples");
}

