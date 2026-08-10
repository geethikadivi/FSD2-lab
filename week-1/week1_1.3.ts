let student: string = "Geethika";
let marks: number = 90;
let passed: boolean = true;

console.log("Student: " + student);
console.log("Marks: " + marks);
console.log("Passed: " + passed);

function display(student: string, marks: number, passed: boolean): void {
    console.log("Student: " + student);
    console.log("Marks: " + marks);
    console.log("Passed: " + passed);
}

display(student, marks, passed);