const cars = [
    {make: 'Toyota', model: 'Camry'},
    {make: 'Honda', model: 'Accord'},
    {make: 'Ford', model: 'Mustang'}
];

console.log(cars[0].make);
console.log(cars[1].make);

for(let i=0; i < cars.length; i++){
    console.log('Car ${i+1}:  ${cars[i].make} ${cars[i].model}');
}