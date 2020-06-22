const coinDict = {
}

export const coinCounter = (amount) => {
  console.log(coinDict);

  const amountHundred = parseFloat(amount) * 100;
  console.log(amountHundred);
  if (isNaN(amountHundred) || amountHundred < 0 || amountHundred % 1 != 0) {
    return "Invalid input!";
  }


  if (amountHundred === 0) {
    return coinDict;
  } else {
    if (amountHundred % 25 >= 0) {
      const quarterTotal = Math.floor(amountHundred / 25);
      const newTotal = amountHundred - quarterTotal * 25;
      coinDict["quarters"] = quarterTotal;
      return coinCounter(newTotal);
    } else if (amountHundred % 10 >= 0) {
      const dimeTotal = Math.floor(amountHundred / 10);
      const newTotal = amountHundred - dimeTotal * 10;
      coinDict["dimes"] = dimeTotal;
      return coinCounter(newTotal);
    } else if (amountHundred % 5 >= 0) {
      const nickelTotal = Math.floor(amountHundred / 5);
      const newTotal = amountHundred - nickelTotal * 5;
      coinDict["nickels"] = nickelsTotal;
      return coinCounter(newTotal);
      // } else if (amountHundred === 0) {
      //   coinDict["pennies"] = null;
    } else if (amountHundred >= 1) {
      const pennyTotal = amountHundred;
      const newTotal = amountHundred - pennyTotal;
      coinDict["pennies"] = pennyTotal;
      return coinCounter(newTotal);
      // return `You would get ${coinDict["quarters"]} quarters, ${coinDict["dimes"]} dimes, ${coinDict["nickels"]} nickels, and ${coinDict["pennies"]} pennies.`;
    }
  }
}

// const userAmount;
// function coinCounter(coinValue) {
//   return userAmount / coinValue;
// }

// const quarterCounter = coinCounter(25);
// const dimeCounter = coinCounter(10);
// const nickelCounter = coinCounter(5);
// const pennyCounter = coinCounter(1);

// function getChange(userAmount) {
//   return quarterCounter {
//     return dimeCounter {
//       return nickelCounter {
//         return pennyCounter{
//           return "You would get ${quarterCounter} quarters, ${dimeCounter} dimes, ${nickelCounter} nickels, and ${pennyCounter} pennies.";
//         }
//       }
//     }
//   }
// }


// const moneyShrinker




// const recurseReverse = (string) => {
//   if (string === "") {
//     return "";
//   } else {
//     return recurseReverse(string.substring(1)) + string[0];
//   }
// }

// export const coinCounter = (amount, counter) => {
//   const coinValues = [0.25, 0.1, 0.05, 0.01];
//   const coinNames = ["quarters", "dimes", "nickels", "pennies"];
//   let coinIndex = counter; //refactor
//   //decimal places check?
//   if (isNaN(amount) || amount < 0) {
//     return "Invalid input!";
//   }
//   else {
//     function calcPennies() {
//       return calcNickels() {
//         return calcDimes() {
//           return calcQuarters(amount);
//         }
//       }
//     }
//   }
// }

// const eachCoin = (coinDecimal) => {
//   return (remainingValue) => {
//     return (Math.floor(remainingValue / coinDecimal));
//   }
// }

// const calcQuarters = eachCoin(0.25);
// const calcDimes = eachCoin(0.1);
// const calcNickels = eachCoin(0.05);
// const calcPennies = eachCoin(0.01);

// function getChange(userAmount) => {
//   return function (quarters) {
//     return function (dimes) {
//       return
//     }
//   }
// }


// const multiplier = (numberToMultiplyBy) => {
//   return (numberToMultiply) => {
//     return numberToMultiplyBy * numberToMultiply;
//   }
// }

// if (amount === 0) {
//   return amount;
// } else {
//   const coinTotal = Math.floor(amount / coinValues[counter]);
//   const amountRemainder = amount - quartersTotal * coinValues[counter];
//   console.log(coinCounter + " " + coinNames[counter]);
//   counter += 1;
//   return coinCounter(amountRemainder);


// }




// ///trying it again from scratch


