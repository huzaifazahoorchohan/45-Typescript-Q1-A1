// Exercise No. 41

/* Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicians: string[] = ["Houdini", "David Copperfield", "David Blaine"];

const show_magicians = (magiciansList: string[]): void => {
    for (const m of magiciansList) {
        console.log(m);
    }
}

show_magicians(magicians);