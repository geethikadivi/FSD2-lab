// Variable Annotations
let product: string = "Laptop";
let price: number = 50000;
let available: boolean = true;

// Function Annotation
function showProduct(product: string, price: number): void {
    console.log("Product: " + product);
    console.log("Price: " + price);
}

showProduct(product, price);

// Array Annotations
let prices: number[] = [10000, 20000, 30000];
let products: string[] = ["Laptop", "Mobile", "Tablet"];

console.log("Available:", available);
console.log("Prices:", prices);
console.log("Products:", products);