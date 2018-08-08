#!/usr/bin/env node

// Learning and understanding map from MDN 
// source url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// map holds key value pairs
// any value (object/ primitive) can be either a key or a value.

let arr = [ [1, 'name'], [2, 'age'] ];
let paramMap = new Map(arr);

console.log(paramMap);  // output: complete map object
console.log(paramMap.size);  // output: number of key-value pairs present in the map
console.log(paramMap.get(1));  // get the value present at key = 1
console.log(paramMap.get(2));

paramMap.set(3, 'company');  // set a new value 'company' at a new key = 3
console.log(paramMap);
console.log(paramMap.get(3));

// a map
