// Exercise No. 42

/* Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */

let magiciansList: string[] = ["Houdini", "David Copperfield", "David Blaine"];

const show_magicianss = (m: string[]): void => {
    for (const magician of m) {
        console.log(magician);
    }
}

const make_great = (m: string[]) => {
    for (let i = 0; i < m.length; i++) {
        m[i] = `The Great ${m[i]}`

    }
}

make_great(magiciansList);
show_magicianss(magiciansList);