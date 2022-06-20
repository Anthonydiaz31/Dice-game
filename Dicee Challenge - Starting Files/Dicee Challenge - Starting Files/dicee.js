//Random first number/pic
let randomNumber1 = Math.floor(Math.random() * 6) +1;

let randomDiceImage = "images/dice" + randomNumber1 +".png"

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage)

//Random second number/pic
let randomNumber2 = Math.floor(Math.random() * 6) + 1

let secondDiceImage = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage)


 if (randomNumber1 > randomNumber2) {
 document.querySelector("h1").innerHTML= "🎉Player 1 wins"
 } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins🏆"
 } else {
    document.querySelector("h1").innerHTML = "Tie😨"
 }


 
 const restartButton = document.querySelector(".restart").addEventListener("click", function() {
   location.reload()
 })
