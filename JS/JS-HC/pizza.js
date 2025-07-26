let numberofGuests = 5;
let pizzaSize;

// small <=2
// medium <=5
// large

if (numberofGuests <= 2) {
  console.log("Order Small Pizza......");
} else if (numberofGuests <= 5) {
  console.log("Bhaii Medium mangwa ly tera kaam hojae ga.....");
} else {
  console.log("Tum log Large nahi toh multiple Pizzas mangwa lo...");
}

let guestsArrived = 7;
let pSize;

if (guestsArrived <= 2) {
  pSize = "Small";
} else if (guestsArrived <= 5) {
  pSize = "Medium";
} else {
  pSize = "large";
}

console.log(pSize);
