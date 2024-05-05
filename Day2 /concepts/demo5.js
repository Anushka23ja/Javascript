const person = {
    name: 'John',
    age: 30,
    displayInfo: function() {
        console.log('Name: ${this.name}, Age: ${this.age}');
    }
};

console.log(person.name);
console.log(person.age);
person.displayInfo();