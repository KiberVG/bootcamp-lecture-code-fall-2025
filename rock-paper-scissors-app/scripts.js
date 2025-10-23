let score = 0;
let choiceNumbers = [0,1,2]
let gameChoices = ["rock", "scissors", "paper"]

function botChoice() {
    let botChoiceNumber = Math.floor(Math.random() * 3); // number
    let botGameChoice = gameChoices[botChoiceNumber] // string

    let botDiv = document.getElementById("bot-chose")
    botDiv.innerText = `Bot Chose: ${botGameChoice}`

    return botChoiceNumber

}

function userChoose(userChoiceNumber) { // 0, 1, or 2
    let botChoiceNumber = botChoice();
    let youChoseDiv = document.getElementById("you-chose")
    youChoseDiv.innerText = `You chose: ${gameChoices[userChoiceNumber]}`
    // Who won?
    let result = ""
    if (userChoiceNumber == (botChoiceNumber + 1) % 3) { // we lost
        result = "YOU LOST"
    } else if (botChoiceNumber == (userChoiceNumber + 1) % 3) { // we won
        result = "YOU WIN"
        score++
    } else {
        result = "WE TIED"
    }
    
    let resultDiv = document.getElementById("game-result")
    let scoreDiv = document.getElementById("score-counter")

    resultDiv.innerText = result
    scoreDiv.innerText = `Score: ${score}`

}

let rockButton = document.getElementById('rock-button')
let paperButton = document.getElementById('paper-button')
let scissorsButton = document.getElementById('scissors-button')

rockButton.addEventListener('click', () => userChoose(0))
paperButton.addEventListener('click', () =>userChoose(1))
scissorsButton.addEventListener('click', function () {
    userChoose(2)
})