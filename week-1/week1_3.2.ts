// Variable Annotations
let name: string = "Geethika";
let age: number = 19;
let student: boolean = true;

// Function Annotation
function display(name: string, age: number): void {
    console.log("Name: " + name);
    console.log("Age: " + age);
}

display(name, age);

// Array Annotations
let marks: number[] = [80, 85, 90];
let subjects: string[] = ["Maths", "Python", "DBMS"];

console.log("Student:", student);
console.log("Marks:", marks);
console.log("Subjects:", subjects);