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

function runGame(){

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

