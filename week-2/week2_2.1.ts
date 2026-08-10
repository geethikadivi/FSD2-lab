const cel = (
    cn: string,
    units: number
): void => {

    let bill: number;

    if (units <= 100) {
        bill = units * 2;
    } else if (units <= 300) {
        bill = (100 * 2) + ((units - 100) * 4);
    } else {
        bill = (100 * 2) + (200 * 4) + ((units - 300) * 6);
    }

    console.log("Customer Name:", cn);
    console.log("Units Consumed:", units);
    console.log("Electricity Bill: ₹" + bill);
};

cel("Rahul", 350);