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

// const now = 2037;
// const ageIsa = now - 1998;
// const ageSarah = now - 2018;

// console.log(now - 1998 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10  , y = 10 , x = 10
// console.log(x, y);

// const averageAge = (ageIsa + ageSarah) / 2;
// console.log(ageIsa, ageSarah, averageAge);

/* Topic: Coding Challenge #1 */

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula: BMI = mass / height ** 2 = mass / (height *
// height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
//    versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
//    whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is
//   1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is
//   1.76 m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

/* Topic: Strings and Template Literals */

// const firstName = "Isa";
// const job = "front end dev";
// const birthYear = 1998;
// const year = 2026;

// // const isa =
// //   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// // console.log(isa);

// const isaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(isaNew);

// console.log(`Just a regular string...`);

// console.log("String with \n multiple \n lines");
// console.log(`String
// multiple
// lines`);

/* Topic: Taking Decisions: if / else Statements */

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1998;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

/* Topic: Coding Challenge #2 */

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The
//    message can be either "Mark's BMI is higher than John's!" or "John's BMI
//    is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example:
//    "Mark's BMI (28.3) is higher than John's (23.9)!"

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Task 1
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's ${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's ${BMIMark})!`);
// }

/* Topic: Type Conversion and Coercion */

// // Type conversion
// const inputYear = "1998";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Isa")); // NaN = Not a Number
// console.log(typeof NaN);

// console.log(String(23), 23);

// // // Type coercion
// console.log("I am " + 23 + " years old"); // + operator converts number to string
// console.log("23" - "10" - 3); // - operator converts string to number
// console.log("23" * "2"); // * operator converts string to number
// console.log("23" / "2"); // / operator converts string to number

// let n = "1" + 1; // '11'
// n = n - 1; // '11' - 1 = 10
// console.log(n);

/* Topic: Truthy and Falsy Values */

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Isa"));
// console.log(Boolean({})); // empty objects are truthy

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

/* Topic: Equality Operators: == vs. === */

// const age = 18;
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else if (favorite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favorite !== 23) console.log("Why not 23?");

/* Topic: Logical Operators */

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

/* Topic: Coding Challenge #3 */

// There are two gymnastics teams, Dolphins and Koalas. They compete against
// each other 3 times. The winner with the highest average score wins a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the
//    competition, and print it to the console. Don't forget that there can be
//    a draw, so test for that as well (draw means they have the same average
//    score)

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and
//   123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and
//   106

// // Task 1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// // Task 2
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

/* Topic: The switch statement */

// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

/* Topic: Statements and expressions */

//expressions
//The following are expressions because it will produce a js value
3 + 4;
1991;
true && false && !false;

//Statements
//These do not produce values. These are sentences that translate our actions
//Statements end with semicolons
if (23 > 10) {
  const str = "23 is bigger";
}
const me = "isa";
console.log(`im ${2027 - 1998} years old. ${me}`);
