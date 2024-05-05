const student = {
    name: 'Nathan',
    grade: 10,
    score: 99,
    displayInfo: function() {
        console.log('Name: ${this.name}, Grade: ${this.grade}, Score: ${this.score}');
    }
};

console.log(person.name);
console.log(person.grade);
console.log(person.score);
person.displayInfo();