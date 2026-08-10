class Employee {
    readonly empId: number;
    name: string;
    static company: string = "ABC Company";

    constructor(empId: number, name: string) {
        this.empId = empId;
        this.name = name;
    }

    display(): void {
        console.log("Employee Details");
        console.log("Employee ID: " + this.empId);
        console.log("Name: " + this.name);
        console.log("Company: " + Employee.company);
    }
}

let e1 = new Employee(101, "Rahul");
e1.display();