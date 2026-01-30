let humanScore = 0;
let computerScore = 0;
let numberRound = 0;
const choices = ["rock","paper","scissors"];
// Computer choice
function getComputerChoice(n) {
    n = Math.floor(Math.random()*3);
    return n;
}
// Win, loss, draw
function win() {
    humanScore++;
}
function loss() {
    computerScore++;
}
function draw() {
    computerScore = computerScore;
    humanScore = humanScore;
}
// choices output
function displayChoices(h, c) {
    const display = document.querySelector("#display");
    const choices = document.createElement("div");
    choices.setAttribute("style", "white-space: pre;");
    choices.textContent = "Your choice: " + h + "\r\n" + "Computer Choice: " + c;
    display.appendChild(choices);
}
// result output
function endRound() {
    const display = document.querySelector("#display"); // Selects div
    const wrapper = document.createElement("div");
    const round = document.createElement("div");
    const score = document.createElement("p");    
    // style classes
    display.classList.add("display");
    wrapper.classList.add("wrapper");
    round.classList.add("round");

    score.setAttribute("style", "white-space: pre;");
    round.textContent = "Round number " + numberRound;
    score.textContent = "You: " + humanScore + "\r\n" + "Computer: " + computerScore;

    display.removeChild(display.lastChild);
    wrapper.appendChild(round);
    wrapper.appendChild(score);
    display.appendChild(wrapper);
    
}
function whoWon() {
    if (humanScore === 5) {
        alert("you won!");
    } else if (computerScore === 5) { // delete this shitty function
        alert("you lost...");
    }
}
// Main function
function playRound(h) {
    numberRound++;
    // Think of a way to reinitialize score after winner
    console.log("c: " + computerScore + "h: " + humanScore); // this is a test
    if (humanScore === 5) {
        alert("you won!"); // change for won function after creating it above
    } else if(computerScore === 5) {
        alert("you lost..."); // change for lost function after creating it above
    }
    let c = getComputerChoice();
    // Add a function that shows choices
    if ((c === 0) && (h === 2)) {
        displayChoices(h,c);
        return loss();
    }
    if ((h === 0) && (c === 2)) {
        displayChoices(h,c);
        return win();
    }
    if(h === c) {
        displayChoices(h,c);
        return draw();
    } else if (h < c) {
        displayChoices(h,c);
        return loss();
    } else if (h > c) {
        displayChoices(h,c);
        return win();
    }
}
const btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.onclick = () => {
        const display = document.querySelector("#display");
        display.replaceChildren();
        return playRound(parseInt(btn.id));
   }
});

// Find a way to simplify by moving variables to beginning