// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

for (let i = 1; i < 10; i++) {
  console.log(i);
}

// What's wrong ↓
// because the loop condition is i < 10, which means it will stop when i reaches 10. To include 10, we should change the condition to i <= 10.

// Your fix ↓
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?

for (let i = 1; i <= 5; i++) {
  let total = 0;
  total += i;
}
console.log("Sum: " + total);

// What's wrong ↓
// because the variable total is declared inside the loop, it gets reset to 0 on each iteration. We need to declare total outside the loop so that it accumulates the sum across iterations.
// Your fix ↓
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Sum: " + total);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
console.log("Done!");

// Bug 1 ↓
// The condition in the if statement is checking for even numbers (i % 2 === 0) instead of odd numbers. We should change it to check for odd numbers (i % 2 !== 0).
// Bug 2 ↓
// The continue statement is unnecessary here. It causes the loop to skip the console.log for odd numbers. We can remove the else block entirely and just log the odd numbers directly.
// Your fix ↓
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("Done!");