const numbers = [
  1, 2, 3, 4, 5, 6, 8, 12, 5, 4, 5, 45, 4, 5, 4, 5, 1, 4, 5, 1, 4,
];
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i])
}

for (let number of numbers) {
  // console.log(number)
}

const myName = "Shawon Islam";
for (let char of myName) {
  // console.log(char)
}
// console.log(myName)

const glass = {
  name: "Glass",
  price: 100,
  color: "Red",
};
for (let x in glass) {
  const value = glass[x];
  console.log(x, value);
}
//Optional
const keys = Object.keys(glass);
console.log(keys);
for(let key of keys){
    const value=glass[key]
    console.log(key,value)
}
