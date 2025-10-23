console.log("to prove that it works")
let score = 0;
function addScore() {
    score ++;
    let myh1 = document.getElementById("score")
    myh1.innerText = `Score: ${score}`
}
let myButton = document.querySelector("#myButton")
myButton.addEventListener("click", addScore)
