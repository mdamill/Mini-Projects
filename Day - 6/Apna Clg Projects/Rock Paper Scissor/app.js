
const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')
const userScoreDisplay = document.querySelector('#user-score')
const compScoreDisplay = document.querySelector('#comp-score')


const getCompChoice = function () {

    const gameOptions = ['rock', 'paper', 'scissors']

    return gameOptions[Math.floor(Math.random() * 3)]
}


choices.forEach(function (choice) {

    choice.addEventListener('click', (e) => {
        const userChoice = choice.getAttribute('id')

        playGame(userChoice)

    })
})

function playGame(userChoice) {

    compChoice = getCompChoice()

    console.log(`user choice :`, userChoice)
    console.log(`computers choice :`, compChoice)

    
    if (userChoice === compChoice) {
        msg.innerText = `Game Draw !`
        return;
    }
    else {
        let userWin = true

        if (userChoice === compChoice) {
                        
            drawMsg.innerText = `Game is drawn !`
            
        } 
        else if (userChoice === "rock") {
            // Rock beats Scissors, loses to Paper
            userWin = compChoice === "scissors" ? true : false;
        }
         else if (userChoice === "paper") {
            // Paper beats Rock, loses to Scissors
            userWin = compChoice === "rock" ? true : false;
        }
         else if (userChoice === "scissors") {
            // Scissors beat Paper, lose to Rock
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin);

    }
}
let userScore = 0
let compScore = 0
function showWinner(userWin){

    if(userWin){
        msg.innerText = `YOU WON !`
        userScoreDisplay.innerText = `${++userScore}`;
    }
    else{
        msg.innerText = `YOU LOST !`
        compScoreDisplay.innerText = `${++compScore}`;
    }
}