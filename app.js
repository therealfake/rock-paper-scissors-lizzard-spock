"use strict";
let playerScore = 0;
let computerScore = 0;

const playerButtons = document.querySelectorAll('button');

const messages = {
    "rock":{
        "lizzard": "Rock crushes lizzard.",
        "scissors": "Rock crushes scissors"
    },
    "paper":{
        "rock": "Paper covers rock.",
        "spock": "Paper disproves Spock."
    },
    "scissors":{
        "lizzard": "Scissors decapitates lizzard.",
        "paper": "Scissors cuts paper."
    },
    "lizzard":{
        "spock": "Lizzard poisons Spock.",
        "paper": "Lizzard eats paper."
    },
    "spock":{
        "scissors": "Spock smashes scissors.",
        "rock": "Spock vaporizes rock."
    }
};

/**
 * Randomly chooses a pick for the "computer".
 * @return {string}      computer's choice
 */
function computerPlay () {
    let pick = Math.floor((Math.random() * 5) + 1) - 1;
    const choices = ["rock", "paper", "scissors", "lizzard", "spock"];
    return choices[pick];
}

/**
 * Returns message based on the choices of the two players. 
 * @param  {String} winPick  winner's pick
 * @param  {String} losePick loser's pick
 * @return {String}          result message
 */
 function winningMessage (winPick, losePick){
    return messages[winPick][losePick];
}

/**
 * Plays a single round between player and computer.
 * @param  {String} playerSelection   player's choice
 * @return {String}                   result of the round
 */
function playRound(playerSelection) {
    let playerPick = playerSelection;
    let computerSelection = computerPlay();
    let message = "You chose: " + playerPick + ". The computer chose: " + computerSelection + ".<br> ";

    if (computerSelection in messages[playerPick]) { // player wins
        playerScore += 1;
        message += winningMessage(playerPick, computerSelection);
    } else if (playerPick == computerSelection) { // draw
        message += "Draw!";
    } else { //computer wins
        computerScore += 1;
        message += winningMessage(computerSelection, playerPick);
    }
    return message;
}

/**
 * Plays the game between player and computer. Handles specific message depending on score in the the game.
 * @param  {String} playerSelection   player's choice
 * @return {String}                   result of current stage in the game
 */
function game(playerSelection) {
    let resultMessage = document.getElementById('result-message');
    let resultScore = document.getElementById('result-score');
    let leadScore = Math.max(playerScore, computerScore);

    if (leadScore <= 4){
        resultMessage.innerHTML = playRound(playerSelection) + "<br>";
        resultScore.innerHTML = "You: " + playerScore + " Computer: " + computerScore;
        if (computerScore == 5) {
            resultMessage.innerHTML += "Computer Wins Muahuahuahua";
        } else if (playerScore == 5) {
            resultMessage.innerHTML += "You beat the computer! Congrats!";
        }
    }
}

/**
 * Reset's the game score and messages
 */
function reset() {
    let resultMessage = document.getElementById('result-message');
    let resultScore = document.getElementById('result-score');

    playerScore = 0;
    computerScore = 0;
    resultScore.innerHTML = "You: 0 Computer: 0";    
    resultMessage.innerHTML = "Make Your Choice! (First to 5)";
}

playerButtons.forEach(button => {
    if (button.id != "reset-btn"){
        button.addEventListener('click', () => {game(button.id)});  
    } else {
        button.addEventListener('click', reset); 
    }
    
})

