// Exercise No. 21

/* They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */

interface Countries {
    names: string[];
}

let countries: Countries = {
    names: ["Pakistan", "India", "Saudi", "China"],
}

for (const c of countries.names) {
    console.log(c);
}