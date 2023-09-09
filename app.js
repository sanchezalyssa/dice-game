import { randomNumberOfDice, whoWins } from "./function.js"

let imgsrcOne = document.querySelectorAll("img")[0]
let imgsrcTwo = document.querySelectorAll("img")[1]

let playerOne = ""
let playerTwo = ""
// player dice
export let playerOneDice = ""
export let playerTwoDice = ""

document.getElementById("roll-btn").addEventListener("click", () => {
    //random dice of player
    playerOneDice = randomNumberOfDice()
    playerTwoDice = randomNumberOfDice()
    //set attribute
    playerOne = imgsrcOne.setAttribute("src", `img/dice${playerOneDice}.png`)
    playerTwo = imgsrcTwo.setAttribute("src", `img/dice${playerTwoDice}.png`)
    whoWins()
})
