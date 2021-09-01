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



/* create 3 btn
assign value to each rock paper scissors
launch event when clicked with good parameter of playerSelection
playerSelection will have to get the value of each button
play the function Round
display the results on the results div
*/




function playRound(choice) {

    let battleResult = battle(playerPlay(choice), computerPlay());

    return battleResult;

}

//----------------------------------------------------------------------------------
function playGame(choice) {
    
    winner = playRound(choice);

    if(winner === "Player wins !"){
        winnerPara.textContent = winner + ' Choose again.';
        playerScore++;
        scorePara.textContent = `Score :\n\nPlayer : ${playerScore} - Computer : ${computerScore}`;
    }
    else if(winner === "CPU wins !"){
        winnerPara.textContent = winner + ' Choose again.';
        computerScore++;
        scorePara.textContent = `Score :\n\nPlayer : ${playerScore} - Computer : ${computerScore}`;
    }
    else {
        winnerPara.textContent = "It's a tie ! Choose again.";
        scorePara.textContent = `Score :\n\nPlayer : ${playerScore} - Computer : ${computerScore}`;
    }

    if(playerScore === 5){
        newPara.textContent = 'Player has won. Thanks for playing !';
        resultsDiv.appendChild(newPara);
        return;
    }
    else if(computerScore === 5){
        newPara.textContent = 'CPU has defeated you. Thanks for playing !';
        resultsDiv.appendChild(newPara);
        return;
    }
    
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    winnerPara.textContent = 'Choose between rock paper and scissors to play';
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

winnerPara.textContent = 'Choose between rock paper and scissors to play';


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
})


