//set variables for character password choices
var lowerC = 'abcdefghijklmnopqrstuvwxyz';
var upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numC = '0123456789';
var specialC = '~!@#$%^&*()_+=';

var button = document.getElementById("generate");

//object to save user choices
var userChoices = {};

//prompt the user for character length
var charLength = parseInt(prompt("Please type in a number between 8 and 128."));

//userChoice["charLength"] = charLength; 
console.log(charLength)

//get user input
function promptUser() {
  var numChar = confirm("Would you like numbers?");
  var lowerChar = confirm("Would you like lowercase characters?");
  var upperChar = confirm("Would you like uppercase characters?");
  var specialChar = confirm("Would you like special characters?");

// saving user's answer when prompted question
  if (numChar) {
    userChoices["numC"] = numC;
  }
  if (lowerChar) {
    userChoices["lowerC"] = lowerC;
  }  
  if (upperChar) {
    userChoices["upperC"] = upperC;
  }
  if (specialChar) {
    userChoices["specialC"] = specialC;
  }
  
  console.log(userChoices);
}

//call prompt function
promptUser();

function makePassword() {
  let finalPassword = '';
  for (var i = 0; i < charLength; i++) { // password length > 0 {

    let passwordCs = Object.keys(userChoices)
    let randomC = passwordCs[Math.floor(Math.random() * passwordCs.length)]
    let char = getRandomCharacter(userChoices[randomC]);

    finalPassword += char;

    console.log('RandomCharacter', char);
    console.log(finalPassword, finalPassword.length);
    console.log('****************', charLength)

  } 
  return finalPassword
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)]
}

makePassword();

button.addEventListener("click", function(){
  password.innerHTML = makePassword();
})

const myInp = document.getElementById("password");
const btnCopy = document.getElementById("copy");

btnCopy.onclick = function(){
  myInp.select();
  document.execCommand("Copy");
}
