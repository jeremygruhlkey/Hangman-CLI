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
            this.displayChar();
        }else {
            this.beenGuessed = false;
        }
    }
}

module.exports = {
    Letter: Letter
};