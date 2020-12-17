// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters do you want your password to be?")

  if (passwordLength<8) {
    alert("Password must be atleast 8 characters")
  }
  else if (passwordLength>128)  {
    alert("Password must be less than 128 characters")
  }
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
