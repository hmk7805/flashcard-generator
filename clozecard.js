// * Create a `ClozeFlashard` constructor. It should accept `text` and `cloze` arguments.
var ClozeFlashcard = function(text, cloze) {
    //text is full answer
    this.text = text;
    //close is deleted portion
    this.cloze = cloze;
};
ClozeFlashcard.prototype.saveCard = function() {
    fs.appendFile('flashcards.txt', JSON.stringify(this), function(err){
        if (err) {
            console.log(err);
        };
        console.log('Card was appended to flashcards.txt');
    });
};
ClozeFlashcard.prototype.showPartial = function() {
    var full = this.text;
    var partial = full.replace(this.cloze, "<Fill in the Blank>")
    console.log(partial);
};

//     * `ClozeFlashcard` should have a method that returns *only* the cloze-deleted portion of the text.
//     * You are free to experiment with the other details of your implementation, but you must store at least one property, and equip cloze-deleted flashcards with at least one additional method.


module.exports = ClozeFlashcard;