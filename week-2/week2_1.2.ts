let a: number = 10;
let b: number = 5;

function display(): void {
    console.log("Hello, Geethika");
}

function multiply(x: number, y: number): number {
    return x * y;
}

display();

let result: number = multiply(a, b);
console.log("Multiplication = ", result);