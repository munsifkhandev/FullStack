console.log("...........Basic Functions..............");

// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

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

function square(number) {
  return number * number;
}
let result = square(9);
console.log(result);
console.log("---the end----");
