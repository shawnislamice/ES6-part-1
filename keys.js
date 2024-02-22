const glass = { name: "Glass", color: "Golden", price: 12, isCleaned: true };
console.log(glass);

//name,color,price,isCleaned is property or keys
// Glass Golded price isCleaned sra the values

const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const pair = Object.entries(glass); // Array of Array or Two dimensional array
console.log(pair);

// delete glass.isCleaned //Delete
console.log(glass);

//Creating a new object
const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);
Object.freeze(glass); // Freeze Korle Kono Kichu add delete kono change kora jhabe nah.
glass.source = "Bangladesh";
// console.log(glass);
Object.seal(glass); // Freeze Korle Kono Kichu add delete kono change kora jhabe nah.
glass.color = "Green"; // Seal korle value change kora jhay kintu add bah remove kora jhay nah
console.log(glass);    
