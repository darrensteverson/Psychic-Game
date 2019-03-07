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
// variable for computer random letter
var computerGuess = computerGuess;

// create variables to hold the references

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");



// Generate computer random answer. Set a random letter to return as the computer guess. Console log the computer guess.
computerGuess = letter[Math.floor(Math.random () * letter.length)]
console.log(computerGuess);

//Make game fuction with keyup
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;



// in win if statement reset numbers guessed array to 0, also guess count

// If win , wins go up win++

// Guess count -- , last thing in if statement




 // Display the user and computer guesses, and wins/losses/ties.
 userChoiceText.textContent = "You chose: " + userGuess;
 computerChoiceText.textContent = "The computer chose: " + computerGuess;
 winsText.textContent = "wins: " + wins;
 lossesText.textContent = "losses: " + losses;
 tiesText.textContent = "ties: " + ties;
}

}