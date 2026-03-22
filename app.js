let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    // rock,paper,Scissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];
}
const drawGame = () =>{
    console.log("game was draw");
}

const playGame = (userChoice) =>{
    console.log( "user choice = ", userChoice)
    //generate computer choice
    const compChoice = genCompChoice();
     console.log( "comp choice = ",compChoice)

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice === "paper"){
            //rock ,scissors
            userWin = compChoice === "scissors"? false:true;
        }else{
            //rock, paper
            userWin = compChoice === "rock"? false: true;
        }
            showWinner(userWin);
        
    }


}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);

    })
})
