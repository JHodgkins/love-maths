// Wait for the DOM to loadd before running the game

// add event listeners to each of the buttons
document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
           if (this.getAttribute('data-type') === 'submit') {
               checkAnswer();
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
    }else if (gameType === 'subtract') {
        displaySubtractQuestion(num1,num2);
    }else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1,num2);
    }else if(gameType === 'division') {
        displayDivisionQuestion(num1,num2);
    } else {
        alert(`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gameType}.abort game`;
    }
}
/**
 * Checks if the answer against the first element in the returned calculateCorrectAnswer
 * array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert ("Well Document, You got the answer correct! :D");
        incrementScore();
    } else {
        alert (`Snaps, Thant's incorrect, You answered ${userAnswer}. - The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Get the operands (numbers) and the operator (plus, minus, multiply, division)
 * from the Dom directly to return the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    }else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    }else if(operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert("Unimplimented operator: ${operator}");
        throw `Unimplimented operator: ${operator}.aborting`;
    }
}
/**
 * Get the current score from the Dom and increment it
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}
/**
 * Get the current score tally of incorrect answersfrom the Dom and increment when necessary
 */
function incrementWrongAnswer(){
    let oldIncorrectScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldIncorrectScore;
}

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '/';
}
