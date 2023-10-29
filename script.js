let playerSelection;
const computerSelection = getComputerChoice();
let text = document.getElementById('text').innerText;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById('text').innerText ='tie'
    }
    if (condition) {
        
    }

}

function playerChoice(choice) {
    // the choise is the the player pick and the id at the same time
    // when a button is clicked we sent it to the playRound function
    document.getElementById(choice).onclick = function () {
        playRound(choice, computerSelection);
    }
}

function getComputerChoice() {

    // this array have the elemnts the computer can randomly pick from
    let computerChoices = ["rock", "paper", "scissors"]
    // the g is just 
    let g = computerChoices[(Math.floor(Math.random() * computerChoices.length))];
    console.log(g)
    // here we return the chosen elemnt with math functions
    return g
}

/*
function rock() {
    playRound("rock", computerSelection);
}

function paper() {
    playerSelection = 'paper'
}

function scissors() {
    playerSelection = "scissors"
}
*/