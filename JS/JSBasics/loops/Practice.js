// Q) Write a Program to Print all the number from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
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
