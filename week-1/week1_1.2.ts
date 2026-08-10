let book: string = "Harry Potter";
let pages: number = 300;
let available: boolean = true;

console.log("Book: " + book);
console.log("Pages: " + pages);
console.log("Available: " + available);

function display(book: string, pages: number, available: boolean): void {
    console.log("Book: " + book);
    console.log("Pages: " + pages);
    console.log("Available: " + available);
}

display(book, pages, available);