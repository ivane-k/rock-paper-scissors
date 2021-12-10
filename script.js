let playerScore = 0;
let computerScore = 0;
let result;

const h1 = document.querySelector("#result");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const playerList = document.querySelector("#playerList");
const computerList = document.querySelector("#computerList");
const buttons = document.querySelectorAll('.button');
const end = document.querySelector("#modal");
const message = document.querySelector("#message");
const playAgain = document.querySelector("#playAgain");
const liPlayer = document.createElement("li");
const liComputer = document.createElement("li");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    });
});

playAgain.addEventListener("click", () => {
    h1.textContent = "Score";
    player.textContent = 0;
    computer.textContent = 0;
    liPlayer.innerHTML = "";
    liComputer.innerHTML = "";
    end.style.display = "none";
    playerScore = 0;
    computerScore = 0;
});

function reload() {
    location.realod(true);
}

function addToList(a, b) {
    liPlayer.innerHTML = `<i class="fas fa-hand-${a}"></i>`;
    liComputer.innerHTML = `<i class="fas fa-hand-${b}"></i>`;
    playerList.append(liPlayer);
    computerList.append(liComputer);
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

function playRound(playerSelection) {
    let computerSelection = getComputerSelection();
    if (playerSelection == "rock") {
        addToList(playerSelection, computerSelection);
        if (computerSelection == "rock") {
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
        addToList(playerSelection, computerSelection);
        if (computerSelection == "rock") {
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
        addToList(playerSelection, computerSelection);
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
    h1.textContent = result;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    game();
}

function game() {
    if (playerScore === 5) {
        end.style.display = "block";
        message.textContent = "You Won!";
    }
    else if (computerScore === 5) {
        end.style.display = "block";
        message.textContent = "You Lost!";
    }
}




