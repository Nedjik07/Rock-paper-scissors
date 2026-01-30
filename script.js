let humanScore = 0;
let computerScore = 0;
let numberRound = 0;
const choices = ["rock","paper","scissors"];

// Computer choice
function getComputerChoice(n) {
    n = Math.floor(Math.random()*3);
    return n;
}

function win() {
    humanScore++;
}
function lose() {
    computerScore++;
}

function endRound() {
    const container = document.querySelector("div"); // Selects div
    const wrapper = document.createElement("div");
    const round = document.createElement("div");
    const score = document.createElement("p");

    score.setAttribute("style", "white-space: pre;");
    
    // style classes
    container.classList.add("container");
    wrapper.classList.add("wrapper");
    round.classList.add("round");


    round.textContent = "Round number " + numberRound;
    score.textContent = "You: " + humanScore + "\r\n" + "Computer: " + computerScore;


    container.removeChild(container.lastChild);
    wrapper.appendChild(round);
    wrapper.appendChild(score);
    container.appendChild(wrapper);
    
}

// Main function
function playRound(h) {
    numberRound++;
    let c = getComputerChoice();
    if ((c === 0) && (h === 2)) {
        alert("loss");
    }
    if ((h === 0) && (c === 2)) {
        alert("win");
    }
    
    alert("h: " + h);
    alert("c: " + c);

    if(h === c) {
        alert("draw! round" + numberRound);
    } else if (h < c) {
        alert("you lose" + numberRound); 
    } else if (h > c) {
        alert("you win" + numberRound);
    }
    // endRound();
}

// Use arrays. Use fake negative index by saying if i[0] -> len(arr)

const btns = document.querySelectorAll("button");

btns.forEach(btn => {
   btn.onclick = () => {
    playRound(parseInt(btn.id)); 
   }
});