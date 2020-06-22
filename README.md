# **Coin Counter**

#### Author: **_Jessica Hvozdovich and Julia Seidman_**
#### June 22, 2020

### Description

_This application serves as an introduction to functional programming with pure functions, closures, curried functions, and recursive functions. The coin counter takes a user input of an amount of money and calculates the exact change needed to equal that sum in quarters, nickels, dimes, and pennies. Jest testing is also employed._

### Instructions for use:

1. Open Terminal (macOS) or PowerShell (Windows)
2. To download the project Directory to your desktop enter the following commands:
```
cd Desktop
git clone https://github.com/jhvozdovich/coin-counter.git
cd coin-counter (or the file name you created for the main Directory of the download)
```
3. To view the downloaded files, open them in a text editor or IDE of your choice.
* if you have VSCode for example, when your terminal is within the main project Directory you can open all of the files with the command:
```
code .
```
5. Download node and node package manager if they are not already installed on your device. You can find further instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript-8d3b52cf-3755-481d-80c5-46f1d3a8ffeb/installing-node-js-14f2721a-61e0-44b3-af1f-73f17348c8f4).
5. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
6. The command npm run start will build and open the compiled code in a browser of your choice using a local host.

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!  
_Have a bug or an issue with this application? [Open a new issue](https://github.com/jhvozdovich/coin-counter/issues) here on GitHub._

### Technologies Used

* JavaScript
* Jest
* Git and GitHub

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **User enters an amount of money** | User Input:"$0.73" | Output: “Do you want to know what coins add up to $0.73?” |
| **Program provides the number of quarters** | User Input:"Yes!" | Output: “You will need 2 quarters.” |
| **Program provides the number of dimes** | User Input:"-" | Output: “You will need 2 dimes.” |
| **Program provides the number of nickels** | User Input:"-" | Output: “You will not need any nickels.” |
| **Program provides the number of pennies** | User Input:"-" | Output: “You will need 3 pennies.” |

#### License

This software is licensed under the MIT license.

Copyright © 2020 **_Jessica Hvozdovich and Julia Seidman_**