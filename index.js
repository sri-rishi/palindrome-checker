var readlinesync = require("readline-sync");
var chalk = require("chalk");

var userName = readlinesync.question(chalk.blue("Enter your name - "));
console.log(chalk.cyan(`Welcome ${userName}`));
console.log(chalk.cyan("Lets check your number is palindrome or not"));
var userString = readlinesync.question("Enter your number - ")
var reverseString = userString.split("").reverse().join("");

if (reverseString === userString ){
  console.log(chalk.yellowBright( `${userString} is palindrome string`));
  console.log(chalk.green(reverseString));
}else{
  console.log(chalk.red( `${userString} is not palindrome string`));
}
