// * Create a `ClozeFlashard` constructor. It should accept `text` and `cloze` arguments.
var ClozeFlashcard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
};
//text is the fully answered 
//     * `ClozeFlashcard` should have a method that returns *only* the cloze-deleted portion of the text.
//     * You are free to experiment with the other details of your implementation, but you must store at least one property, and equip cloze-deleted flashcards with at least one additional method.


module.exports = ClozeFlashcard;