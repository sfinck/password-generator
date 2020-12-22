// Assignment Code
// Generated a list of array for possible input values 
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!, @, #, $, %, ^, &, *, (, ), -, +, ="];
var charOptions = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Created a function for the password generator 
function generatePassword() {

//Password much be more than 8 characters and less than 128 characters
   var passwordLength = prompt("How many characters do you want your password to be?")

  if (passwordLength<8) {
    alert("Password must be atleast 8 characters")
  }
  else if (passwordLength>128)  {
    alert("Password must be less than 128 characters")
  }

//Prompts to select criteria for password  
  var lowercase = prompt("Do you want your password to contain lower case letters?")

  var uppercase = prompt("Do you want your password to contian upper case letters?") 

  var number = prompt("Do you want your password to contain numbers?")
  
  var specialChar = prompt("Do you want your password to contain special characters?")

//Builds array based on user choices 
  function buildArr(prompt, arr) {
    if (prompt === true) {
      charOptions.push(...arr);
      while (charOptions.length < pwLength) {
        charOptions.push(...arr);
      }






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
