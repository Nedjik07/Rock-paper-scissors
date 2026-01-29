let humanScore = 0;
let computerScore = 0;
let numberRound = 1;

// Computer choice
function getComputerChoice(n) {
    // Choose a number between 0, 1, 2 with Math.floor and Math.random
    // Use a condition to return between Rock, Paper, or Scissors
    n = Math.floor(Math.random() * 3); // Simplified
    if (n === 0) {
        return "rock";
    } else if (n === 1) {
        return "paper";
    } else if (n === 2) {
        return "scissors";
    }
}

// Play function
function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice().toLocaleLowerCase(); // Store computerChoice
}


const btns = document.querySelectorAll('button')

btns.forEach(btn => {
   btn.onclick = () => {
    alert(btn.id);
    
    
    const computerSelection = getComputerChoice();
    playRound(computerSelection, btn.id);
    alert(computerSelection);
   }
});