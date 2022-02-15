//Objects with possible outcomes
const outcomes = {
    Rock: { weakTo: "Paper", strongAgainst: "Scissors" },
    Paper: { weakTo: "Scissors", strongAgainst: "Rock" },
    Scissors: { weakTo: "Rock", strongAgainst: "Paper" }
};

//Array with possible choices
const choices = ["Rock", "Paper", "Scissors"];

//Random choice for the computer
const computerSelection = choices[Math.floor(Math.random() * choices.length)];

//Get user input and applies uppercase to the word
const userInput = prompt("Pick rock, paper or scissors: ");
const playerSelection = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

//Function that playes one match and gives the result.
function playMatch(playerSelection, computerSelection) {
    if (playerSelection !== "Rock" && playerSelection !== "Paper" &&
        playerSelection !== "Scissors") {
        return "Invalid input. Choose ONLY from ROCK, PAPER, or SCISSORS!"
    } else if (outcomes[playerSelection].weakTo === computerSelection) {
        return "The computer wins!"
    } else if (outcomes[playerSelection].strongAgainst === computerSelection) {
        return "You win, asshole."
    } else {
        return "It's a tie!"
    }
}

//debug line
console.log(playerSelection)
console.log(computerSelection)

console.log(playMatch(playerSelection, computerSelection));

//playMatch(playerSelection, computerSelection);

//Continue from here tomorrow
function game() {
    playMatch()
}