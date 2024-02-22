//Function Declaration
function add(a, b) {
  const result = a + b;
  return result;
}
const result = add(5, 5);
console.log(result);

//Function Expression
const subtraction = function (a, b) {
  return a - b;
};

// Arrow Function
const multiplication = (a, b) => a * b;

const add2 = (a, b, c, d) => a + b + c + d;

const difference = (x, y) => x - y;
console.log(difference(5, 5));

const person = (person) => person.age; // Implicit Return

console.log(person({ name: "Shawon", age: 25 }));

const number = (numbers) => numbers[2];
console.log(number([1, 2, 3, 4, 5]));

// Parameter

const getPI = () => Math.PI;
console.log(getPI());

const doMath = (a=0, b=2, c=8) => {
    console.log(a,b,c)
    return a + b + c;
    
};
doMath()
