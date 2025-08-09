console.log("Welcome to the if else Practice Sets..");

// Q) Given a number X , Check the value is Even or Odd??

let number = 321;

if (number % 2 == 0) {
  console.log("It is a Even number...");
} else {
  console.log("It is a Odd Number...");
}

// Q) Find the Minimum among the following using If Else statements....

let a = 12;
let b = 7;
let c = 9;

if (a < b && a < c) {
  console.log("This is your Answer:", a);
} else if (b < a && b < c) {
  console.log("This is your Answer : ", b);
} else {
  console.log("Lessgooo :", c);
}

// Q) Find whether the diagram is triangle or not....

let x = 4,
  y = 9,
  z = 7;

if (x + y > z && y + z > x && x + z > y) {
  console.log("Yess, we can form a triangle...");
} else {
  console.log("No, we cant form a triangle...");
}
