class Mobile {
    readonly imei: number;
    brand: string;
    static os: string = "Android";

    constructor(imei: number, brand: string) {
        this.imei = imei;
        this.brand = brand;
    }

    display(): void {
        console.log("Mobile Details");
        console.log("IMEI: " + this.imei);
        console.log("Brand: " + this.brand);
        console.log("OS: " + Mobile.os);
    }
}

let m1 = new Mobile(12345, "Samsung");
m1.display();