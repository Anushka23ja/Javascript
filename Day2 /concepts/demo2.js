class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    displayInfo(){
        console.log('Car: ${this.make} ${this.model}');
    }
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Accord');


console.log(car1.make);
car1.displayInfo();

console.log(car2.make);
car2.displayInfo();