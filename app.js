const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const btns = document.querySelector('.btns');
const pointsText = document.querySelector('.points-text');
const finalText = document.querySelector('.final-text');
const choicesText = document.querySelector('.choices-text');

const computerPlay = () => {
    // Randomly generate a number from 1 - 3
    let rand = Math.floor(Math.random() * (4 - 1) + 1);
    let result = "";
    // Assign number to the three results
    switch(rand) {
        case 1: 
            result = 'ROCK';
            break;
        case 2: 
            result = 'PAPER';
            break;
        case 3: 
            result = 'SCISSORS';
            break;
    }
    return result;
};

const playRound = (playerSelection, computerSelection) => {
    // Make every player selection uppercase to avoid errors
    let caseInsensitive = playerSelection.toUpperCase();
    if (caseInsensitive == computerSelection) {
        return `TIE`;
    } else if (caseInsensitive === 'ROCK' && computerSelection === 'SCISSORS' || caseInsensitive === 'SCISSORS' && computerSelection === 'PAPER' || caseInsensitive === 'PAPER' && computerSelection === 'ROCK' ) {
        return `WIN`;
    } else if (caseInsensitive === 'PAPER' && computerSelection === 'SCISSORS'|| caseInsensitive === 'ROCK' && computerSelection === 'PAPER' || caseInsensitive === 'SCISSORS' && computerSelection === 'ROCK') {
        return `LOSE`;
    } 
}; 

// Function that controls the amount of points and shows the final score
const pointsManager = () => {
    if (result === 'WIN') {
        playerPoints++;
        pointsText.textContent = `Player points: ${playerPoints} ... Computer points: ${computerPoints}`;
        if (playerPoints === 5) {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            finalText.textContent = "YOU'VE WON THE GAME!";
        }
    } else if (result === 'LOSE') {
        computerPoints++;
        pointsText.textContent = `Player points: ${playerPoints} ... Computer points: ${computerPoints}`;
        console.log('lose');
        if (computerPoints === 5) {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            finalText.textContent = "YOU'VE LOST THE GAME!";
        }
    } else if (result === 'TIE') {
        pointsText.textContent = `Player points: ${playerPoints} ... Computer points: ${computerPoints}`;
    }
}

// global variables
let playerPoints = 0;
let computerPoints = 0;
let result = '';

rockBtn.addEventListener('click', () => {
    let computerSelection = computerPlay();
    result = playRound('ROCK', computerSelection);
    choicesText.textContent = `You chose ROCK! The computer chose ${computerSelection}!`;
    pointsManager();
});
paperBtn.addEventListener('click', () => {
    let computerSelection = computerPlay();
    result = playRound('PAPER', computerSelection);
    choicesText.textContent = `You chose PAPER! The computer chose ${computerSelection}!`;
    pointsManager();
});
scissorsBtn.addEventListener('click', () => {
    let computerSelection = computerPlay();
    result = playRound('SCISSORS', computerSelection);
    choicesText.textContent = `You chose SCISSORS! The computer chose ${computerSelection}!`;
    pointsManager();
});



    // // Plays 5 rounds and increments points based on result
    // for (let i = 0; i < 5; i++) {
    //     const computerSelection = computerPlay();

    //     if (playRound(playerSelection, computerSelection) === "WIN") {
    //         playerPoints++;
    //         console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    //         console.log(`Player points: ${playerPoints} ... Computer points: ${computerPoints}`);
    //     } else if (playRound(playerSelection, computerSelection) === "LOSE") {
    //         computerPoints++;
    //         console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    //         console.log(`Player points: ${playerPoints} ... Computer points: ${computerPoints}`);
    //     } else if (playRound(playerSelection, computerSelection) === "TIE") {
    //         console.log(`It's a tie! You both chose ${computerSelection}`);
    //         console.log(`Player points: ${playerPoints} ... Computer points: ${computerPoints}`);
    //     } else {
    //         console.log(`You typed ${playerSelection}. Please type ROCK, PAPER or SCISSORS.`);
    //     }

    //     playerSelection = prompt("Type Rock, Paper or Scissors:").toUpperCase();
    // }

    // if (playerPoints > computerPoints) {
    //     console.log(`You scored ${playerPoints}. Computer scored ${computerPoints}.`);
    //     return `YOU WIN!`;
    // } else if (playerPoints < computerPoints) {
    //     console.log(`You scored ${playerPoints}. Computer scored ${computerPoints}.`)
    //     return `YOU LOSE!`;
    // } else {
    //     console.log(`You scored ${playerPoints}. Computer scored ${computerPoints}.`)
    //     return `YOU TIED!`;
    // }


// console.log(game());
