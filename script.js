const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {
    resultDisplay.textContent = "RESULT WILL DISPLAY HERE";
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
            result = "YOU WIN!";
            playerScore++;
            
        } else {
            result = "YOU LOSE! TRY AGAIN!";
            computerScore++;
        }
    }

    setTimeout(() => {
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    }, 500);

    setTimeout(() => {
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    }, 1000);

    setTimeout(() => {
        resultDisplay.textContent = result;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }, 1500);
}
