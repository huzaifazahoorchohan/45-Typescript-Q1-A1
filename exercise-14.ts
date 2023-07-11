// Exercise No. 14

/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */

const guestList: string[] = ["Fahad", "Maaz", "Waqar"];

const inviteMsg: string = "you're invited for a delicious dinner at my home on 33th July 2099";

for (const guest of guestList) {
    console.log(`Dear ${guest}, ${inviteMsg}`)
}