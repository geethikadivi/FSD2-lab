// using "any" type
let value: any;
value = 100;

console.log("Data type of value is: " + typeof(value));


// using "unknown" type
let data: unknown;
data = 25;

if (typeof data === "number") {
    console.log("Value is: " + data);
}


// using "void" type
function ShowMessage(message: string): void {
    console.log(message);
}

ShowMessage("Hello, World!");