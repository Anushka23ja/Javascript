class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    displayInfo(){
        console.log('Car: ${this.make} ${this.model}');
    }
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.make);
myCar.displayInfo();