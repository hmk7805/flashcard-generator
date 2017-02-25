var fs = require('fs');
// * Create a `ClozeFlashard` constructor. It should accept `text` and `cloze` arguments.
var ClozeFlashcard = function(text, cloze) {
    //text is full answer
    this.text = text;
    //close is deleted portion
    this.cloze = cloze;
};
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
ClozeFlashcard.prototype.clozeCheck = function() {
    var check = this.text.search(this.cloze);
    if (check !== -1) 
    {
        this.saveCard();
        this.showPartial();
    }else{
    console.log("That cloze statement wasn't found in the Cards full text. Try again.");
    }
}
module.exports = ClozeFlashcard;