var Flash = require('./flashcard.js');
var Clozecard = require('./clozecard.js');
var inquirer = require('inquirer');
//immdiately console Do you want to make a card? 
inquirer.prompt([
    {
        type: 'list',
        name: 'Start',
        message: 'Create a Card?',
        choices: ['Yes', 'No']
    }
]).then(function(input){
    var commandArg = input.start
    if (commandArg === 'Yes') {
        inquirer.prompt([
            {
                type: 'list',
                name:'cardType',
                message: 'What type of flashcards do you want to create?',
                choices: ['Regular', 'ClozeCards']
            },
        ]).then(function(input2){
            if (input2.cardType === 'Regular'){
                //callback to the constructor for flashcard.js
                {
                type: 'list',
                name:'cardType',
                message: 'What type of flashcards do you want to play?',
                choices: ['Regular', 'ClozeCards']
            }
            }
            else {
                //callback to the constructor for clozecard.js
                var newCloze = new Clozecard ();
            }
        });
    }
})

//if answer yes
    //loop question array
        //ask first question
            //if input equals answer console 'Correct, the answer was: ${answer}
                //increase score variable
            //else console 'Incorrect, the answer was: ${answer};
        //ask next question...
    //Console.log(Score)
//else 
    //console.log K Bye.




