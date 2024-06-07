function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)]; //get random item of choices array
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let winner;
  const resultPrint = document.querySelector(".resultPrint");

  function playRound(event) {
    const compChoice = getComputerChoice();
    const humChoice = event.target.dataset.choice;
    if (humChoice === "rock") {
      if (compChoice === "paper") {
        resultPrint.textContent = "You lose! Paper beats Rock";
        computerScore++;
      } else {
        resultPrint.textContent = "You win! Rock beats Scissors";
        humanScore++;
      }
    } else if (humChoice === "paper") {
      if (compChoice === "scissors") {
        resultPrint.textContent = "You lose! Scissors beats Paper";
        computerScore++;
      } else {
        resultPrint.textContent = "You win! Paper beats Rock";
        humanScore++;
      }
    } else if (humChoice === "scissors") {
      if (compChoice === "rock") {
        resultPrint.textContent = "You lose! Rock beats Scissors";
        computerScore++;
      } else {
        resultPrint.textContent = "You win! Scissors beats Paper";
        humanScore++;
      }
    } else {
      resultPrint.textContent = "TIE!";
    }
  }

  document.querySelectorAll(".choiceBtn").forEach((button) => {
    button.addEventListener("click", (e) => {
      playRound(e);

      if (humanScore === 5 || computerScore === 5) {
        winner = humanScore === 5 ? "HUMAN" : "COMPUTER";
        resultPrint.textContent = `THE WINNER IS ${winner}! Score: ${humanScore}:${computerScore}.`;
        computerScore = 0;
        humanScore = 0;
      }
    });
  });
}

playGame();
