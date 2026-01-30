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
// display choices function
function displayChoices(h, c) {
    // alert("you: " + h.toString() + "computer: " + c.toString());
    const display = document.querySelector("#display");
    const choices = document.createElement("div");
    choices.setAttribute("style", "white-space: pre;");
    choices.textContent = "Your choice: " + h + "\r\n" + "Computer Choice: " + c;
    display.removeChild(display.lastChild);
    display.appendChild(choices);
}
// function after a round
function endRound() {
    display.replaceChildren();
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
// Main function
function playRound(h) {
    numberRound++;
    let c = getComputerChoice();
    // Add a function that shows choices
    if ((c === 0) && (h === 2)) {
        loss();
        displayChoices(h,c);
    }
    if ((h === 0) && (c === 2)) {
        win();
        displayChoices(h,c);
    }
    if(h === c) {
        draw();
        displayChoices(h,c);
    } else if (h < c) {
        loss();
        displayChoices(h,c);
    } else if (h > c) {
        win();
        displayChoices(h,c);
    }
    // Add a loop that calls endRound 
    // function after someone reaches 5 points
}
const btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.onclick = () => {
        console.log("hello");
       playRound(parseInt(btn.id));
   }
});