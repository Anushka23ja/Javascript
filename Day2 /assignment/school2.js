class School{
    constructor(name,grade,score){
        this.name = name;
        this.grade = grade;
        this.score = score;
    }

    displayInfo(){
        console.log('Name: ${this.name} Grade: ${this.grade} Score: ${this.score}');
    }
}

const student = new School('Amanda', 9, 80);
console.log(student.name);
console.log(student.grade);
console.log(student.score);
student.displayInfo();