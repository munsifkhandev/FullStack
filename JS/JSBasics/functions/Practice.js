function isEvenorOdd(x) {
  if (x % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

const answer = isEvenorOdd(22);
console.log(answer);
