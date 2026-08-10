let a: number = 20;
let b: number = 20;
let c: string = "geethika";
function display(): void{
console.log("Hello, "+ c);
}

function add(x: number, y: number): number{
    return x + y;
}

display();
let sum: number = add(a, b);
console.log("Sum= ", sum);