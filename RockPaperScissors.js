function getComputerChoice(){
    let choiceNumber = Math.floor(Math.random()*3);
    switch(choiceNumber){
        case 0:
        return "Rock";
        case 1:
        return "Paper";
        case 2:
        return "Scissors";
        default:
        return "Not a valid choice number"
    }
}

