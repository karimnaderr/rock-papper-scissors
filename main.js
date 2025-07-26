function getComputerChoice(){
    let random = Math.random()*3;
    if(random < 1){
        return "rock";
    }
    if(random>2){
        return "papper";
    }
    else{
        return "scissors";
    }
}
function getHumanChoice(){
    let input = prompt("Enter rock, papper or scissors:");
    let userInput = input.toLowerCase();
    return userInput;

}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice , computerChoice){
    if((humanChoice == "papper" && computerChoice == "scissors")){
        console.log("You lose! scissors beat papper");
        computerScore++ ;
    }
    if((humanChoice == "rock" && computerChoice == "papper")){
        console.log("You lose! papper beats rock");
        computerScore++;
    }
    if((humanChoice == "scissors" && computerChoice == "rock")){
        console.log("You lose! rock beats scissors");
        computerScore++;
    }
    if((humanChoice == "papper" && computerChoice == "rock")){
        console.log("You win! papper beats rock");
        humanScore++ ;
    }
    if((humanChoice == "scissors" && computerChoice == "papper")){
        console.log("You win! scissors beat papper");
        humanScore++;
    }
    if((humanChoice == "rock" && computerChoice == "scissors")){
        console.log("You win! rock beats scissors");
        humanScore++;
    }
}

