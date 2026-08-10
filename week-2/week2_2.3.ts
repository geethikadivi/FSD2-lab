const marks = (
    name: string,
    m1: number,
    m2: number,
    m3: number
): void => {

    let total: number;

    total = m1 + m2 + m3;

    console.log("Student Name:", name);
    console.log("Mark 1:", m1);
    console.log("Mark 2:", m2);
    console.log("Mark 3:", m3);
    console.log("Total Marks:", total);
};

marks("Geethika", 80, 85, 90);