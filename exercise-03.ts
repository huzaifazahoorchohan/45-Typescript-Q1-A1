// Exercise No. 3

/* Name Cases: Store a person’s name in a variable, and then print that person’s name
in lowercase, uppercase, and titlecase. */


let person: string = "huzaifa zahoor";

function titleCase(str: string) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

console.log("Hello ", person.toUpperCase());
console.log("Hello ", person.toLowerCase());
console.log("Hello ", titleCase(person));