let humanScore = 0;
let computerScore = 0;
let numberRound = 1;
const choices = ["rock","paper","scissors"]

// Computer choice
function getComputerChoice(n) {
    n = Math.floor(Math.random()*3);
    return choices[n];
}



// Round function
function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice;
    if (humanChoice === computerChoice) {
        alert("Draw!");
    }
        else if (humanChoice) {

    } 
}

// Use arrays. Use fake negative index by saying if i[0] -> len(arr)

// const btns = document.querySelectorAll('button')

// btns.forEach(btn => {
//    btn.onclick = () => {
//     alert(btn.id);
//     const computerSelection = getComputerChoice();
//     playRound(computerSelection, btn.id);
//     alert(computerSelection);
//    }
// });

