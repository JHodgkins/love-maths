// Wait for the DOM to loadd before running the game

// add event listeners to each of the buttons
document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
           if (this.getAttribute('data-type') === 'submit') {
               alert('you pressed submit');
           }else {
               let gameType = this.getAttribute('data-type');
               alert(`You selected ${gameType}`);
           }
        });
    }
});
/**
 * Main game "loop" run when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(){
    // Generate 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}
