// Exercise No. 24

/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

let examResults: string = "Pass";

console.log(`Exam result is Pass? I predict its ${examResults == "Pass" ? true : false}`);
console.log(`Exam result is Pass? I predict its ${examResults != "Fail" ? true : false}`);

let myName: string = "Huzaifa Zahoor";

console.log(`My Name is == "huzaifa zahoor"? I predict its ${myName != "Huzaifa Zahoor".toLowerCase() ? true : false}`);
console.log(`My Name is == "huzaifa zahoor"? I predict its ${myName.toLowerCase() == myName ? true : false}`);

let marks: number = 50;

console.log(marks == 50 ? true : false);
console.log(marks != 50 ? true : false);

console.log(marks > 40 ? true : false);
console.log(marks > 60 ? true : false);

console.log(marks < 60 ? true : false);
console.log(marks < 30 ? true : false);

console.log(marks >= 50 ? true : false);
console.log(marks >= 60 ? true : false);

console.log(marks <= 50 ? true : false);
console.log(marks <= 40 ? true : false);

console.log(marks > 40 && examResults == "Pass" ? true : false);
console.log(marks < 40 && examResults == "Pass" ? true : false);

console.log(marks < 40 || examResults == "Pass" ? true : false);
console.log(marks > 60 || examResults == "Pass" ? true : false);

let arr1: string[] = ["Mango", "Apple", "Banana", "Cherry"];

console.log(arr1.includes("Apple") ? true : false);
console.log(arr1.includes("Pineapple") ? true : false);