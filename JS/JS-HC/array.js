let myArr = ["apple", "banana", "cherry"];
let myNewArr = new Array("Books", "Pens", "Pencils");
console.log(myNewArr);
console.log(myArr);
myArr.push("new item");
console.log(myArr);
myArr.pop();
console.log(myArr);

myNewArr.shift();
console.log(myNewArr);
myNewArr.shift();
console.log(myNewArr);

let myArray = [1, 2, 3, 4, 5, 6];

function sumNum(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
let result = sumNum(myArray);
console.log(result);
