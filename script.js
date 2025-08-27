let humanScore = 0;
let computerScore = 0;


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

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice().toLocaleLowerCase(); // Store computerChoice
    humanChoice = getHumanChoice().toLocaleLowerCase(); // Store humanChoice and make it case insensitive
   
    // Console.log(computerChoice + " computer"); // This is just a test
    // Console.log(humanChoice + " human"); // This is also a test
    
    // Game randomness condition
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!");
        computerScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore ++;
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    } else {
        console.log("Draw!");
    }   
}