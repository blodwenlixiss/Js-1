"use strict";

// variables

const firstName = "Luka";
let lastName = "Goginashvili";
var age = "22";

// math operations

const x = 15;
const y = 22;
let z = x + y;
console.log(z);
z = y - x;
console.log(z);
z = y * x;
console.log(z);
z = y / x;
console.log(z);

// concatenating

console.log(
  "my name is " +
    "" +
    firstName +
    " " +
    lastName +
    " and im " +
    age +
    " years old"
);

console.log(`my name is ${firstName} ${lastName} and im ${age} years old`);

// Task
// მოცემულა მართკუთხედი სიგრძე ცვლადი = 7 და სიგანე = 5
// (შექმენით 2 ცვლადი) გამოთვალეთ მართკუთხედის ფართობი
// ამ 2 ცვლადის გამოყენებით

const width = 7;
const height = 5;
const area = width * height;

console.log(area);
