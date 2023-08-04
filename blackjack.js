
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("card-el")
let sumEl = document.getElementById("Sum-el")

document.querySelector("#new-card").disabled = true

let player = 
{
    name: "Player 1",
    chips: 700
} 
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    return randomNumber
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
function startgame() {
    isAlive = true
    if (isAlive === true) {
        document.querySelector("#new-card").disabled = false
    }
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    rendergame()
}

function rendergame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want more card?"
    }
    else if (sum === 21) 
    {
        message = "You've got Blackjack"
        hasBlackJack = true
        document.querySelector("#new-card").disabled = true
    }
    else 
    {
        message = "sorry,You are out of the game"
        isAlive = false
        document.querySelector("#new-card").disabled = true
    }
    messageEl.textContent = message



}
function newCard() {

    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    sum = sum + card


    cards.push(card)
    console.log(cards)
    rendergame()




}
