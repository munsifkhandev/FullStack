// Q) Write a Program to Print all the number from 1 to 10.

let hehe = 1;
while (hehe <= 20) {
  console.log("While Loop: ", hehe);
  hehe += 1;
}
// Q) Write a Program to calculate sum all the number from 1 to 10.

let ans = 0;
let i = 1;

while (i <= 100) {
  ans = i + ans;
  i++;
}
console.log("The Sum of all numbers to 1 to 10: ", ans);

let sum = 0;
for (a = 1; a <= 110; a++) {
  sum = a + sum;
}
console.log("Sum is equal to : ", sum);

// Q Write a Program to Reverse Print the Numbers from 20 to 1

let abc = 20;
while (abc >= 1) {
  console.log(abc);
  abc -= 1;
}

console.log("--------------for loop---------------");

// Q Print numbers using for loop

for (let p = 1; p <= 20; p++) {
  console.log("This is for loop: ", p);
}

let mySum = 0;
for (let i = 1; i <= 10; i++) {
  mySum += i;
}
console.log(mySum, "This is sum");

for (let i = 1; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log("Even Numbers: ", i);
  } else if (i % 2 != 0) {
    console.log("Odd Numbers :", i);
  }
}

for (i = 2; i <= 25; i += 2) {
  console.log(i);
}
