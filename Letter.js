// contains a Letter constructor function that builds objects for each letter 
// in the current word and holds values for its character, a "guessed" boolean,
// a function that displays an underscore, or the character depending on boolean,
// a function that checks the an inputted character (guess) and updates the 
// boolean value if needed
// will be required in and called by Word.js

function Letter(character) {
    this.character = character,
    this.beenGuessed = false,
    this.shown = "_"
    this.displayChar = function() {
        if (this.beenGuessed){
            this.shown = character;
        } 
    }
    this.checkGuess = function(guess) {
        if (guess === this.character){
            this.beenGuessed = true;
            console.log("CORRECT");
            this.displayChar();
        }else {
            console.log("INCORRECT");
            this.beenGuessed = false;
        }
    }
}

module.exports = {
    Letter: Letter
};

// const c = new Letter("c");
// const a = new Letter("a");
// const t = new Letter("t"); 

// console.log(c);
// c.displayChar();
// console.log(c.shown);
// c.checkGuess("c");
// console.log(c.beenGuessed);
// console.log(c.shown)