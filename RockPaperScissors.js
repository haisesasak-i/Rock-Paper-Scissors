function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3)+1;
    return getChoiceThroughNumber(choiceNumber);
    
}
function getHumanChoice(){
    let userChoice = 0;
    do {
        userChoice = +prompt("Choose your weapon:\n1.Rock\n2.Paper\n3.Scissors\nEnter your choice number:");
    } while (!(userChoice>0&&userChoice<4));
    console.log(userChoice);
    return getChoiceThroughNumber(userChoice);

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

