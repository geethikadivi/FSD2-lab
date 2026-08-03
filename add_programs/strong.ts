let strongInput: number = 145;
let duplicateValue: number = strongInput;
let factorialTotal: number = 0;

while (strongInput > 0) {
    let Digit: number = strongInput % 10;
    let Value: number = 1;

    for (let multiplierValue = 1; multiplierValue <= Digit; multiplierValue++) {
        Value *= multiplierValue;
    }

    factorialTotal += Value;
    strongInput = Math.floor(strongInput / 10);
}

if (factorialTotal === duplicateValue) {
    console.log(`${duplicateValue} is a Strong Number`);
} else {
    console.log(`${duplicateValue} is Not a Strong Number`);
}