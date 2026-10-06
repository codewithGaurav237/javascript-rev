// In javascript there are two type of datatypes.
// primitive(called by value).
// there are 7 primitive datatype;
// 1-string,
// 2-Number,
// 3-Boolean,
// 4-null,
// 5-undefined,
// 6-symbol,
// 7-BigInt;

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Non-primitive(Reference value),
// 1-object,
// 2-Array
// 3-functions


const heros = ["spiderman", "batman", "superman"];
let myObj = {
    name: "Gaurav",
    age: 22,
}

const myFunction = function(){
    console.log("hey pam!");
}

console.log(typeof anotherId);
 myFunction();

// JavaScript is a dynamically typed language. ✅
// In JavaScript, you don't need to specify the data type when declaring a variable.
// let x = 10;       // Number
// x = "Hello";      // String
// x = true;         // Boolean
// The same variable can hold different types of values during runtime.

// Compare with static typing
// In a statically typed language like Java:
// int x = 10;
// x = "Hello";  // ❌ Error
// Once x is declared as an int, it cannot store a string.