export const coinCounter = (amount, coinDictParam) => {
  const coinDict = coinDictParam;
  console.log(coinDict);

  const amountHundred = parseFloat(amount) * 100;
  // const countByCoin = (coinValue) => {
  //   return (amount) => {
  //     return Math.floor(amount / coinValue);
  //   }
  // }
  // const quarterCounter = countByCoin(25);
  console.log(amountHundred);
  if (isNaN(amountHundred) || amountHundred < 0 || amountHundred % 1 != 0) {
    return "Invalid input!";
  }

  if (amountHundred === 0) {
    return coinDict;
  } else {
    if (amountHundred >= 25 && amountHundred % 25 >= 0) {
      const quarterTotal = Math.floor(amountHundred / 25);
      // const quarterTotal = quarterCounter(amountHundred);
      const newTotal = (amountHundred - (quarterTotal * 25)) / 100;
      coinDict["quarters"] = quarterTotal;
      return coinCounter(newTotal, coinDict);
    } else if (amountHundred >= 10 && amountHundred % 10 >= 0) {
      const dimeTotal = Math.floor(amountHundred / 10);
      const newTotal = (amountHundred - (dimeTotal * 10)) / 100;
      coinDict["dimes"] = dimeTotal;
      return coinCounter(newTotal, coinDict);
    } else if (amountHundred >= 5 && amountHundred % 5 >= 0) {
      const nickelTotal = Math.floor(amountHundred / 5);
      const newTotal = (amountHundred - (nickelTotal * 5)) / 100;
      coinDict["nickels"] = nickelTotal;
      return coinCounter(newTotal, coinDict);
    } else if (amountHundred >= 1) {
      const pennyTotal = amountHundred;
      const newTotal = amountHundred - pennyTotal;
      coinDict["pennies"] = pennyTotal;
      return coinCounter(newTotal, coinDict);
    }
  }
}

// const quarterTotal = Math.floor(amountHundred / 25);


// function coinCounter(coinValue, amount) {
//   return amount / coinValue;
// }

// const quarterCounter = coinCounter(25, amount);
// const dimeCounter = coinCounter(10, amount);
// const nickelCounter = coinCounter(5, amount);
// const pennyCounter = coinCounter(1, amount);

// function getChange(userAmount) {
//   return quarterCounter = (userAmount) => {
//     userAmount - quarterCounter;
//     return dimeCounter => {
//       return nickelCounter => {
//         return pennyCounter => {
//           return `You would get ${quarterCounter} quarters, ${dimeCounter} dimes, ${nickelCounter} nickels, and ${pennyCounter} pennies.`;
//         }
//       }
//     }
//   }
// }


// const moneyShrinker


