const numbers = [1,2,3,4,5,6,7,8];

//Using tradiitonal function expression with map 
const squaredMap = numbers.map(function(x){
    return x*x;
});

//using arrow function with map
const squaredMapArrow = numbers.map(x => x*x);

console.log(squaredMap);
console.log(squaredMapArrow);