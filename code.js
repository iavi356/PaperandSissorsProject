
//Create variables for user and Computer
var playerSelectionDisplay = document.getElementById("user-choice");
var computerSelectionDisplay = document.getElementById("computer-choice");
var resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");
let playerSelection;
let computerSelection;
let result;

choices.forEach (choice => choice.addEventListener('click', (e) => {
playerSelection = e.target.id
playerSelectionDisplay.innerHTML = playerSelection
 computerPlay()
 playRound()
}))
    


//Create function for computer to play that returns a random value 
function computerPlay() {
    var values = ["Rock", "Paper", "Scissors"]
    computerSelection = values [Math.floor(Math.random()*values.length)];
    computerSelectionDisplay.innerHTML = computerSelection;
}


//Function that plays the game
function playRound (){
resultDisplay.innerHTML = result;
if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
    result="You win! Rock beats Scissors";
} 

else if ((playerSelection== "Rock") && (computerSelection == "Paper")) {
    result="You lose! Paper beats Rock";
}  
else if ((playerSelection == "Rock") && (computerSelection == "Rock")) {
    result="TIE!";
}
else if ((playerSelection == "Paper")&& (computerSelection == "Rock")) {
    result= "You win! Paper beats Rock";
}
else if ((playerSelection == "Paper")&& (computerSelection == "Scissors")) {
    result= "You lose! Scissors beat Paper"; 
}
else if ((playerSelection == "Paper") && (computerSelection == "Paper")) {
    result= "TIE!";
}
else if ((playerSelection == "Scissors") && (computerSelection == "Paper")){
    result=  "You win! Scissors beat Paper"
}
else if ((playerSelection == "Scissors") && (computerSelection == "Rock")){
    result=  "You lose! Rock beats Scissors"
}
else if ((playerSelection == "Scissors")&& (computerSelection == "Scissors")){
    result= "TIE!"
}  
}



