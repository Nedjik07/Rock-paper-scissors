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
    const content = document.querySelector("#div");
    const wrap = document.createElement("div");
    wrap.textContent = "Round Number " + numberRound;
    content.appendChild(wrap);
    //remove previous div
}

// Round function
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