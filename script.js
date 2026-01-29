let humanScore = 0;
let computerScore = 0;
let numberRound = 0;
const choices = ["rock","paper","scissors"];

// Computer choice
function getComputerChoice(n) {
    n = Math.floor(Math.random()*3);
    return n;
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
        alert("draw! round" + numberRound); // ok
    } else if (h < c) {
        alert("you lose" + numberRound); 
        humanScore--;
        computerScore++;
    } else if (h > c) {
        alert("you win" + numberRound);
        humanScore++;
        computerScore--;
    }
    alert(choices);
}

// Use arrays. Use fake negative index by saying if i[0] -> len(arr)

const btn = document.querySelectorAll('button');

btn.forEach(btn => {
   btn.onclick = () => {
    playRound(parseInt(btn.id)); 
   }
});