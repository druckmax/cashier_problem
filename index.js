const prompt = require("prompt-sync")({ sigint: true });

// const paidMoney = 50;
// const price = 3.77;

const price = +prompt("Please enter the price: ");
const paidMoney = +prompt("Enter the given money: ")

function calcChange(price, paidMoney) {
  // Calculate change
  let change = paidMoney - price;
  console.log(`The total change is: ${change}`);
  const moneyUnits = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  // Iteration
  let counterObj = {};
  for (let unit of moneyUnits) {
    let division = change / unit;
    if (division >= 1) {
      counterObj[unit] = Math.floor(division);
      change = ((change % unit)*100).toFixed(3)/100;

      // Extra conditions in case you don't need to give change or the customer has to pay more
    } else if (price === paidMoney) {
      return console.log("You do not need to give out any change.");
    } else if (division < 0) {
      return console.log(`The customer needs to pay ${change * -1}€ more.`);
    }
  }
  // Sorting final object and returning each key-value to console.
  console.log("You need to return:");
  return Object.keys(counterObj)
    .sort(function (a, b) {
      return a - b;
    })
    .reverse()
    .forEach(function (i) {
      console.log(`${counterObj[i]} x ${i}€`);
    });
}
//Calling the function
calcChange(price, paidMoney);
