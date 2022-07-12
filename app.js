const computerPlay = () => {
    // Randomly generate a number from 1 - 3
    let rand = Math.floor(Math.random() * (4 - 1) + 1);
    let result = "";
    // Assign number to the three results
    switch(rand) {
        case 1: 
            result = "ROCK";
            break;
        case 2: 
            result = "PAPER";
            break;
        case 3: 
            result = "SCISSORS";
            break;
    }
    return result;
};

const playRound = (playerSelection, computerSelection) => {
    // Make every player selection uppercase to avoid errors
    let caseInsensitive = playerSelection.toUpperCase();
    if (caseInsensitive == computerSelection) {
        return `TIE`;
    } else if (caseInsensitive === "ROCK" && computerSelection === "SCISSORS" || caseInsensitive === "SCISSORS" && computerSelection === "PAPER" || caseInsensitive === "PAPER" && computerSelection === "ROCK" ) {
        return `WIN`;
    } else if (caseInsensitive === "PAPER" && computerSelection === "SCISSORS" || caseInsensitive === "ROCK" && computerSelection === "PAPER" || caseInsensitive === "SCISSORS" && computerSelection === "ROCK") {
        return `LOSE`;
    } 
}; 

const game = () => {
    let playerPoints = 0;
    let computerPoints = 0;

    let playerSelection = prompt("Type Rock, Paper or Scissors:").toUpperCase();
    
    // Plays 5 rounds and increments points based on result
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();

        if (playRound(playerSelection, computerSelection) === "WIN") {
            playerPoints++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            console.log(`Player points: ${playerPoints} ... Computer points: ${computerPoints}`);
        } else if (playRound(playerSelection, computerSelection) === "LOSE") {
            computerPoints++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            console.log(`Player points: ${playerPoints} ... Computer points: ${computerPoints}`);
        } else if (playRound(playerSelection, computerSelection) === "TIE") {
            console.log(`It's a tie! You both chose ${computerSelection}`);
            console.log(`Player points: ${playerPoints} ... Computer points: ${computerPoints}`);
        } else {
            console.log(`You typed ${playerSelection}. Please type ROCK, PAPER or SCISSORS.`);
        }

        playerSelection = prompt("Type Rock, Paper or Scissors:").toUpperCase();
    }
    if (playerPoints > computerPoints) {
        console.log(`You scored ${playerPoints}. Computer scored ${computerPoints}.`);
        return `YOU WIN!`;
    } else if (playerPoints < computerPoints) {
        console.log(`You scored ${playerPoints}. Computer scored ${computerPoints}.`)
        return `YOU LOSE!`;
    } else {
        console.log(`You scored ${playerPoints}. Computer scored ${computerPoints}.`)
        return `YOU TIED!`;
    }
};

console.log(game());