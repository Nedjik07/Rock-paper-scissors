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

function getHumanChoice() {
    return prompt("Choose your weapon!: "); // This use a prompt to ask user about their choice and returns the value
}

function playRound() {

}