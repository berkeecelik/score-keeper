const btnP1 = document.querySelector("#buttonP1");
const btnP2 = document.querySelector("#buttonP2");
const btnReset = document.querySelector("#reset");
const displayS1 = document.querySelector("#scoreP1");
const displayS2 = document.querySelector("#scoreP2");

let scoreP1 = 0;
let scoreP2 = 0;

let scoreTo = 5;
let isGameOver = false;

btnP1.addEventListener("click", () => {
    if (!isGameOver){
        scoreP1 += 1;
        if (scoreP1 === scoreTo) {
            isGameOver = true;
        }
        displayS1.textContent = scoreP1;
    }
})
btnP2.addEventListener("click", () => {
    if (!isGameOver){
        scoreP2 += 1;
        if (scoreP2 === scoreTo) {
            isGameOver = true;
        }
        displayS2.textContent = scoreP2;
    }
})

btnReset.addEventListener("click", () => {
    isGameOver = false;
    displayS1.textContent = 0;
    scoreP1 = 0;
    displayS2.textContent = 0;
    scoreP2 = 0;
    console.log("reset clicked!!");
})