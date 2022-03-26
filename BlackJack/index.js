
let cards = []
let player = {
    name: "Melih",
    chips:"150",
    sayHello: function(){
        console.log("Hello")
    }
}

console.log(player.sayHello())

let sum = 0 
let isAlive = false
let hasBlackJack = false
let messageEL=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
//let sumEL=document.querySelector("#sum-el") Aynı şey...
let cardsEL=document.getElementById("cards-el")
let message = ""

let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard(){
     let randomNumber = Math.floor(Math.random() * 13) + 1
     if(randomNumber === 1) {return 11}
     else if(randomNumber > 10) {return 10}
     else{return randomNumber}
}

console.log(getRandomCard())

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame(){
        cardsEL.textContent = "Cards: "
        for(let i=0; i<cards.length; i++){
            cardsEL.textContent += cards[i] + " "
        }
        sumEL.textContent = "Sum: " + sum
        if (sum <= 20){
            message = "Do you want to draw a new card ?"
        }
        else if (sum === 21){
            message = "Yes ! You have got BlackJack !"
            hasBlackJack = true
        }
        else{
            message = "You are out of the game"
            isAlive=false
        }
        messageEL.textContent = message
}

function newcard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
