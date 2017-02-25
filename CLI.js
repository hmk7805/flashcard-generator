var BasicCard = require('./flashcard.js');
var ClozeCard = require('./clozecard.js');
var inquirer = require('inquirer');
//immdiately console Do you want to make a card? 
inquirer.prompt([
    {
        type: 'list',
        name: 'Start',
        message: "What Type of Card?",
        choices: ['Basic', 'Cloze Card']
    }
]).then(function(input){
    var commandArg = input.Start
    if (commandArg === 'Basic') { 
        //inquirer
        inquirer.prompt([
        //accept front 
        {
            type: 'input',
            name: 'BasicFront',
            message: 'Please enter the front of the card'
        },
        //accept back
        {
            type: 'input',
            name: 'BasicBack',
            message: 'Please enter the back of the card'
        }
        ]).then(function(input){
            //store front and back and pass through as the parameters on BasicCard(front, back);
            var front = input.BasicFront;
            var back = input.BasicBack;
            //callback to the constructor for flashcard.js
            new BasicCard(front, back).saveCard();
            //store card as an object in a file 
        });
    } else if (commandArg === 'Cloze Card'){
        inquirer.prompt([
        //accept cloze deletion 
        {
            type: 'input',
            name: 'Cloze',
            message: 'Please enter the Cloze Statement for this Card'
        },
        //accept full text
        {
            type: 'input',
            name: 'ClozeText',
            message: 'Please enter the full Answer for this Card'
        }
        ]).then(function(input){
            //store cloze and full text and pass through as the parameters on ClozeCard(cloze, text);
            var cloze = input.Cloze;
            var text = input.ClozeText;
            //callback to the constructor for clozecard.js
            new ClozeCard(text, cloze).clozeCheck();
            //store card as an object in a file 
        });      
    };  
});






