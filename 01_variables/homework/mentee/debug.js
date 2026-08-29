// ============================================================
// 🐛  VARIABLES — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment before your fix.
// Run the file to confirm each fix works.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This throws an error. What's wrong and how do you fix it?

let storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// What's wrong ↓
// const storeName = "TechMart";
// The error occurs because storeName is declared as a const, which means it cannot be reassigned. 
// Your fix ↓
// To fix this, we can change the declaration of storeName from const to let:

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This runs but the output is wrong. Find the bug.

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + item2Price;
console.log("Total: $" + orderTotal);

// What's wrong ↓
// The variable name "Item2Price" is incorrectly capitalized. JavaScript is case-sensitive, so it does not recognize "Item2Price" as the same variable as "item2Price".
// Your fix ↓
// To fix this, we should change "Item2Price" to "item2Price" in the calculation of orderTotal:

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code runs without throwing an error,
// but something is still wrong with it.
// Find the issue and explain why it's a problem.

var productName = "Headphones";
var productPrice = 49.99;
console.log(productName + " — $" + productPrice);

// Hint: the code works, but what keyword should you be using instead?
// Why is the current keyword considered bad practice?
// because it can cause bugs in larger codebases where variable scope is not clear.

// What's wrong ↓
// The issue is that the variables productName and productPrice are declared using var

// Your fix ↓
// To fix this, we should use let or const instead of var. Since these variables are not reassigned, we can use const:

// const productName = "Headphones";
// const productPrice = 49.99;
// console.log(productName + " — $" + productPrice);
