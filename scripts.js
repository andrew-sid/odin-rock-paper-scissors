function getComputerChoice() {
    let randNum =  Math.random();
    if (randNum < 0.33) {
        return "rock";
    } else if (randNum >= 0.33 && randNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function main() {
    console.log(getComputerChoice());
}

main();