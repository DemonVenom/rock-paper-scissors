const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", startRound);
paperButton.addEventListener("click", startRound);
scissorsButton.addEventListener("click", startRound);

let playerScore = 0;
let computerScore = 0;

function startRound(e) {

    const computerOption = computerPlay();
    const playerOption = (e.target.id);

    const selectionHeading = document.querySelector("#selection-heading");
    const playerIntro = document.querySelector("#player-selection");
    const computerIntro = document.querySelector("#computer-selection");

    playerIntro.textContent = `Player's selection: ${playerOption}`;
    computerIntro.textContent = `Computer's selection: ${computerOption}`;
    let result = null;


    if (playerOption === computerOption) {
        selectionHeading.textContent = "Tie";
    }
    else if (
        ((playerOption === "scissors") && (computerOption === "paper")) ||
        ((playerOption === "paper") && (computerOption === "rock")) ||
        ((playerOption === "rock") && (computerOption === "scissors"))
    ) {
        selectionHeading.textContent = "Win";
        result = "win";
    }
    else if (
        ((playerOption === "scissors") && (computerOption === "rock")) ||
        ((playerOption === "rock") && (computerOption === "paper")) ||
        ((playerOption === "paper") && (computerOption === "scissors"))
    ) {
        selectionHeading.textContent = "Lose";
        result = "lose";
    }
    else {
        alert("Error");
    }

    const playerScoreIntro = document.querySelector("#player-score");
    const computerScoreIntro = document.querySelector("#computer-score");


    if (result == "win") {
        playerScore++;
    }
    else if (result == "lose") {
        computerScore++;
    }

    playerScoreIntro.textContent = `You:  ${playerScore}`;
    computerScoreIntro.textContent = `Computer: ${computerScore}`;

}



function computerPlay() {

    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];

}
