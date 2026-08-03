class Car {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    details(): void {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
    }
}

const car1 = new Car("Toyota", "Innova");
car1.details();