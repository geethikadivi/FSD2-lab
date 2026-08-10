function display<T extends number>(value: T): T {
    return value;
}

console.log("Number:", display(100));
console.log("Number:", display(50));
//generic function with constarint