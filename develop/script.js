// When prompted for password criteria, then I select which criteria to include in the password

var generateBtn = document.querySelector("#generate");

function generatePassword() {

//
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

 
var resultArray = [];
var userArray = [];

uppercaseArray [1]
//When prompted for password criteria, then I select which criteria to include in the password

//When prompted for the length of the password, then I choose a length of at least 8 characters and no more than 128 characters
  var numCharacter = prompt ("Choose an amount of characters between 8 and 128.");
//When prompted for character types to include in the password, then I choose lowercase, uppercase, numeric, and/or special characters
  var numbers = confirm ("Would you like numbers in your password?");
  var uppercaseletters  = confirm (" Would you like uppercase letters in your password?");
  var lowercaseletters = confirm ("Would you like lowercase letters in your password?");
  var specialcharacters = confirm ("Would you like special characters in your password?");

