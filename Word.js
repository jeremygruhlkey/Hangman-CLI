var Letter = require("./Letter");

// contains a constructor function, Word that takes in a new random word and 
// calls the Letter object to create and array of new objects representing
// the individual characters, in the random word
// also creates a string representing the current status of the word being guessed
// displaying either it's character or an underscore based on the Letter function
// and a function thakes a character as an argument and calls the checkGuess function
// in Letter for each Letter object