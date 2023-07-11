// Exercise No. 27

/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */


// 1st version

let newAlienColor: string = "green";

if (newAlienColor == "green") {
    console.log("Player eanred 5 points");
} else if (newAlienColor == "yellow") {
    console.log("Player eanred 10 points");
} else if (newAlienColor == "red") {
    console.log("Player eanred 15 points");
}

// 2nd version

newAlienColor = "yellow";

if (newAlienColor == "green") {
    console.log("Player eanred 5 points");
} else if (newAlienColor == "yellow") {
    console.log("Player eanred 10 points");
} else if (newAlienColor == "red") {
    console.log("Player eanred 15 points");
}

// 3rd version

newAlienColor = "red";

if (newAlienColor == "green") {
    console.log("Player eanred 5 points");
} else if (newAlienColor == "yellow") {
    console.log("Player eanred 10 points");
} else if (newAlienColor == "red") {
    console.log("Player eanred 15 points");
}
