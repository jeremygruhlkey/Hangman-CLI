var Letter = require("./Letter");

// contains a constructor function, Word that takes in a new random word and 
// calls the Letter object to create an array of new objects representing
// the individual characters, in the random word
// also creates a string representing the current status of the word being guessed
// displaying either it's character or an underscore based on the Letter function
// and a function that takes a character as an argument and calls the checkGuess function
// in Letter for each Letter object

function Word(currentWord){
    this.currentWord = currentWord,
    this.wordArray = currentWord.split("")
    this.letterArray = [];
    this.buildLetters = function(){
        for (var i = 0; i < this.wordArray.length; i++){
            var character = this.wordArray[i];
            // console.log(character);
            var newLetter = new Letter.Letter(character);
            this.letterArray.push(newLetter)
        }
    }
    this.wordDisplayString = function(){
        var string = "";
        for (i = 0; i < this.letterArray.length; i++){
            string = string + this.letterArray[i].shown
        }
        console.log(string);
    }
    this.guessMade =function(guess){
        for (var i = 0; i< this.letterArray.length; i++) {
            this.letterArray[i].checkGuess(guess);
        }
        this.wordDisplayString();
    }
}

var currentWord = new Word("cat");
var guess = "t";

currentWord.buildLetters();
// console.log(currentWord.letterArray);
// currentWord.letterArray[2].checkGuess(guess);
currentWord.guessMade(guess);
// console.log(currentWord.letterArray);
// console.log(currentWord.letterArray[0].shown + " " + currentWord.letterArray[1].shown + " " + currentWord.letterArray[2].shown); 


