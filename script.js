const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", startRound);
paperButton.addEventListener("click", startRound);
scissorsButton.addEventListener("click", startRound);

function startRound(e) {

    const computerOption = computerPlay();
    const playerOption = (e.target.id);

    if ((playerOption === "rock") && (computerOption === "rock")) {
        alert("Tie");
    }
    else if ((playerOption === "paper") && (computerOption === "paper")) {
        alert("Tie");
    }
    else if ((playerOption === "scissors") && (computerOption === "scissors")) {
        alert("Tie");
    }
    else if ((playerOption === "scissors") && (computerOption === "paper")) {
        alert("Win");
    }
    else if ((playerOption === "paper") && (computerOption === "rock")) {
        alert("Win");
    }
    else if ((playerOption === "rock") && (computerOption === "scissors")) {
        alert("Win");
    }
    else if ((playerOption === "scissors") && (computerOption === "rock")) {
        alert("Lose");
    }
    else if ((playerOption === "rock") && (computerOption === "paper")) {
        alert("Lose");
    }
    else if ((playerOption === "paper") && (computerOption === "scissors")) {
        alert("Lose");
    }
    else {
        alert("Error");
    }



}

function computerPlay() {

    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];

}
