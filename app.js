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
        return `It's a tie! You both chose ${computerSelection}.`;
    } else if (caseInsensitive === "ROCK" && computerSelection === "PAPER") {
        return `You Lose! PAPER beats ROCK.`;
    } else if (caseInsensitive === "ROCK" && computerSelection === "SCISSORS") {
        return `You Win! ROCK beats SCISSORS.`;
    } else if (caseInsensitive === "PAPER" && computerSelection === "SCISSORS") {
        return `You Lose! SCISSORS beats PAPER.`;
    } else if (caseInsensitive === "SCISSORS" && computerSelection === "PAPER") {
        return `You Win! SCISSORS beats PAPER.`;
    }
}; 

const game = () => {
    
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));