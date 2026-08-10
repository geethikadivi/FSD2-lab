namespace Calculator {
    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

let result: number = Calculator.multiply(5, 4);

console.log("Multiplication:", result);