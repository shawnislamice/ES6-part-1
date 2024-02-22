const myObject = {
  x: 1,
  y: 2,
  a: 3,
  b: 4,
  c: 5,
  d: 6,
  e: 7,
  f: 8,
};
let { x, y, ...z } = myObject; // Z object z y bade baki ghula seh nibe.
console.log(z);
