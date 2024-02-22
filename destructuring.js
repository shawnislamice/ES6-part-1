const actor = {
  name: "Jhankar Mahbub",
  age: 30,
  gender: "Male",
  occupation: "Programmer",
  phone: "0145151515",
  money: 5000000,
};

// const phone = actor.phone;
// console.log(phone);

// const age = actor.age;
// console.log(age);

//IF right is a object left side of destructuring must be a object as well
//Use property name as a variable that contains the property name
const { phone, age: boyos } = actor;
// age: boyos; Aliasing age variable name changed to boyos
console.log(phone);
console.log(boyos);

// Array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [r, s] = doubleThem(6, 9);
console.log(r, s);
