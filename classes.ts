class Vehicle {
    // constructor method allows us to pass values into our class
    constructor(public color: string) {
        this.color = color;
    }
    // protected honk method can only be used by parent and children classes
    protected honk(): void {
        console.log('beep');
    }
}

// Car is a child class
class Car extends Vehicle {
    // This overwrites the parent class Vehicle
    constructor(public wheels: number, color: string) {
        super(color);
    }
    // overwrites parent class Vehicle's drive method
    private drive(): void {
        console.log('vroom');
    }

    // This method can only be called on the child class Car
    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

// creates a new instance of vehicle class with a color of orange
const vehicle = new Vehicle('orange');
// vehicle.drive();
// logs the vehicle color.... orange
console.log(vehicle.color);

// creates a new instance of the Car class and passes in two arguments for wheels and color
const car = new Car(4, 'blue');
// call to method on Car class that calls the drive and honk methods
car.startDrivingProcess();
