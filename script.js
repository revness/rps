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
    return "its a tie";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
    } else {
      playerScore++;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
    } else {
      playerScore++;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
    } else {
      playerScore++;
    }
  }
}
for (let i = 0; i < 1000000; i++) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}
console.log("player score: " + playerScore);
console.log("computer score: " + computerScore);
console.log("ties: " + ties);
