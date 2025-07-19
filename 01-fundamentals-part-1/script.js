/* Topic: Values & Variables */

// Values
// A value is basically a piece of data, its the most fundamental unit
// of information in programming.

// let firstName = "Isa";
// console.log(firstName);

// // //Variable name conventions
// let person = "Isa";
// let PI = 3.1415; // All caps are for constants

// // //writing descriptive variables

// let myFirstJob = "programmer";
// let myCurrentJob = "Front end dev";

// console.log(myFirstJob);

/* Topic: Data Types */

// // // the value holds the data type and not the variable
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "isa");

// javascriptIsFun = "YES";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1998;
// console.log(typeof year);
// // typeof bug returns object instead of null
// console.log(typeof null);

/* Topic: let, const and var */

// let age = 30;
// age = 31;

// const birthYear = 1998;
// // birthYear = 1999; // error
// // const job; // error

// var job = "programmer";
// job = "teacher";

// lastName = "Smith";
// console.log(lastName);
// //property was created on the global object not a variable in the current scope(bad practice). Using var also causes this behaviour

/* Topic: Basic Operators */

// Math operators
// const now = 2037;
// const ageIsa = now - 1998;
// const ageSarah = now - 2018;
// console.log(ageIsa, ageSarah);
// console.log(ageIsa * 2, ageIsa / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Isa";
// const lastName = "Smith";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// // Comparison operators
// console.log(ageIsa > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1998 > now - 2018);

/* Topic: Operator Precedence */

const now = 2037;
const ageIsa = now - 1998;
const ageSarah = now - 2018;

console.log(now - 1998 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10  , y = 10 , x = 10
console.log(x, y);

const averageAge = (ageIsa + ageSarah) / 2;
console.log(ageIsa, ageSarah, averageAge);
