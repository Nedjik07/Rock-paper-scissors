let humanScore = 0;
let computerScore = 0;
let numberRound = 1;


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
    return prompt("Choose your weapon!"); // This use a prompt to ask user about their choice and returns the value
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice().toLocaleLowerCase(); // Store computerChoice
    humanChoice = getHumanChoice().toLocaleLowerCase(); // Store humanChoice and make it case insensitive
   
    // Console.log(computerChoice + " computer"); // This is just a test
    // Console.log(humanChoice + " human"); // This is also a test
    
    // Game randomness condition
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore ++;
        alert("Round number " +numberRound + '\n' + '\n' + "You win! Rock beats Scissors" + '\n' + '\n' + "Your score: " + humanScore + '\n' + "Computer score: " + computerScore); // Show score
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore ++;
        alert("Round number " +numberRound + '\n' + '\n' + "You lose! Paper beats Rock!" + '\n' + '\n' + "Your score: " + humanScore + '\n' + "Computer score: " + computerScore); // Show score
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore ++;
        alert("Round number " +numberRound + '\n' + '\n' + "You win! Paper beats Rock!" + '\n' + '\n' + "Your score: " + humanScore + '\n' + "Computer score: " + computerScore); // Show score
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore ++;
        alert("Round number " +numberRound + '\n' + '\n' + "You lose! Scissors beats Paper!" + '\n' + '\n' + "Your score: " + humanScore + '\n' + "Computer score: " + computerScore); // Show score
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore ++;
        alert("Round number " +numberRound + '\n' + '\n' + "You win! Scissors beats Paper" + '\n' + '\n' + "Your score: " + humanScore + '\n' + "Computer score: " + computerScore); // Show score
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore ++;
        alert("Round number " +numberRound + '\n' + '\n' + "You lose! Rock beats Scissors!" + '\n' + '\n' + "Your score: " + humanScore + '\n' + "Computer score: " + computerScore); // Show score
    } else {
        alert("Round number " +numberRound + '\n' + '\n' + "Draw!" + '\n' +"Your score: " + humanScore + '\n' + "Computer score: " + computerScore);
    }   
    numberRound ++;
}

function playGame() {
    for (i = 0; i < 5; i++) {
        playRound();
        // alert("Your score: " + humanScore + '\n' + "Computer score: " + computerScore); // Show score
    }
}