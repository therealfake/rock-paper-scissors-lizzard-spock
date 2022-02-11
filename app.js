/**
 * TODO: Make sure the type for total_rounds is correct => ints in javascript?
 * - Also look into when I should be using var, let, and const
 * -  Finish helper function for custom winning message based on result.
 *   Can do like rock beats scissors, but for win or lose you append You Win! or Too Bad in front of helper's return value
 * -  write tests
 * - implement error checking, but doesn't have to be too extensive because future GUI will input the players choice
 * Potential Additional Features:
 * -  Different messages for winning or losing.
 */

/**
 * Randomly chooses a pick for the "computer".
 * @return {string}      computer's choice
 */
function computerPlay () {
    var pick = Math.floor((Math.random() * 5) + 1) - 1;
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
    var strengths = {
        "rock": ["lizzard", "scissors"],
        "paper": ["rock", "spock"],
        "scissors": ["lizzard", "paper"],
        "lizzard": ["spock", "paper"],
        "spock": ["scissors", "rock"]
    };
    let playerPick = playerSelection.toLowerCase();
    console.log(playerPick);
    console.log(computerSelection);
    var message = "You chose: " + playerPick + ". The computer chose: " + computerSelection + ".\n";
    if (strengths[playerPick].includes(computerSelection)){
        message += winningMessage(playerPick, computerSelection) + " " + "You Win!";
    } else if (playerPick == computerSelection){
        message += "Draw!";
    } else {
        message += winningMessage(computerSelection, playerPick) + " " + "Better Luck Next Time!";
    }
    return message;
}

/**
 * Returns message based on the choices of the two players. 
 * @param  {String} player1Pick player 1's pick
 * @param  {String} player2Pick player 2's pick
 * @return {String}             result message
 */
function winningMessage (winPick, losePick){
    /*
    rock:
    - crushes lizard
    - crushes scissors
    paper:
    - covers rock
    - disproves spock
    scissors: 
    - decapitates lizard
    - cuts paper
    lizard:
    - poisons spock
    - eats paper
    spock:
    - smashes scissors
    - vaporizes rock
    */
    var messages = {
        "rock":{
            "lizzard": "Rock crushes lizzard.",
            "scissor": "Rock crushes scissors"
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
    return messages[winPick][losePick];
}

/**
 * Plays total_rounds rounds between player and computer. 
 * @param  {Number} total_rounds number of rounds playable
 * @return {String}              result of the each round
 */

function game(total_rounds) {
    for (let i = 0; i < total_rounds; i++) {
        let playerPick = prompt("What do you pick?"); //Take care of when it's null
        console.log(playRound(playerPick,computerPlay()));
    }
}
//let playerGames = prompt("How many rounds do you want to play?");
//game (playerGames);
game(5);