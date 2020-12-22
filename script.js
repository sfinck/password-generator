
// Assignment Code
// Generated a list of array for possible input values 
var generateBtn = document.querySelector("#generate");

//Shuffle array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
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
  var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];
  var charOptions = [];

//Password much be more than 8 characters and less than 128 characters
   var passwordLength = prompt("How many characters do you want your password to be?")

  if (passwordLength<8) {
    alert("Password must be atleast 8 characters")
  }
  else if (passwordLength>128)  {
    alert("Password must be less than 128 characters")
  }

//Prompts to select criteria for password  
  var lowercaseChar = confirm("Do you want your password to contain lower case letters?");
  var uppercaseChar = confirm("Do you want your password to contian upper case letters?");
  var numberChar = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");

  //If user answers cancel to all options
  if (lowercaseChar === false && uppercaseChar === false && numberChar === false && specialChar === false) {
    alert("Password will not be generated. Please choose atleast one character option");
  }
  function buildArr(confirm, arr) {
    if (confirm === true) {
      charOptions.push(...arr);
      while (charOptions.length < passwordLength) {
        charOptions.push(...arr);
      }
    }
  }
  //Builds array based on user input 
  buildArr(lowercaseChar);
  buildArr(uppercaseChar);
  buildArr(numberChar);
  buildArr(specialChar);

  shuffleArray(charOptions);
  var passwordText = charOptions.slice(0, passwordLength);
  return passwordText = join("");

  }

