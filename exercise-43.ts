// Exercise No. 43

/* Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name. */


let magiciansArray: string[] = ["Houdini", "David Copperfield", "David Blaine"];

const show_magicians2 = (m: string[]): void => {
    for (const magician of m) {
        console.log(magician);
    }
}


const make_great2 = (m: string[]) => {
    for (let i = 0; i < m.length; i++) {
        m[i] = `The Great ${m[i]}`

    }
}


let greatMagicians = magiciansArray.map((value) => {
    return `The great ${value}`;
})


show_magicians2(magiciansArray);
show_magicians2(greatMagicians);