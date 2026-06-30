function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3)+1;
    return getChoiceThroughNumber(choiceNumber);
    
}
function getHumanChoice(){
    let userChoice = 0;
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
let humanScore =0;
let globalScore =0;
const userChoice =getHumanChoice();
const computerChoice = getComputerChoice();
printChoices(userChoice,computerChoice);



function printChoices(humanSelection, computerSelection){
    console.log(`You chose:${humanSelection}\nComputer chose:${computerSelection}`);
}