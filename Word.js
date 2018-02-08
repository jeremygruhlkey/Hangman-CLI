var Letter = require("./Letter");

function Word(currentWord){
    this.currentWord = currentWord,
    this.wordArray = currentWord.split("")
    this.letterArray = [];
    this.complete = false;
    this.buildLetters = function(){
        for (var i = 0; i < this.wordArray.length; i++){
            var character = this.wordArray[i];
            var newLetter = new Letter.Letter(character);
            this.letterArray.push(newLetter)
        }
    }
    this.wordDisplayString = function(){
        var string = "";
        for (i = 0; i < this.letterArray.length; i++){
            string = string + this.letterArray[i].shown + " ";
        }
        if (string.indexOf("_") < 0){
            this.complete = true;
        }
        console.log("");
        console.log(string);
        console.log("");
    }
    this.guessMade =function(guess){
        for (var i = 0; i< this.letterArray.length; i++) {
            this.letterArray[i].checkGuess(guess);
        }
        this.wordDisplayString();
    }
}

module.exports = {
    Word: Word
};