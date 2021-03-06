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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove = move||getInput();
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var computerMove = move||randomPlay();
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
        if ((playerMove==='paper')&&(computerMove==='rock')
        ||(playerMove==='rock')&&(computerMove==='scissors')
        ||(playerMove==='scissors')&&(computerMove==='paper')) {
            return 'playerWins';
        }
        else if (playerMove===computerMove) {
            return 'tie';
        }
        else {
            return 'computerWins';
        }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while ((playerWins<5)&&(computerWins<5)) {
        if (getWinner(getPlayerMove(), getComputerMove())==='playerWins') {
            playerWins +=1;
            console.log ('Congratulations on winning the round. Only '+(5-playerWins)+' more rounds to win!';

        }
        else if (getWinner(getPlayerMove(), getComputerMove())==='computerWins') {
            computerWins+=1;
            console.log ('A lost round, sadly');
        }
        else if (getWinner(getPlayerMove(), getComputerMove())==='tie') {
            console.log ('Well that was a tie, but never fear for you can trie again.');
        }
    }
        if (playerWins===5) {
            console.log ('Congratulations on Winning!');
        }
        else if (computerWins===5) {
            console.log ('Sorry to see it, but better luck next time.');
        }
        else {
            console.log ('the game has broken');
        }
    return [playerWins, computerWins];
}