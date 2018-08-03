
// 2 syntaxes for creating an empty array
let arr = new Array();
console.log(arr);
let arr1 = [];
console.log(arr1);

// declare and assign values in an array in a single statement
let fruits = ["Apple", "Orange", "Plum"];

// adding data using push. data gets added in the end.
fruits.push("Pear");
console.log(fruits);

// adding data at the beginning. use unshift().
fruits.unshift("Mango");
console.log(fruits);

// adding multiple elements at the beginning. adds right to left.
fruits.unshift("Pineapple", "Lemon");
console.log(fruits);

// deleting elements using pop. element is deleted from the end.
fruits.pop();
console.log(fruits);

// deleting elements from the beginning. use shift().
fruits.shift();
console.log(fruits);

// adding, deleting and updating elements using splice().
// syntax:
// arr.splice(index[, deleteCount, elem1, ..., elemN])
// index - position to start splicing from
// deleteCount - how many elements to delete
// inserts the elements present from elem1 to elemN

// from index 1, remove 1 element.
fruits.splice(1, 1);
console.log(fruits);

// remove first 2 elements and replace them with others.
let removedFruits = fruits.splice(0, 2, "kiwifruit", "banana", "papaya");
console.log(fruits);
// to get removed elements, use return object from splice().
console.log(removedFruits);

// inserting elements into the array using splice(). use deleteCount as 0.
fruits.splice(1, 0, "guava", "peach");
console.log(fruits);

// making sub-arrays using slice().
// syntax:
// arr.slice(start, end)
// will give a sub-array from start to end - 1
let str = "test";
let arrChar = ['t', 'e', 's', 't'];

console.log(str.slice(1, 3));  // "es"
console.log(arrChar.slice(1, 3));  // [e, s]

// get elements from the end
console.log(str.slice(-2));  // "st"
console.log(arrChar.slice(-2));  // ['s', 't'];

// merge arrays with items or arrays using concat().
// arr.concat(arg1, arg2, ...)
let arrSmall = [1, 2];
// merge arrSmall with [3, 4]
console.log(arrSmall.concat([3, 4]));

// merge arrSmall with [3, 4] and [5, 6]
console.log(arrSmall.concat([3, 4], [5, 6]));

// merge arrSmall with [3, 4] and then add values 5, 6, 7...
console.log(arrSmall.concat([3, 4], 5, 6, 7));

// searching
// arr.indexOf(item, from)
// looks for <item> starting from index <from>, returns the index where it was found, else -1.
// arr.lastIndexOf(item, from)
// same as indexOf, but looks from right to left
// arr.includes(item, from)
// looks for item, starting from index <from>, returns true if found.
// these methods use === for comparison
// includes handles NaN correctly unlike indexOf and lastIndexOf
let arrSearch = [1, 0, false];
console.log(arrSearch.indexOf(0));  // 1
console.log(arrSearch.indexOf(false));  // 2
console.log(arrSearch.indexOf(null));  // -1
console.log(arrSearch.includes(1));  // true

// find and find index
let result = arrSearch.find(function (item, index) {
  console.log(item + " found at " + index);
});
console.log(result);

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name);  // John

// findIndex() does the same things as find() but returns the 
// index of the found item instead of actual item.

// filter()
// filter function works similar to find but instead of returning one result
// filter returns all items matching the criteria.
let someUsers = users.filter(item => item.id < 4);
console.log(someUsers);

// transforming an array
// map() transforms or reorder the array without changing the original array.
// map() applies a given function on all items of the given array and returns new array.
let heroes = ["thor", "transformer", "ironman"];
let lengths = heroes.map(item => item.length);
console.log(lengths);

// reduce()
// for iterating over an array, we may use loops.
// for transforming every item of an array, we can use map.
// but if we want to return a single value based on the entire array
// we should use reduce.
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((sum, current) => sum + current, 0);
console.log(total);

// Objects
// create new objects
let userCons = new Object();  // object constructor syntax
let userLit = {};  // object literal syntax
console.log(userCons);
console.log(userLit);

