//Some global variables we'll need
let playerWins = 0;
let playerLosses = 0;
let numberTies = 0;
let invalidInputs = 0;
const maxMatches = 5;

//Possible outcomes
const outcomes = {
    Rock: { weakTo: "Paper", strongAgainst: "Scissors" },
    Paper: { weakTo: "Scissors", strongAgainst: "Rock" },
    Scissors: { weakTo: "Rock", strongAgainst: "Paper" },
    Messages: { win: "You win!", loss: "The computer wins!", tie: "It's a tie!", invalid: "Invalid input!" }
};

//Array with possible choices
const choices = ["Rock", "Paper", "Scissors"];

//Random choice for the computer
let computerSelection = choices[Math.floor(Math.random() * choices.length)];

//Get user input and applies uppercase to the word
let userInput = prompt("Pick rock, paper or scissors: ");
let playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
///ALL ABOVE WORKING FINE


//Function that plays one match and gives the result.
function playMatch(playerSelection, computerSelection) {
    if (playerSelection !== "Rock" && playerSelection !== "Paper" &&
        playerSelection !== "Scissors") {
        invalidInputs++;
        return outcomes.Messages.invalid;
    } else if (outcomes[playerSelection].weakTo === computerSelection) {
        playerLosses++;
        return outcomes.Messages.loss
    } else if (outcomes[playerSelection].strongAgainst === computerSelection) {
        playerWins++;
        return outcomes.Messages.win
    } else {
        numberTies++;
        return outcomes.Messages.tie
    }
}

function playGame() {
    for (let i = 0; i < maxMatches; i++) {
        computerSelection = choices[Math.floor(Math.random() * choices.length)];
        let userInput = prompt("Pick rock, paper or scissors: ");
        let playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
        playMatch(playerSelection, computerSelection);
    }

}

//Not working as intended; instead of getting me/pc to 5 wins it plays only five games total
//UPDATE: it wasn working at all, needs rework.
function gameOver() {


}

//Only triggering on the first set of inputs (debug)
console.log(`You played: ${playerSelection}`)
console.log(`The computer played: ${computerSelection}`)

playGame();

//Working just fine
console.log(`You won ${playerWins} time(s).
The computer won ${playerLosses} time(s). 
There was/were ${numberTies} tie(s).
There was/were ${invalidInputs} invalid input(s).`)