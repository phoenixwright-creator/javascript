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

function roundPlay(playerChoice, computerChoice) {
    
    if(playerChoice === computerChoice){
        alert("It's a tie");
    }
    else if(playerChoice === "ROCK" && computerChoice === "PAPER"){
        alert("CPU wins");
    }
    else if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        alert("Player wins");
    }
    else if(playerChoice === "PAPER" && computerChoice === "ROCK"){
        alert("Player wins");
    }
    else if(playerChoice === "PAPER" && computerChoice === "SCISSORS"){
        alert("CPU wins");
    }
    else if(playerChoice === "SCISSORS" && computerChoice === "ROCK"){
        alert("CPU wins");
    }
    else if(playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        alert("Player wins");
    }
    else{
        alert("Player choice unrecognized");
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

//playGame();





/* create 3 btn
assign value to each rock paper scissors
launch event when clicked with good parameter of playerSelection
playerSelection will have to get the value of each button
play the function Round
display the results on the results div
*/




document.getElementById('rockBtn').addEventListener('click', function() {
    roundPlay(playerPlay('ROCK'), computerPlay());
});

document.getElementById('paperBtn').addEventListener('click', function() {
    roundPlay(playerPlay('PAPER'), computerPlay());
});

document.getElementById('scissorsBtn').addEventListener('click', function() {
    roundPlay(playerPlay('SCISSORS'), computerPlay());
});
