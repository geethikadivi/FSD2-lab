const interest = (
    principal: number,
    rate: number,
    time: number
): void => {

    let si: number;

    si = (principal * rate * time) / 100;

    console.log("Principal:", principal);
    console.log("Rate:", rate);
    console.log("Time:", time);
    console.log("Simple Interest:", si);
};

interest(5000, 5, 2);