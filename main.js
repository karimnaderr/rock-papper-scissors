function getComputerChoice(){
    let random = Math.random()*3;
    if(random < 1){
        return "rock";
    }
    if(random<2 && random >=1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getHumanChoice(){
    let input = prompt("Enter rock, paper or scissors:");
    let userInput = input.toLowerCase();
    return userInput;

}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice , computerChoice){
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    }
    if((humanChoice == "paper" && computerChoice == "scissors")){
        console.log("You lose! scissors beat paper");
        computerScore++ ;
    }
    if((humanChoice == "rock" && computerChoice == "paper")){
        console.log("You lose! paper beats rock");
        computerScore++;
    }
    if((humanChoice == "scissors" && computerChoice == "rock")){
        console.log("You lose! rock beats scissors");
        computerScore++;
    }
    if((humanChoice == "paper" && computerChoice == "rock")){
        console.log("You win! paper beats rock");
        humanScore++ ;
    }
    if((humanChoice == "scissors" && computerChoice == "paper")){
        console.log("You win! scissors beat paper");
        humanScore++;
    }
    if((humanChoice == "rock" && computerChoice == "scissors")){
        console.log("You win! rock beats scissors");
        humanScore++;
    }

}

function playGame(){
    for(let i=0;i<5;i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection , computerSelection);
    }
    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! You lose the game!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();