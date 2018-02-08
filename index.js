// All game flow controls
// calls on the Words constructor, and inquirer

var inquirer = require("inquirer");
var randomWords = require("random-words")

var Word = require("./Word");

function gameStart(){

    var random = randomWords({ exactly: 1, min:4, max:10});
    var randomWord = random[0];

    var currentWord = new Word.Word(randomWord);
    // console.log(currentWord);
    currentWord.buildLetters();
    // console.log(currentWord.letterArray);
    
}
gameStart();