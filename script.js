
// Assignment Code
// Generated a list of array for possible input values 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Created a function for the password generator 
function generatePassword() {

//Character input 
  var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];
  var getPassword = [""];
  var password = "";

//Password much be more than 8 characters and less than 128 characters
   var passwordLength = prompt("How many characters do you want your password to be?")

  if (passwordLength<8) {
    alert("Password must be atleast 8 characters")
  }
  else if (passwordLength>128)  {
    alert("Password must be less than 128 characters")
  }

//Prompts to select criteria for password  
  var lowercase = confirm("Do you want your password to contain lower case letters?");
  var uppercase = confirm("Do you want your password to contian upper case letters?");
  var number = confirm("Do you want your password to contain numbers?");
  var special = confirm("Do you want your password to contain special characters?"); 

//If user answers cancel to all options
  if (lowercase === false && uppercase === false && number === false && special === false) {
    alert("Password will not be generated. Please choose atleast one character option");
  }
 
  if (lowercase === true) {
    getPassword = getPassword.concat(lowercaseChar)
  };

  if (uppercase === true) {
    getPassword = getPassword.concat(uppercaseChar)
  };

  if (number === true) {
    getPassword = getPassword.concat(numberChar)
  };

  if (special === true) {
    getPassword = getPassword.concat(specialChar)
  };

//Created for loop to randomize user choices
for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random()*getPassword.length);
  password += getPassword[index] + ""
}

console.log(password)
return password 
 
}

