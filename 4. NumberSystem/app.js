/**
 * things to implement:
 * 1. should get input from user on command line after running the command node app.js
 * 2. also get the second input base should be 16(hexadecimal), 10(decimal), 8(octal), 2(binary)
 * 3. convert the current number to
 */

//default imports
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

//constants
const { constants } = require("./constants");

const rl = readline.createInterface({
  input,
  output,
});

const getBase = (baseQuestion) => {
  rl.question(baseQuestion, (answer) => {
    if (!Object.keys(constants).includes(parseInt(answer))) {
      getBase("Invalid base number.\nPlease Enter a valid base number: ");
    }

    rl.close();
  });
};

getBase(
  "Enter the base of the number you want to convert {should be 2(binary), 8(octal), 10(decimal), 16(hexadecimal) }\nBase Number: "
);

// const a = 222;
// class NumberSystem {

//   decimalToBinary(decimalValue) {
//     let binaryValue = '';
//     while (decimalValue !== 0) {
//       console.log(decimalValue)
//       binaryValue = `${decimalValue % 2}` + binaryValue;
//       decimalValue = Math.floor(decimalValue / 2);

//     }
//     return binaryValue;
//   }

// }

// const ns = new NumberSystem()

// console.log(ns.decimalToBinary(a))
