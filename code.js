
//Create function that plays the game
function playRound (playerSelection, computerSelection) {
 
//Create variables for user and Computer
var playerSelection = prompt ("Please enter your choice");
var playerSelection = caseInsensitive (playerSelection);
var computerSelection = computerPlay();
var outcome = playIf ();

var playerWins = 0;
var computerWins = 0;

//Create function for computer to play that returns a random value 
function computerPlay() {
    var values = ["Rock", "Paper", "Scissors"]
    valueToUse = values [Math.floor(Math.random()*values.length)];
    return (valueToUse);
}

//Create case sensitive function
function caseInsensitive (playerSelection){
valuetoModify = playerSelection.toLowerCase();
modified = valuetoModify.charAt(0).toUpperCase() + valuetoModify.slice(1);
return modified;
}

function playIf () {
if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
    return "You win! Rock beats Scissors";
} 

else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
    return "You lose! Paper beats Rock";
}  
else if ((playerSelection == "Rock") && (computerSelection == "Rock")) {
    return "TIE!";
}
else if ((playerSelection == "Paper")&& (computerSelection == "Rock")) {
    return  "You win! Paper beats Rock";
}
else if ((playerSelection == "Paper")&& (computerSelection == "Scissors")) {
    return "You lose! Scissors beat Paper";
}
else if ((playerSelection == "Paper") && (computerSelection == "Paper")) {
    return "TIE!";
}
else if ((playerSelection == "Scissors") && (computerSelection == "Paper")){
    return  "You win! Scissors beat Paper"
}
else if ((playerSelection == "Scissors") && (computerSelection == "Rock")){
    return  "You lose! Rock beats Scissors"
}
else if ((playerSelection == "Scissors")&& (computerSelection == "Scissors")){
    return  "TIE!"
}  
}
//Printing the outcomes
console.log ("You play with " + playerSelection)
console.log ("Computer plays with " + computerSelection)
console.log (outcome)

}
var playerSelection;
var computerSelection;

console.log(playRound())



