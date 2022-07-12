const computerPlay = () => {
    // Randomly generate a number from 1 - 3
    let rand = Math.floor(Math.random() * (4 - 1) + 1);
    let result = "";
    // Assign number to the three results
    switch(rand) {
        case 1: 
            result = "Rock";
            break;
        case 2: 
            result = "Paper";
            break;
        case 3: 
            result = "Scissors";
            break;
    }
    return result;
}
console.log(computerPlay());