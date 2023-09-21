function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getPlayerChoice() {
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
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      gameStatus.textContent = `Tie! You both chose ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    } else {
      playerScore++;
      gameStatus.textContent = `Tie! You both chose ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      gameStatus.textContent = `Tie! You both chose ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    } else {
      playerScore++;
      gameStatus.textContent = `Tie! You both chose ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      gameStatus.textContent = `Tie! You both chose ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
    } else {
      playerScore++;
      gameStatus.textContent = `Tie! You both chose ${playerSelection}, player score: ${playerScore}, computer score: ${computerScore}, ties: ${ties}`;
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
