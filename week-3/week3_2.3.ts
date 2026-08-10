// class implementation with access modifiers

class Car {
    public brand: string;
    private price: number;
    protected color: string;

    constructor(brand: string, price: number, color: string) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }

    display(): void {
        console.log("Brand: " + this.brand);
        console.log("Price: " + this.price);
        console.log("Color: " + this.color);
    }
}

let c1 = new Car("Toyota", 2500000, "White");

c1.display();