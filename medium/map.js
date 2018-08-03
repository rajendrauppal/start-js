#!/usr/bin/env node

// Learning and understanding map from MDN 
// source url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// map holds key value pairs
// any value (object/ primitive) can be either a key or a value.

let arr = [ [1, 'name'], [2, 'age'] ];
let m = new Map(arr);

console.log(m);
console.log(m.size);
console.log(m.get(1));
console.log(m.get(2));

m.set(3, 'company');
console.log(m);
console.log(m.get(3));
