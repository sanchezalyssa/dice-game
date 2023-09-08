let imgsrcOne = document.querySelectorAll("img")[0]
let imgsrcTwo = document.querySelectorAll("img")[1]

let playerOne = ""
let playerTwo = ""
// player dice
let playerOneDice = ""
let playerTwoDice = ""

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
    document.querySelector("h1").textContent
    return message
}

document.getElementById("roll-btn").addEventListener("click", () => {
    //dice of player
    playerOneDice = randomNumberOfDice()
    playerTwoDice = randomNumberOfDice()
    //set attribute
    playerOne = imgsrcOne.setAttribute("src", `img/dice${playerOneDice}.png`)
    playerTwo = imgsrcTwo.setAttribute("src", `img/dice${playerTwoDice}.png`)
    whoWins()
})
