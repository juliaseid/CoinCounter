export const coinCounter = (amount, counter) => {
  const coinValues = [0.25, 0.1, 0.05, 0.01];
  const coinNames = ["quarters", "dimes", "nickels", "pennies"];
  let coinIndex = counter; //refactor
  //decimal places check?
  if (isNaN(amount) || amount < 0) {
    return "Invalid input!";
  }
  if (amount === 0) {
    return amount;
  } else {
    const coinTotal = Math.floor(amount / coinValues[counter]);
    const amountRemainder = amount - quartersTotal * coinValues[counter];
    console.log(coinCounter + " " + coinNames[counter]);
    counter += 1;
    return coinCounter(amountRemainder);
  }
}



