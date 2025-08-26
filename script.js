let humanScore, computerScore = 0;


function getComputerChoice(n) {
    // Choose a number between 0, 1, 2 with Math.floor and Math.random
    // Use a condition to return between Rock, Paper, or Scissors
    n = Math.floor(Math.random() * 3); // Simplified
    if (n === 0) {
        return "Rock";
    } else if (n === 1) {
        return "Paper";
    } else if (n === 2) {
        return "Scissors";
    }
}
alert(getComputerChoice());

function getHumanChoice() {
    return prompt("Choose your weapon!: "); // This use a prompt to ask user about their choice and returns the value
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice(); // Store computerChoice
    humanChoice = getHumanChoice().toLocaleLowerCase(); // Store humanChoice and make it case insensitive
    if ((humanChoice === "rock") && (computerChoice == "Scissors")) {
        console.log("You win! Rock beats Scissors");
    } else if ((humanChoice === "rock") && (computerChoice === "Paper")) {
        console.log("You lose! Paper beats Rock!");
    } else if ((humanChoice === "rock") && (computerChoice === "Rock")) {
        console.log("Draw!");
    } else if ((humanChoice === "paper") && (computerChoice === "Rock")) {
        console.log("You win! Paper beats Rock!");
    } else if ((humanChoice === "paper") && (computerChoice === "Scissors")) {
        console.log("You lose! Scissors beats Paper!");
    } else if ((humanChoice === "paper") && (computerChoice === "Paper")) {
        console.log("Draw!");
    } else if ((humanChoice === "scissors") && (computerChoice === "Paper")) {
        console.log("You win! Scissors beats Paper");
    } else if ((humanChoice === "scissors") && (computerChoice === "Rock")) {
        console.log("You lose! Rock beats Scissors!");
    } else ((humanChoice === "scissors") && (computerChoice === "Scissors")) // works
        console.log("Draw!");
}
playRound();