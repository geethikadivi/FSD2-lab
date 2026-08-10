namespace StudentDetails {
    export let name: string = "Geethika";
    export let age: number = 19;

    export function display(): void {
        console.log("Name: " + name);
        console.log("Age: " + age);
    }
}

StudentDetails.display();