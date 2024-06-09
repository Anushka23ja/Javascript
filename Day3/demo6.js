//Object destructuring 
const person = {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    address:{
        city: "New York",
        country: "USA"
    }
};

//Extracting values from the person object
const{ firstname, lastname, age, address:{city, country}} = person;

//Using the extracted values
console.log(firstname)
console.log(lastname);
console.log(age);
console.log(city);
console.log(country);