/**
 * #TODO: Make sure the type for total_rounds is correct => ints in javascript?
 * # Finish helper function for custom winning message based on result.
 *   Can do like rock beats scissors, but for win or lose you append You Win! or Too Bad in front of helper's return value
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
    var strengths = {
        "rock": ["lizzard", "scissors"],
        "paper": ["rock", "spock"],
        "scissors": ["lizzard", "paper"],
        "lizzard": ["spock", "paper"],
        "spock": ["scissors", "rock"]
    };
    let playerPick = playerSelection.toLowerCase();
    if (strengths[playerPick].includes(computerSelection)){
        return "You Win!";
    } else if (playerPick == computerSelection){
        return "Draw!";
    } else {
        return "Better Luck Next Time!";
    }
}

/**
 * Returns message based on the choices of the two players. 
 * @param  {String} player1Pick player 1's pick
 * @param  {String} player2Pick player 2's pick
 * @return {String}             result message
 */
function winningMessage (player1Pick, player2Pick){

}

/**
 * Plays total_rounds rounds between player and computer. 
 * @param  {Number} total_rounds number of rounds playable
 * @return {String}              result of the each round
 */

function game(total_rounds) {
    for (let i = 0; i < total_rounds; i++) {
        let playerPick = prompt("What do you pick?"); //Take care of when it's null
        playRound(playerPick,computerPlay());
    }
}
game();