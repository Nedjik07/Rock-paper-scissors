let humanScore = 0;
let computerScore = 0;
let numberRound = 0;
const choices = ["rock","paper","scissors"];
// Computer choice
function getComputerChoice(n) {
    n = Math.floor(Math.random()*3);
    return n;
}
// Start
function play() {
   // Use div overlay here ?
}
function won() {
    const display = document.querySelector("#display");
    display.replaceChildren();

    const first = document.createElement("img");
    first.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJ40n2l1g3MJYX6B9IYs5J-mPrYGl0GXcDJxbyXUhYrHe9_QRH";
    first.classList.add("lostImg");
    display.appendChild(first);
    humanScore = 0;
    computerScore = 0;
}
function lost() {
    const display = document.querySelector("#display");
    display.replaceChildren();

    const first = document.createElement("img");
    first.src = "https://www.kindpng.com/picc/m/125-1254800_funny-face-drawing-meme-hd-png-download.png";
    first.classList.add("lostImg");
    display.appendChild(first);
    humanScore = 0;
    computerScore = 0;
}
// Win, loss, draw
function win() {
    humanScore++;
    score();
}
function loss() {
    computerScore++;
    score();
}
function draw() {
    computerScore = computerScore;
    humanScore = humanScore;
    score();
}
// choices output
function displayChoices(h, c) {
    const display = document.querySelector("#display");
    const displayChoices = document.createElement("div"); // Change the name to use it differently
    const humanChoice = document.createElement("div");
    const computerChoice = document.createElement("div");
    const fight = document.createElement("img");
    fight.src = "https://cdn-icons-png.flaticon.com/512/934/934478.png";
    humanChoice.textContent = choices[h];
    computerChoice.textContent = choices[c]; // Should return option;
    humanChoice.classList.add("item", "human");
    computerChoice.classList.add("item", "computer");
    displayChoices.classList.add("displayChoices"); // Change this too

    displayChoices.appendChild(humanChoice);
    displayChoices.appendChild(fight);
    displayChoices.appendChild(computerChoice);
    display.appendChild(displayChoices);

    // display.appendChild(humanChoice);
    // display.appendChild(fight);
    // display.appendChild(computerChoice);
}
function score() {
    const display = document.querySelector("#display");
    const scorePanel = document.createElement("div");
    const score = document.createElement("div");
    const human = document.createElement("div");
    const computer = document.createElement("div");
    score.setAttribute("style", "white-space: pre;");
    const h1 = document.createElement("h1");
    h1.textContent = "Score";

    human.textContent = humanScore;
    computer.textContent = computerScore;

    scorePanel.classList.add("scorePanel");
    human.classList.add("humanScore");
    computer.classList.add("computerScore");
    score.classList.add("score");

    scorePanel.appendChild(h1);
    score.appendChild(human);
    score.appendChild(computer);
    scorePanel.appendChild(score);
    display.appendChild(scorePanel);
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
// Main function
function playRound(h) {
    numberRound++;
    // Think of a way to reinitialize score after winner
    console.log("c: " + computerScore + "h: " + humanScore); // this is a test
    if (humanScore === 5) {
        return won(); // change for won function after creating it above
    } else if(computerScore === 5) {
        return lost(); // change for lost function after creating it above
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
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.onclick = () => {
        const display = document.querySelector("#display");
        display.replaceChildren();
        return playRound(parseInt(btn.id));
   }
});

// Find a way to simplify by moving variables to beginning