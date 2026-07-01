
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
        let result =playRound(userChoice,computerChoice,humanScore,computerScore);
        // switch(result){
        //     case "win":
        //     humanScore++;
        //     console.log("You won the round");
        //     break;
        //     case "lose":
        //     computerScore++;
        //     console.log("You lost the round");
        //     break;
        //     default:
        //     console.log("This round was a draw");
        // }
        printRoundScores(result);
        
    
    // console.log("Game Result:")
    // printGameResult(humanScore,computerScore);
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
    console.log(`You chose:${humanSelection}\nComputer chose: ${computerSelection}`);
}
function printRoundScores(winner){
    // console.log(`Round ${roundNumber+1} Scores:`);
    // console.log(`Your Score:${humanScore}\nComputer Score:${computerScore}`);

    if (result =="win"){
        const humanScore = document.querySelector(".playerCurrent");
        let currentScore = +humanScore.textContent+1;
        humanScore.textContent =currentScore;
    }
    else if (result =="lose"){
        const computerScore = document.querySelector(".computerCurrent");
        let currentScore = +computerScore.textContent+1;
        computerScore.textContent =currentScore;
    }
    else return;
    
}

function printGameResult(humanScore = 0, computerScore = 0) {
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game. Better luck next time!");
    } else {
        console.log("It's a draw!");
    }
}
