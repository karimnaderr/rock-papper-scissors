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
function playRound(humanChoice , computerChoice){
    if (humanChoice === computerChoice) {
        result.textContent = `It's a tie! Both chose ${humanChoice}`;
    }
    if((humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "rock")){
        result.textContent = `You lose! ${computerChoice} beat ${humanChoice}`;
        computerScore++ ;
        score.textContent = `Your score ${humanScore} :  Computer's score ${computerScore}`   ;
    }
    if((humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "rock" && computerChoice == "scissors")){
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++ ;
        score.textContent = `Your score ${humanScore} :  Computer's score ${computerScore}`   ;
    }
}
function playGame(humanScore,computerScore){
    if(humanScore==5){
        winner.textContent = "🎉 YOU WON!"
        setTimeout(resetGame, 1000);
    }
    if(computerScore==5){
        winner.textContent = "😞 HARD LUCK! THE COMPUTER WON"
        setTimeout(resetGame, 1000);
    }
}
function resetGame(){
    let playAgain = window.confirm("Start a new game");
    if(playAgain){
        humanScore = 0;
        computerScore = 0;
        winner.textContent = "";
        result.textContent = "";
    }else{
        rockbtn.disabled = true;
        paperbtn.disabled = true;
        scissorsbtn.disabled = true;
    }
}
let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("body");
const rockbtn = document.querySelector(".rock");
const paperbtn = document.querySelector(".paper");
const scissorsbtn = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".scores");
const winner = document.querySelector(".winner");
rockbtn.addEventListener("click",function(){
    let humanChoice = "rock";
    playRound(humanChoice,getComputerChoice());
    playGame(humanScore,computerScore);
});
paperbtn.addEventListener("click",function(){
    let humanChoice = "paper";
    playRound(humanChoice,getComputerChoice());
    playGame(humanScore,computerScore);
});
scissorsbtn.addEventListener("click",function(){
    let humanChoice = "scissors";
    playRound(humanChoice,getComputerChoice());
    playGame(humanScore,computerScore);
});
