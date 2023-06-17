let characterLength = 8; // Defeines the initial character length for the password
let choiceArr = []; // Created an array to store the user's choices for password characters

// Arrays for different character types
let specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>']; //
let lowerCassArr = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //
let upperCaseArr = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //
let numberArr = ['0', '1','2','3','4','5','6','7','8','9']; //


let generateBtn = document.querySelector("#generate");



generateBtn.addEventListener("click", writePassword);

//Edited the function to write the generated password
function writePassword() {
  let correctPrompts = getPrompts(); // Gets user prompts and stores the result in "correctPrompts" 
  var passwordText = document.querySelector("#password");

  if(correctPrompts) { // If user prompts are correct
  var newPassword = generatePassword(); // Generate a new password using the user's choices
 
  passwordText.value = newPassword; // Display the generated password in the password field
  } else {
      passwordTest.value = ""; // Clears the password field
  }
}

// Function to generate a passsword based on the user's choices
function generatePassword () { 
  let password = "";
  for(var i = 0; i < characterLength; i++) {
    let randomIndex = Math.floor (Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Function to get user prompts and update "choiceArr" based on their choices
function getPrompts () { 
    choiceArr = []; // Resets the choice array
    
    // Get the desired password length from the user
    characterLength = parseInt (prompt("How many characters do you want your password to be? (8 - 128 characters"));

    // If the input is invalid, show an alert and return false
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character length has to be a number, 8 - 128 digits. Please try again.");
        return false; // If the input is invalid, show an alert and return false 
    }
    // If the user wants lowercase letters, add them to "choiceArr"
    if (confirm("Would you like lowercase letters in your password? Click OK if you do!")) {
        choiceArr = choiceArr.concat(lowerCassArr);
    } 
    // If the user wants uppercase letters, add them to "choiceArr"
    if (confirm("Would you like uppercase letters in your password? Click OK if you do!")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }
    // If the user wants special characters, add them to "choiceArr"
    if (confirm("Would you like special characters in your password? Click OK if you do!")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    // If the user wants numbers, add them to "choiceArr"
    if (confirm("Would you like numbers in your password? Click OK if you do!")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true; // Return true to indicate that user prompts are correct
  }