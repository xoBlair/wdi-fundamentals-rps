////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


/*this function gets and returns the players move*/
function getPlayerMove(move) {
    if (move === true) {

    }
    else {
        move = getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}
/*this function gets and returns the computers move*/
function getComputerMove(move) {
    if (move === true) {

    }
    else {
        move = randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}
/*This function tracks and compares both player and computer input to return the winner */
function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if ((playerMove === 'rock' && computerMove === 'paper'))
        || (playerMove === 'paper' && computerMove === 'scissors')
        || (playerMove === 'scissors' && computerMove === 'rock'))
        winner = 'computer';
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors')
        || (playerMove === 'paper' && computerMove === 'rock')
        || (playerMove === 'scissors' && computerMove === 'paper')) {
    winner = 'player';
    } 
    else if (playerMove === computerMove) {
        winner = 'tie';
    }
    console.log("You chose " + playerMove + " and your opponent chose " + computerMove + " so the winner is ")
    return winner;
}
/*This function should allow the game to continue until either player or computer have won 5 times*/
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    return [playerWins, computerWins];
}

