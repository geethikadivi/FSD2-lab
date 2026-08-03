class Rectangle {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    area(): void {
        console.log("Area =", this.length * this.width);
    }
}

const rect = new Rectangle(10, 5);
rect.area();