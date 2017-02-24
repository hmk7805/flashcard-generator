var fs = require('fs');
// * Create a `BasicFlashcard` constructor. It should accept `front` and `back` arguments.
var BasicFlashcard = function(front, back){
    this.front = front;
    this.back = back;
};
//     * Your application should provide a way for users to save any flashcards they might create to a text file.
BasicFlashcard.prototype.saveCard = function() {
    fs.appendFile('flashcards.txt', JSON.stringify(this), function(err){
        if (err) {
            console.log(err);
        };
        console.log('Card was appended to flashcards.txt');
    });
};
module.exports = BasicFlashcard;



