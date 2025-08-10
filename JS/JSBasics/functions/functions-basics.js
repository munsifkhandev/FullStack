console.log("...........Basic Functions..............");

//using this Syntax we can easily define our Function / BlackBox

function greetingsToEveryone() {
  console.log("Starting.....");
  console.log("Hello Jee , This is Line 1.....");
  console.log("Hello Jee , This is Line 2.....");
  console.log("Hello Jee , This is Line 3.....");
  console.log("Ending.....");
}

greetingsToEveryone();

console.log(Math.sqrt(100));
console.log(Math.sqrt(49));

console.log("...........Single Argument/Parameter Functions..............");

function isEvenOrOdd(x) {
  //x is a parameter -> placeholder -> expect input

  if (x % 2 == 0) {
    console.log("Even Number.....");
  } else {
    console.log("Odd Number.....");
  }
}
isEvenOrOdd(12); // x = 12 , 12 is the Argument -> Actual input
isEvenOrOdd(9);

console.log("...........Multiple Argument/Parameter Functions..............");

function multiply(a, b) {
  console.log(a * b);
}
multiply(7, 4);

console.log("---the end----");
