// Exercise No. 36

/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */

let make_shirt = (size: string, text: string): void => console.log(`This shirt should be ${size} size and the printed text will be "${text}"`)

make_shirt("large", "Hello World");