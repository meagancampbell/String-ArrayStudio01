const input = require('readline-sync');
let str = "LaunchCode";

let arr = str.split("");

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str1 = (arr.slice(0,3).join())
let str2 = (arr.slice(3,10).join())
console.log(str1);
console.log(str2);

let str3 = str2 + str1;
let testArray = ["n","c","h","C","o","d","e"]

alert(testArray.join("%")); // 'a%b%c'
alert(testArray.join("")); // 'abc'
let array4 = alert(testArray.join(""));


//Use a template literal to print the original and modified string in a descriptive phrase.


console.log(`${str} becomes ${testArray.join("")}`)


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
prompt("How many characters would you like to relocate?")

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (prompt > 9){
  console.log(error)

}