class Car {
    brand: string;
    model: string;
    price: number;

    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

let c1 = new Car("Toyota", "Innova", 2500000);

console.log("Car Brand:", c1.brand);
console.log("Car Model:", c1.model);
console.log("Car Price:", c1.price);