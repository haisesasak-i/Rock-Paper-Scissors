
const buttonContainer = document.querySelector(".buttonsContainer");
buttonContainer.addEventListener("click",(event)=>{
    //closet button is used as i am using event delegation and as each button has an image and span so they can trigger click too but i want the button to find find the text like rock paper  
    let userChoiceButton =event.target.closest("button");
    //AS there is spacing inside the button container, so that spacing can cause click event too making the closet button null  as there is no button above the spacing and under the button container 
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
        
       if(continueGameOrNot()) {
            const humanScore = document.querySelector(".playerCurrent");
            const computerScore = document.querySelector(".computerCurrent");

            printGameResult(humanScore,computerScore);
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

function printGameResult() {
    
    if (humanScore > computerScore) {
        displayResult("Congratulations! You won the game!",0)
    } else if (computerScore > humanScore) {
        displayResult("You lost the game. Better luck next time!",1);
    } else {
        displayResult("This game is a draw!",2);
    }
}
//it gets the index of class depending on the winner and removes the classes and apply the required class like winner class if round is a win
function toggleClasses(result,index){
    let classNames = ["winner","loser","draw"];
    classNames.forEach((value,i)=>{if(index===i ) result.classList.toggle(value,true); else result.classList.toggle(value,false) });

}
function continueGameOrNot(){
    return document.querySelector(".playerCurrent").textContent==="5"||document.querySelector(".computerCurrent").textContent==="5";
}
