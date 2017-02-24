var fs = require('fs');
// * Create a `ClozeFlashard` constructor. It should accept `text` and `cloze` arguments.
var ClozeFlashcard = function(text, cloze) {
    //text is full answer
    this.text = text;
    //close is deleted portion
    this.cloze = cloze;
};
// Need to add a function to check if the cloze is found in the text and if it isn't the throw an error

//  * `ClozeFlashcard` should have a method that returns *only* the cloze-deleted portion of the text.
ClozeFlashcard.prototype.showPartial = function() {
    var full = this.text;
    var partial = full.replace(this.cloze, "<Fill in the Blank>")
    console.log(partial);
};
ClozeFlashcard.prototype.saveCard = function() {
    fs.appendFile('flashcards.txt', JSON.stringify(this), function(err){
        if (err) {
            console.log(err);
        };
        console.log('Card was appended to flashcards.txt');
    });
};
module.exports = ClozeFlashcard;