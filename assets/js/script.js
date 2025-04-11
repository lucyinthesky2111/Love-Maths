/* Wait for the DOM to finish loading before starting the game. Need to do this, otherwise you could be trying to target 
elements on the page that do not currently exist because they have not yet loaded. */
// Get the button elements and add event listeners to them 

/* If else statement returns first alert if the data type attribute is strictly equal to submit. If the data type attribute is 
anything else e.g.  + - / * then the second alert is displayed. the template literal grabs the relevant name to be used e.g. 
You clicked additon etc */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    /* for (let button of buttons) is the same code as for (let i= 0; i < buttons.length; i++) but is a more efficient and
     modern way of writing it */
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer()
            } else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType)

            }

        })
    }

    runGame("addition")
})
  
/** 
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed 
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() *25 + 1)
    let num2 = Math.floor(Math.random() *25 + 1)

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2) 
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }

    }

/**
 * Checks the answer against the first element in the returned
 * calculateCorrectAnswer array
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value)
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect) {
        alert("Hey! You got it right! :)")
        incrementScore()
    } else {
            alert(`Awww....you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
        incrementWrongAnswer()
    }

    runGame(calculatedAnswer[1])
}


/**
 * Gets the operands (the numbers) and the operator ( + - / or *)
 * directly from the DOM and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = document.getElementById("operator").innerText

    if (operator === "+") {
        return [operand1 + operand2, "additon"]  
    } else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Aborting!`
    }

}


/**
 * Gets the current score from the DOM and increments it by 1
 */
// on second line, must put ++ before variable name or won't see score updated in the browser 
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore

}

/**
 * Gets the currrent tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1
    document.getElementById("operand2").textContent = operand2
    document.getElementById("operator").textContent = "+"
}

function displaySubtractQuestion() {

}

function displayMultipleQuestion() {

}