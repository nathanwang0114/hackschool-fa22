multNum = (num1, num2) => num1 * num2;
console.log(multNum(2, 3));

favoriteClass = (studentName) =>
  "I'm " + studentName + ", and my favorite class is CSE11.";
console.log(favoriteClass("Nathan"));

function discount(list, rate) {
  for (let i = 0; i < list.length; i++) {
    list[i] = list[i] * rate;
  }
}

const purchase = {
  name: "Rob",
  cost: 10000,
  payment: "Credit Card",
  location: "Target",
  features: ["House Cleaning", "First Aid", "Cooking"],
};

for (let i = 0; i < purchase.features.length; i++) {
  console.log(purchase.features[i]);
}
