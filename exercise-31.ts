// Exercise No. 31

/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

let app_users: string[] = ["huzaifa", "faizy", "admin", "maaz"];

// removing all users
app_users.splice(0, app_users.length);


if (app_users.length > 0) {
    for (const user of app_users) {
        if (user == "admin") {
            console.log("Hello Admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some uses.");
}