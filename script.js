function generatePassword() {
    // I created each character set separately as an array and
    // based off the user's choices, I append the set to a blank array that I created.
    var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
    var selectedArray = [];
  
    var passwordLength = getPasswordLength();
  
    var charTypeSelected = false;
    // This loop ensures the user selects at least one character type
    while (charTypeSelected == false) {
      var lowerCase = getChoice("lowercase");
      var upperCase = getChoice("uppercase");
      var numericCharacters = getChoice("numeric");
      var specialCharacters = getChoice("special");
      if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
        charTypeSelected = true;
      } else {
        window.alert("You must select at least one character type.")
      }
    }
  
    // These if statements determine the user choices and then append them to the blank array.
    if (lowerCase) {
      selectedArray = selectedArray.concat(lowerCaseSet);
    }
    if (upperCase) {
      selectedArray = selectedArray.concat(upperCaseSet);
    }
    if (numericCharacters) {
      selectedArray = selectedArray.concat(numSet);
    }
    if (specialCharacters) {
      selectedArray = selectedArray.concat(specialSet);
    }
  
    var passwordString = "";
    // This loop will take the appended array, randomly select elements from it, then append the selections to a string, generating the password.
    for (var i = 0; i < passwordLength; i++) {
      passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
    }
  
    return passwordString;
  }
  
  function getPasswordLength() {
    var userChoice = 0;
    while ((userChoice < 8) || (userChoice > 128)) {
      userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
  
      if (isNaN(userChoice)) {
        // This will reset the choice value to 0 so it can restart the loop if the user entered anything besides a number.
        userChoice = 0;
      }
    }
  
    return userChoice;
  }
  
  function getChoice(currentOption) {
    var userChoice = "a",
      messagePrompt = "";
    var messagePrompt = ('Would you like '.concat(currentOption));
    messagePrompt = messagePrompt.concat(' characters (y/n)?');
    // This loop ensures the user enters a valid response.
    while (userChoice = "a") {
      userChoice = (window.prompt(messagePrompt));
      userChoice = userChoice.toLowerCase();
      if (userChoice == "y") {
        return true;
      } else if (userChoice == "n") {
        return false;
      }
    }
  }
  

  var generateBtn = document.querySelector("#generate");
  
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
 
  generateBtn.addEventListener("click", writePassword);