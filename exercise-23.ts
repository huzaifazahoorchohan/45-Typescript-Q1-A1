// Exercise No. 23

/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test
and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let car: string = "Honda";
console.log(`Is car == "Honda"? I predict ${car == "Honda" ? true : false}`);

let bike: string = "United";
console.log(`Is bike == "United"? I predict ${bike == "United" ? true : false}`);

let carPrice: number = 1000;
console.log(`Is car price == 1000? I predict ${carPrice == 1000 ? true : false}`);

let bikeColor: string = "Black";
console.log(`Is bike color is == "Black"? I predict ${bikeColor == "Black" ? true : false}`);

let carHasInsurance: boolean = true;
console.log(`Is car has insurance? I predict ${carHasInsurance == true ? true : false}`);

let houseSold: boolean = false;
console.log(`House sold == "True"? I predict ${houseSold ? true : false}`);

let carCC: string = "800CC";
console.log(`Is car CC == "1600"? I predict ${carCC == "1600CC" ? true : false}`);

let carHasTracker: boolean = false;
console.log(`Is car has tracker == "true"? I predict ${carHasTracker ? true : false}`);

let carCondition: string = "Good";
console.log(`Is car condition == "Bad"? I predict ${carCondition == "Bad" ? true : false}`);

let carSeats: number = 4;
console.log(`Is car seats == 6? I predict ${carSeats == 6 ? true : false}`);