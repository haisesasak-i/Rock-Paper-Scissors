
function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3)+1;
    return getChoiceThroughNumber(choiceNumber);
    
    
}
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
function playGame(){
    let humanScore =0;
    let computerScore =0;
    const numberOfRounds =5;    
    for (let i =0;i<numberOfRounds;i++){
        const userChoice =getHumanChoice();
        const computerChoice = getComputerChoice();
        let result =playRound(userChoice,computerChoice,humanScore,computerScore);
        switch(result){
            case "win":
            humanScore++;
            break;
            case "lose":
            computerScore++;
            break;
            default:
            humanScore++;
            computerScore;;
        }
        printRoundScores(humanScore,computerScore,i);
        
    }
}



function playRound(humanSelection="", computerSelection=""){
    printChoices(humanSelection,computerSelection);
     //.toLowerCase() is not necessary but if i let user give string input , i will not have to change the play round again
    if (humanSelection.toLowerCase()===computerSelection.toLowerCase()){
      console.log("Its a draw!");
     
    }
   
    else if (humanSelection.toLowerCase()==="paper"&&computerSelection.toLowerCase()==="rock"){
        console.log("You won!");
        return "win";
        
    }
    else if (humanSelection.toLowerCase()==="scissors"&&computerSelection.toLowerCase()==="paper"){
        console.log("You won!");
        return "win";
;
    }
    else if (humanSelection.toLowerCase()==="rock"&&computerSelection.toLowerCase()==="scissors"){
        return window;
        
    }
    else{
        return "lose";
        
    }
    

}
function printChoices(humanSelection="", computerSelection=""){
    console.log(`You chose:${humanSelection}\nComputer chose: ${computerSelection}`);
}
function printRoundScores(humanScore=0,computerScore=0,roundNumber=1){
    console.log(`Round${roundNumber} Scores:`);
    console.log(`Your Score:${humanScore}\nComputer Score:${computerScore}`);
}
