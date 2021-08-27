function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return "Rock";

        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }
}

function playerPlay() {
    let choice = prompt("Choose between Rock, Paper and Scissors : ");
    
    return choice;
}

function roundPlay(playerChoice, computerChoice) {
    if(playerChoice === computerChoice){
        return "It's a tie";
    }
    else if(playerChoice === "ROCK" && computerChoice === "PAPER"){
        return "CPU wins";
    }
    else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        return "Player wins";
    }
    else if(playerChoice === "PAPER" && computerChoice === "ROCK"){
        return "Player wins";
    }
    else if(playerChoice === "PAPER" && computerChoice === "SCISSORS"){
        return "CPU wins";
    }
    else if(playerChoice === "SCISSORS" && computerChoice === "ROCK"){
        return "CPU wins";
    }
    else if(playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        return "Player wins";
    }
    else{
        return "Player choice unrecognized";
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let winnerName = "";

    do {
        let playerChoice = playerPlay().toUpperCase();
        let computerChoice = computerPlay().toUpperCase();
        let winner = roundPlay(playerChoice, computerChoice);
        alert(winner);

        if(winner === "Player wins"){
            playerScore++;
        }
        else if(winner === "CPU wins"){
            computerScore++;
        }

        alert(`Score :\n\nPlayer : ${playerScore} - Computer : ${computerScore}`);

        if(playerScore===3){
            winnerName = "You have defeated the CPU. Congratulations !";
            break;
        }
        else if(computerScore===3){
            winnerName = "CPU has defeated you. Too bad...";
            break;
        }

    } while ((playerScore + computerScore)<5);
    alert(winnerName);
}

playGame();

