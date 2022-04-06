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
               runGame(gameType);
           }
        });
    }
    runGame('addition');
});
/**
 * Main game "loop" run when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType){
    // Generate 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === 'addition') {
        displayAdditionQuestion(num1,num2);
    } else {
        alert(`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gameType}.abort game`;
    }
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(opperand1,opperand2){
    document.getElementById('operand1').textContent = opperand1;
    document.getElementById('operand2').textContent = opperand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}
