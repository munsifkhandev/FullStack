function fun(...values) {
  console.log(values);
}
fun(1, 2, 3, 4, 5, 6);

console.log(Math.abs(9));
console.log(Math.abs(-9));

const d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());

let s1 = "Hwlloo jee";
let s2 = "Hwlloo jee kya baat hai";

let x = 1021211;
let s3 = `What is this Number ${x}`;
console.log(s3);

console.log("-----------First citizen functions------------------");

function someFunction(f1) {
  f1();
  console.log("Called function F1");
}
function helloJee() {
  console.log("Helloo jeee ki haal hai");
}

someFunction(helloJee);
