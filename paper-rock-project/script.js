function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return "ROCK";

        case 1:
            return "PAPER";

        case 2:
            return "SCISSORS";
    }
}

function playerPlay(choice) {
    
    return choice;
}

function battle(playerChoice, computerChoice) {
    
    if(playerChoice === computerChoice){
        return "It's a tie !";
    }
    else if(playerChoice === "ROCK" && computerChoice === "PAPER"){
        return "CPU wins !";
    }
    else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        return "Player wins !";
    }
    else if(playerChoice === "PAPER" && computerChoice === "ROCK"){
        return "Player wins !";
    }
    else if(playerChoice === "PAPER" && computerChoice === "SCISSORS"){
        return "CPU wins !";
    }
    else if(playerChoice === "SCISSORS" && computerChoice === "ROCK"){
        return "CPU wins !";
    }
    else if(playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        return "Player wins !";
    }
    else{
        return "Player choice unrecognized";
    }
}

function playRound(choice) {

    let battleResult = battle(playerPlay(choice), computerPlay());

    return battleResult;

}

function playGame(choice) {
    
    winner = playRound(choice);

    if(winner === "Player wins !") {
        winnerPara.textContent = winner + ' Choose again.';
        playerScore++;
        scorePara.textContent = `Score :\n\nPlayer : ${playerScore} - Computer : ${computerScore}`;
    }
    else if(winner === "CPU wins !") {
        winnerPara.textContent = winner + ' Choose again.';
        computerScore++;
        scorePara.textContent = `Score :\n\nPlayer : ${playerScore} - Computer : ${computerScore}`;
    }
    else if (winner === "It's a tie !") {
        tieCounter++;
        switch(tieCounter){
            case 1: 
                winnerPara.textContent = "It's a tie ! Choose again.";
                break;

            case 2:
                winnerPara.textContent = "Another tie ! Choose again.";
                break;
            
            case 3:
                winnerPara.textContent = "OMG are you doing it on purpose ? That's again another tie ! Choose again.";
                break;

            default:
                winnerPara.textContent = "Tie ! That's incredible where is it going to end ? Choose again.";
                break;
        }
        
        scorePara.textContent = `Score :\n\nPlayer : ${playerScore} - Computer : ${computerScore}`;
    }

    if(playerScore === 5) {
        alert('Player has won. Congratulations & thanks for playing !');
        newGame();
    }
    else if(computerScore === 5) {
        alert('CPU has defeated you. Too bad but you can take your chance again !');
        newGame();
    }
    
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    tieCounter = 0;
    winnerPara.textContent = 'New game. Choose between rock paper and scissors to play.';
    scorePara.textContent = "";
    newPara.textContent = "";
}

    const resultsDiv = document.getElementById('resultsDiv');
    const winnerPara = document.getElementById('winnerPara');
    const scorePara = document.getElementById('scorePara');
    const newPara = document.createElement('p');
    let playerScore = 0;
    let computerScore = 0;
    let winner = "";
    let tieCounter = 0;

    winnerPara.textContent = 'Choose between rock paper and scissors to play.';

    document.getElementById('rockBtn').addEventListener('click', function() {

        playGame('ROCK');

    });

    document.getElementById('paperBtn').addEventListener('click', function() {

        playGame('PAPER');

    });

    document.getElementById('scissorsBtn').addEventListener('click', function() {

        playGame('SCISSORS');

    });

    document.getElementById('newGame').addEventListener('click', function() {
        
        newGame();

    });




