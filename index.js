// All game flow controls
// calls on the Words constructor, and inquirer

var inquirer = require("inquirer");
var randomWords = require("random-words")

var Word = require("./Word");

var lettersLeft;
var guessesRemaining;


// var currentWord = "";

function gameStart(){

    var random = randomWords({ exactly: 1, maxLength:10});
    var randomWord = random[0];

    var currentWord = new Word.Word(randomWord);
    // console.log(currentWord);
    currentWord.buildLetters();
    lettersLeft = currentWord.letterArray.length;
    guessesRemaining = 8;
    currentWord.wordDisplayString();

   
    // console.log(currentWord.letterArray);
    playGame(currentWord);
    
}

function playGame(currentWord) {
    if (guessesRemaining > 0 && !currentWord.complete){
        console.log(guessesRemaining + " guesses Remaining");
        console.log("");
        inquirer.prompt({
            name: "guess",
            message: "Guess a letter!"
        }).then(function(letter){
            var guess = letter.guess;
            currentWord.guessMade(guess);
            guessesRemaining--;
            playGame(currentWord);
        })
    }else {
        if (guessesRemaining > 0) {
            console.log("YOU GOT IT!! NEXT WORD!")
        }else{
            console.log("HA HA!! YOU LOOSE! TRY AGAIN")
        }
        gameStart();
    }
    
}
gameStart();