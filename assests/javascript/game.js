// Variable declaring letters that can be used
var allLetters = "abcdefghijklmnopqrstuvwxyz"
var letter = allLetters.split("");

// Variable declaring wins
var wins = 0;
// Variable declaring losses
var losses = 0;
// Variable declaring guesses a user has
var remainingGuesses = 10;
// Variable with array declaring letters already used
var usedLetters = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var guessedText = document.getElementById("guessed-text");
// To not disply the computers choice
// var computerChoiceText = document.getElementById("computerchoice-text");

// Generate computer random answer. Set a random letter to return as the computer guess. Console log the computer guess.
var computerGuess = letter[Math.floor(Math.random () * letter.length)]
// console.log(computerGuess);

//Make game fuction with keyup
document.onkeyup = function(event) {

// Determines which key was pressed by user.
var userChoice = event.key;
usedLetters.push(userChoice)

// If statement when user guesses computer random letter, Wins!!
if (userChoice === computerGuess){
// Increases the wins by 1
     wins++;
//  Resets the guesses to 10
    remainingGuesses = 10;
// Resets the letters previously guessed to 0, restarts the game
    usedLetters.length = 0;

// Resets the cuputer random letter
    computerGuess = letter[Math.floor(Math.random () * letter.length)];
}
 
// If user runs out of guesses
else if (remainingGuesses === 0){
// Loses increase after all guesses have been used
losses++;
//  Resets the guesses to 10
remainingGuesses = 10;
 // Resets the letters previously guessed to 0, restarts the game
 usedLetters.length = 0;
 // Resets the cuputer random letter
 computerGuess = letter[Math.floor(Math.random () * letter.length)]
}

// Decrease numbr of remaining guesses if user did not win or reach 0 remaining guesses
else {
    remainingGuesses--;
}

 // Display the user and computer guesses, and wins/losses.
 userChoiceText.textContent = "Guessed Letters: " + usedLetters;
 winsText.textContent = "Wins: " + wins;
 lossesText.textContent = "Losses: " + losses;
 guessedText.textContent = "Remaining Tries: " + remainingGuesses;
//  User can not view what letter computer chose
//  computerChoiceText.textContent = "The computer chose: " + computerGuess;
}
 


