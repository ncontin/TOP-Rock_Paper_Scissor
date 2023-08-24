const winner = document.querySelector(".winner");
const btns = document.querySelectorAll("button");
const choice = document.querySelector(".choice");
const choiceResult = document.querySelector(".choice-result");
const restart = document.querySelector("#restart");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    choice.textContent = `Player choice: ${playerSelection}, Computer choice: ${computerSelection}`;
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        choiceResult.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        choiceResult.textContent = "You Won! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        choiceResult.textContent = "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        choiceResult.textContent = "You Won! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        choiceResult.textContent = "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        choiceResult.textContent = "You Won! Scissors beats Paper";
    } else if (
        (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors")
    )
        choiceResult.textContent = "It's a Tie!";
    // }
}

function game() {
    const playerScoreDisplay = document.querySelector(".player-score");
    const computerScoreDisplay = document.querySelector(".computer-score");
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;

    function gameRound(e) {
        let playerSelection = e.target.getAttribute("data-choice");
        if (!playerSelection) {
            playerSelection = e.target.closest("button").getAttribute("data-choice");
        }

        if (!playerSelection) return;
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        playerScoreDisplay.textContent = `${playerScore}`;
        computerScoreDisplay.textContent = `${computerScore}`;
        handleWinner();
    }

    btns.forEach((button) => {
        button.addEventListener("click", gameRound);
    });

    function handleWinner() {
        if (playerScore >= 5 || computerScore >= 5) {
            if (playerScore > computerScore) {
                winner.textContent = "Player Won";
            } else if (computerScore > playerScore) {
                winner.textContent = "Computer Won";
            }

            btns.forEach((button) => {
                button.removeEventListener("click", gameRound);
            });
        }
    }
}

restart.addEventListener("click", () => {
    location.reload();
});

game();
