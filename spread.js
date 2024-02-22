const max = Math.max(6, 23, 45, 1, 89, 23);
console.log(max);

const number = [2, 56, 8, 6, 7, 8, 5, 4, 78];
const arrayMax = Math.max(...number); //Spread
console.log(number);
console.log(...number);
console.log(arrayMax);

const num = [2, 4, 5, 6, 8];
const num2 = num;
const num3 = [...num]; //Call with spread dont capture the refernce
num2.push(12);
console.log(num3);

console.log(num);


const numbers=[...num, 9999] //9999 value tawo array teh ad hoye jhabe
console.log(numbers)