
// Assignment Code <button id="generate" class="btn">Generate Password</button>
var generateBtn = document.querySelector("#generate");

// enables the generate button to run the function btnClicked
generateBtn.addEventListener("click", btnClicked);

// when the generate btn is clicked a series of prompt should pop up
function btnClicked(){
  
    var lgthOfPswd = prompt("How long would you like your password to  be? You can choose between 8-128 characters.");
    // console.log(lgthOfPswd)
    
    var symbols = prompt("Would you like to include special characters? i.e... ! @ # $ % ^ & * ( ) _ - ? / \ { } [ ] + - * /.... (Yes or No?)");
    console.log(symbols)
    
    var inclLowerCase = prompt("Would you like to include Lower case letters? (Yes or No)");
    console.log(inclLowerCase)
    
    var inclUpperCase = prompt("Would you like to include Upper case letters? (Yes or No)");
    console.log(inclUpperCase)
    
    var inclNumbers = prompt("Would you like to include Numerals 0-9? (Yes or No)");
    console.log(inclNumbers)
} 
  



// captures the users input

// need to use JS to add the onClick event to button id class


// code that creates the function 'generatePassword
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log (getRandomNumber())

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}
console.log (getRandomLowerCase())

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}
console.log(getRandomUpperCase())

function getRandomSymbols() {
  var symbols = "!@#$%^&*()_-?/\{}[]+-*/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbols())

//  function generate password
function generatePassword() {

}


// Write password to the #password input
function writePassword() {
  
  // var password = generatePassword();
  
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// app should prompt user with options for setting criteria for a password to be generated.
//  prompt for criteria to include in the password
// 1st choose a length of at least 8 characters and no more than 128 characters
// 2rd confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// 3rd password is displayed in an alert or written to the page