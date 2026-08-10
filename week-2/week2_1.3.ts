let marks1: number = 80;
let marks2: number = 90;

function display(): void {
    console.log("Student Marks");
}

function total(x: number, y: number): number {
    return x + y;
}

display();

let result: number = total(marks1, marks2);
console.log("Total Marks = ", result);