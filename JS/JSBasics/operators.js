// Arithmetic Operators :

let x = 9;
let y = 3;

console.log(x + y);
console.log(x * y);
console.log(x - y);
console.log(x / y);
console.log(x ** y);
console.log(10 % 3);

// Assignment Operations :

//One way:

let a = 10;
let b = a + 5;

console.log(b);

// Second way :

let p = 24;
p = p + 22;

console.log(p);

//Third way :

let q = 7;

q += 9;
console.log(q);

let r = 15;
r -= 5;
console.log(r);

let s = 20;
s *= 2;
console.log(s);

let t = 100;
t /= 4;
console.log(t);

// Logical Operators :

console.log("This is the and operator for false and false :", false && false);
console.log("This is the and operator for false and true :", false && true);
console.log("This is the and operator for true and false :", true && false);
console.log("This is the and operator for true and true :", true && true);

console.log("This is the or operator for false and false :", false || false);
console.log("This is the or operator for false and true :", false || true);
console.log("This is the or operator for true and false :", true || false);
console.log("This is the or operator for true and true :", true || true);

console.log("This is the not operator for true :", !true);
console.log("This is a not operator for false :", !false);