// create object with properties
let userProp = {
  name: "rajendra",
  age: 30
};
console.log(userProp);

// add a boolean property
userProp.isAdmin = true;
console.log(userProp);

// delete a property from the userProp object
delete userProp.age;
console.log(userProp);

// assign property values to an object using a function (factory)
function makeUser(name, age) {
  return {
    name: name,
    age: age
  };
}
let userFunc = makeUser("rajendra", 30);
console.log(userFunc);
console.log(userFunc.name);
console.log(userFunc.age);

// shorthand for the above way of creating object
function makeUserShorthand(name, age) {
  return {
    name,
    age
  };
}

let userShorthand = makeUserShorthand("rajendra uppal", "31");
console.log(userShorthand);
console.log(userShorthand.name);
console.log(userShorthand.age);

// access all key-value pairs of an object using a loop
let patient = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (key in patient) {
  console.log(key + " : " + patient[key]);
}

// object methods
// how to access keys, values and both using entries
let patientKeys = Object.keys(patient);
let patientValues = Object.values(patient);
let patientBoth = Object.entries(patient);

console.log(patientKeys);
console.log(patientValues);
console.log(patientBoth);

// Destructuring
// allows us to unpack arrays/ objects into a bunch of variables
let elders = ["do", "all", "the", "talking"];
let [a, b, c, d] = elders;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// you can skip elements
let [ , , title] = ["do", "all", "the", "talking"];
console.log(title);

// destructuring works for all iterables such as strings, sets etc.
let [p, q, r] = "abc";
console.log(p);
console.log(q);
console.log(r);

let aSet = new Set([1, 2, 3, 3]);
console.log(aSet);
let [one, two, three, four] = aSet;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

let [firstName, lastName] = "Rajendra Uppal".split(' ');
console.log(firstName);
console.log(lastName);

// accessing key-value pairs using object destructuring
let userObject = {
  name: "Rajendra Uppal",
  age: 30
};

for (let [name, age] of Object.entries(userObject)) {
  console.log( `${name} : ${age}` );
}

// variable number of params in object destructuring
let [name, age, ...rest] = ["Rajendra Uppal", 30, "software", "java", "python", "javascript", "architect"];
console.log(name);
console.log(age);
console.log(rest.length);
for (index in rest) {
  console.log(rest[index]);
}

// default values
let [givenName = "Rajendra", surname="Anonymous"] = ["Uppal"];
console.log(givenName);  // Uppal
console.log(surname);  // Anonymous

// object destructuring
let options = {
  optionsTitle: "Menu",
  width: 400,
  height: 800
};
let { optionsTitle, width, height } = options;
console.log(optionsTitle);
console.log(width);
console.log(height);

let options1 = {
  optionsTitle1: "Menu",
  width: 400,
  height: 800
};
let { width: w, height: h, optionsTitle1 } = options1;
// { sourceProperty: targetVariable}
// colon show what goes where
// width -> w
// height -> h
// optionsTitle -> optionsTitle
console.log(w);
console.log(h);
console.log(optionsTitle1);


// assigning default values
let options2 = {
  optionsTitle2: "menu"
};
let {width2 = 100, height2 = 200, optionsTitle2} = options2;
console.log(width2);
console.log(height2);
console.log(optionsTitle2);


// nested destructuring
let nestedObject = {
  size: {
    width3: 350,
    height3: 450
  },
  items: ["cake", "donut"],
  extra: true  // something extra that we will not destruct
};

let {
  size: {
    width3,
    height3
  },
  items: [item1, item2],
  title3 = "hey"  // not present in the nestedObject, will use default value
} = nestedObject;

console.log(width3);
console.log(height3);
console.log(item1);
console.log(item2);
console.log(title3);

// function params and destructuring
let funcOptions = {
  title: "my function",
  items: ["item1", "item2"]
};

function showOptions({title = "untitled", width = 250, height = 750, items = []}) {
  console.log(title);
  console.log(width);
  console.log(height);
  console.log(items);
}

showOptions(funcOptions);
