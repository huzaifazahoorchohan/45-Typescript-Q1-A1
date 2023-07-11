// Exercise No. 45

/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */

const storeCar = (manufacturer: string, model: string, arbitrary?: {}) => {
    let carObj = {
        manufacturer,
        model,
        arbitrary,
    }
    return carObj;
}

let car1 = storeCar("Honda", "2023", { "Color": " Black", "Type": "Automatic" });
let car2 = storeCar("Toyota", "1999", { "Color": " White", "Type": "Manual" });

console.log(car1);
console.log(car2);