import { playerOneDice, playerTwoDice } from "/app.js"

function randomNumberOfDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

function whoWins() {
    let message = ""
    if (playerOneDice > playerTwoDice) {
        message = document.querySelector("h1").textContent = `Player 1 Wins! 🤑`
    } else if (playerOneDice < playerTwoDice) {
        message = document.querySelector("h1").textContent = `Player 2 Wins! 🤑`
    } else {
        message = document.querySelector("h1").textContent = `Draw 💀`
    }
    return message
}

export { randomNumberOfDice, whoWins }
