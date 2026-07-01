
const buttonContainer = document.querySelector(".buttonsContainer");
buttonContainer.addEventListener("click",(event)=>{
    // Using event delegation: one listener on the container instead of
    // one per button. Buttons contain an <img> and <span>, so a click can
    // land on either child — closest("button") walks up to the actual
    // button regardless of which child was clicked.
  
    let userChoiceButton =event.target.closest("button");
    // Clicking in the gaps between buttons (padding/margin inside the
    // container) also fires this listener, but there's no button there —
    // closest() returns null in that case, so we guard against it.
    if(userChoiceButton!=null){
        let userChoice = userChoiceButton.children[1].textContent;
        playGame(userChoice);
        
    }
});

function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3)+1;
    return getChoiceThroughNumber(choiceNumber);
    
    
}
//leaving it here in case someone wants to create console base game
function getHumanChoice(){
    let userChoiceNumber = 0;
    do {
        userChoiceNumber = +prompt("Choose your weapon:\n1.Rock\n2.Paper\n3.Scissors\nEnter your choice number:");
    } while (!(userChoiceNumber>0&&userChoiceNumber<4));
    return getChoiceThroughNumber(userChoiceNumber);

}
function getChoiceThroughNumber(choiceNumber=0){
    switch(choiceNumber){
        case 1:
        return "Rock";
        case 2:
        return "Paper";
        case 3:
        return "Scissors";
        default:
        return "Not a valid choice number"
    }
}
function playGame(userChoice =""){
        if(endGameOrNot()){
            displayResult("You have already completed the game.Refresh to play again.!",1);
            return;
        }
        const computerChoice = getComputerChoice();
        let result =playRound(userChoice,computerChoice);
        printRoundScores(result);
        

        switch(result){
            case "win":
            displayResult("Congratulations!You have won the round.",0);
           
           
            
            break;
            case "lose":
             displayResult("Alas! You have lost the round.",1);
            break;
            default:
             displayResult("This round is a draw",2);
        }
        
            
            
       if(endGameOrNot()) {
            
            
            const humanScore = document.querySelector(".playerCurrent").textContent;
            const computerScore = document.querySelector(".computerCurrent").textContent;
            printGameResult(humanScore, computerScore);

       }
    
    
   
}
function displayResult(message="",index=-1){
    const resultText = document.querySelector(".result");
    resultText.textContent=message;
    toggleClasses(resultText,index);

}



function playRound(humanSelection = "", computerSelection = "") {
    printChoices(humanSelection, computerSelection);

    //.toLowerCase() is not necessary but if i let user give string input , i will not have to change the play round again
    humanSelection = humanSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (humanSelection === computerSelection) {
        return "draw";
    }

    if (
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "rock" && computerSelection === "scissors")
    ) {
        return "win";
    }

    return "lose";
}
function printChoices(humanSelection="", computerSelection=""){
    const userMove = document.querySelector(".userChoice");
    const computerMove = document.querySelector(".computerChoice");
    userMove.textContent=humanSelection;
    computerMove.textContent=computerSelection;

}
function printRoundScores(result){
    updateScoreAndRound(".roundNumber");
    
    if (result =="win"){
        updateScoreAndRound(".playerCurrent");
    }
    else if (result =="lose"){
        updateScoreAndRound(".computerCurrent");
    }
    else return;
    
}
function updateScoreAndRound(className){
    //SOR = score or round
    const currentSOR = document.querySelector(className);
    currentSOR.textContent= +currentSOR.textContent+1;

}

function printGameResult(humanScore = "", computerScore = "") {
    const human = Number(humanScore);
    const computer = Number(computerScore);

    if (human > computer) {
        displayResult("Congratulations! You won the game!", 0);
    } else if (computer > human) {
        displayResult("You lost the game. Better luck next time!", 1);
    } else {
        displayResult("This game is a draw!", 2);
    }
}
//it gets the index of class depending on the winner and removes the classes and apply the required class like winner class if round is a win
function toggleClasses(result,index){
    let classNames = ["winner","loser","draw"];
    classNames.forEach((value,i)=>{if(index===i ) result.classList.toggle(value,true); else result.classList.toggle(value,false) });

}
function endGameOrNot(){
    return document.querySelector(".playerCurrent").textContent==="5"||document.querySelector(".computerCurrent").textContent==="5";
}
