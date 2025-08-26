function getComputerChoice() {
    // Choose a number between 0, 1, 2 with Math.floor and Math.random
    // Use a condition to return between Rock, Paper, or Scissors

    let computerChoice = Math.floor(Math.random() * 3); // Simplified

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) {
        return "Scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon!: ");
    return humanChoice;
}
console.log(getHumanChoice());
