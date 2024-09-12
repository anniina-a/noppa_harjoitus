
const diceImage = document.getElementById('dice')
const resultText = document.getElementById('instructions')

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    diceImage.src = `images/${randomNumber}.png`
    resultText.textContent = `You got the number: ${randomNumber}`
}

diceImage.addEventListener('click', rollDice)