"use strict";
/**
 * TODO: Make sure the type for total_rounds is correct => ints in javascript?
 * -  Finish helper function for custom winning message based on result.
 *    Can do like rock beats scissors, but for win or lose you append You Win! or Too Bad in front of helper's return value
 * -  write tests
 * - implement error checking, but may not need because future GUI will input the players choice by user clicking on image representing their pick.
 * Potential Additional Features:
 * -  Different messages for winning or losing.
 * -  Let user input desired rounds
 */
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
 * Plays a single round between player and computer.
 * @param  {String} playerSelection   player's choice
 * @param  {String} computerSelection computer's choice
 * @return {String}                   result of the round
 */
function playRound(playerSelection, computerSelection){
    let playerPick = playerSelection.toLowerCase();
    let message = "You chose: " + playerPick + ". The computer chose: " + computerSelection + ".\n";

    if (computerSelection in messages[playerPick]){ // player wins
        playerScore += 1;
        message += winningMessage(playerPick, computerSelection) + " " + "You Win!";
    } else if (playerPick == computerSelection){ // draw
        message += "Draw!";
    } else { //computer wins
        computerScore += 1;
        message += winningMessage(computerSelection, playerPick) + " " + "Better Luck Next Time!";
    }
    return message;
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

playerButtons.forEach((button => {
    button.addEventListener('click', () => {
        if (playerScore + computerScore <= 5){
            console.log(playRound(button.id, computerPlay()));
        }
        console.log(playerScore);
        console.log(computerScore);
    })
}))

