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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose between Rock, Paper and Scissors");
    const computerSelection = getComputerChoice();
    function playRound(playerSelection, computerSelection) {
      console.log(`Player choice: ${playerSelection}, Computer choice: ${computerSelection}`);
      if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
      } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        return "You Won! Rock beats Scissors";
      } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        return "You Lose! Scissors beats Paper";
      } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
      } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        return "You Won! Scissors beats Paper";
      } else if (
        (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors")
      )
        return "It's a Tie!";
    }
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore >= 3 || playerScore > computerScore) {
    return "You Won!";
  } else if (computerScore >= 3 || computerScore > playerScore) {
    return "You Lost";
  } else return "It's a tie";
}

console.log(game());
