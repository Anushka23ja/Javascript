class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    displayInfo(){
        console.log('Name: ${this.name}, Age: ${this.age}');
    }
}

const person1 = new Person('John', 30);

console.log(person1.name);
person1.displayInfo();