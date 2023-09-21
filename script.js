function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    ties++;
    gameStatus.textContent = `Tie! You both chose ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      gameStatus.textContent = `You lose! ${computerSelection} beats ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    } else {
      playerScore++;
      gameStatus.textContent = `You win! ${playerSelection} beats ${computerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      gameStatus.textContent = `You lose! ${computerSelection} beats ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    } else {
      playerScore++;
      gameStatus.textContent = `You win! ${playerSelection} beats ${computerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      gameStatus.textContent = `You lose! ${computerSelection} beats ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    } else {
      playerScore++;
      gameStatus.textContent = `You win! ${playerSelection} beats ${computerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    }
  }
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
