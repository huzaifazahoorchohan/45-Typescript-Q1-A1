// Exercise No. 16

/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger
dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.

• Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list. */

const myGuests: string[] = ["Fahad", "Maaz", "Waqar"];

for (const g of myGuests) {
    console.log(`Hey ${g}, I'm thrilled to inform you that I found a bigger dinner table.`);
}

myGuests.unshift("Khalil");
myGuests.splice(2, 0, "Arsalan");
myGuests.push("Ali");

for (const g of myGuests) {
    console.log(`Hey ${g}, You are invited to my dinner party.`);
}