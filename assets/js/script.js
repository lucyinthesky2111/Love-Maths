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
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type")
                alert(`You clicked ${gameType}`)

            }

        })
    }
})
  
function runGame() {
    let num1 = Math.floor(Math.random() *25 + 1)
    let num2 = Math.floor(Math.random() *25 + 1)
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultipleQuestion() {

}