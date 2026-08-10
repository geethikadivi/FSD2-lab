class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

let b1 = new Book("Wings of Fire", "A.P.J Abdul Kalam", 300);

console.log("Book Title:", b1.title);
console.log("Book Author:", b1.author);
console.log("Book Price:", b1.price);