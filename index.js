const prompt = require("prompt-sync")({ sigint: true });

const price = +prompt("Please enter the price: ");
const paidMoney = +prompt("Enter the given money: ")

function calcChange(price, paidMoney) {
  // Calculate change 
  let change = paidMoney - price;
  console.log(`The total change is: ${change}`);
  // Setting array of all possible options for the change
  const moneyUnits = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  // Iteration
  let counterObj = {};
  for (let unit of moneyUnits) {
      // Dividing 'change' with each item from the 'moneyUnits' array and check if the result is larger than 1, meaning we can use the unit for the change. If so, add the result to the counterObj object. The iteration unit from the array becomes the key in the counterObject and the result is saved as its value. Then calculate the remainder of change and the respective unit and set it as 'change' for the next iteration.
    let division = change / unit;
    if (division >= 1) {
      counterObj[unit] = Math.floor(division);
      change = ((change % unit)*100).toFixed(2)/100;

      // Extra conditions in case you don't need to give change or the customer has to pay more
    } else if (price === paidMoney) {
      return console.log("You do not need to give out any change.");
    } else if (division < 0) {
      return console.log(`The customer needs to pay ${change * -1}€ more.`);
    }
  }
  // Sorting final object and returning each key-value to console.
  //1. Mutating to object-keys array
  //2. Sorting from small to big
  //3. Print each value of the respective key to the console
  console.log("You need to return:");
  return Object.keys(counterObj)
    .sort(function (a, b) {
      return b-a;
    })
    .forEach(function (i) {
      console.log(`${counterObj[i]} x ${i}€`);
    });
}
//Calling the function
calcChange(price, paidMoney);
