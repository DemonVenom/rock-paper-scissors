const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", startRound);
paperButton.addEventListener("click", startRound);
scissorsButton.addEventListener("click", startRound);

function startRound(e) {

    const computerOption = computerPlay();
    const playerOption = (e.target.id);

    const selectionHeading = document.querySelector("#selection-heading");
    const playerIntro = document.querySelector("#player-selection");
    const computerIntro = document.querySelector("#computer-selection");

    playerIntro.textContent = `Player's selection: ${playerOption.toLowerCase()}`;
    computerIntro.textContent = `Computer's selection: ${computerOption.toLowerCase()}`;


    if (playerOption === computerOption) {
        alert("Tie");
    }
    else if (
        ((playerOption === "scissors") && (computerOption === "paper")) ||
        ((playerOption === "paper") && (computerOption === "rock")) ||
        ((playerOption === "rock") && (computerOption === "scissors"))
    ) {
        alert("Win");
    }
    else if (
        ((playerOption === "scissors") && (computerOption === "rock")) ||
        ((playerOption === "rock") && (computerOption === "paper")) ||
        ((playerOption === "paper") && (computerOption === "scissors"))
    ) {
        alert("Lose");
    }
    else {
        alert("Error");
    }

    changeScore();

}


function changeScore() {



}




function computerPlay() {

    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];

}
