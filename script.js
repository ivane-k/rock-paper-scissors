let playerScore = 0;
let computerScore = 0;
let result;

function reload() {
    return location.reload(true);
}

function getPlayerSelection() {
    let input = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
        alert("PLease provide correct input");
        reload();
    }
    return input;
}

function getComputerSelection() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock";
    }
    else if (random == 1) {
        return "paper";
    }
    else
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerSelection();

    if (playerSelection == "rock") {
        if (computerScore == "rock") {
            result = "It's a tie";
        }
        else if (computerSelection == "paper") {
            result = "You lost! Paper beats Rock";
            computerScore++;
        }
        else {
            result = "You won! Rock beats Scissors";
            playerScore++;
        }
    }
    else if (playerSelection == "paper") {
        if (computerScore == "rock") {
            result = "You won! Paper beats Rock";
            playerScore++;
        }
        else if (computerSelection == "paper") {
            result = "It's a tie";
        }
        else {
            result = "You lost! Scissors beats Paper";
            computerScore++;
        }
    }
    else {
        if (computerSelection == "rock") {
            result = "You lost! Rock beats Scissors";
            computerScore++;
        }
        else if (computerSelection == "paper") {
            result = "You won! Scissors beats Rock";
            playerScore++;
        }
        else
        result = "It's a tie";
    }
    console.log(result);
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("You Won!");
    }
    else
    console.log("You lost!");
}

game();

