const btnP1 = document.querySelector("#buttonP1");
const btnP2 = document.querySelector("#buttonP2");
const btnReset = document.querySelector("#reset");
const displayS1 = document.querySelector("#scoreP1");
const displayS2 = document.querySelector("#scoreP2");
const scoreToSelect = document.querySelector("#scoreTo");

let scoreP1 = 0;
let scoreP2 = 0;
let firstTo = 5;
let isGameOver = false;

btnP1.addEventListener("click", () => {
    if (!isGameOver) {
        scoreP1 += 1;
        if (scoreP1 === firstTo) {
            isGameOver = true;
        }
        displayS1.textContent = scoreP1;
    }
})
btnP2.addEventListener("click", () => {
    if (!isGameOver){
        scoreP2 += 1;
        if (scoreP2 === firstTo) {
            isGameOver = true;
        }
        displayS2.textContent = scoreP2;
    }
})

scoreToSelect.addEventListener('change', function () {
    firstTo = parseInt(this.value);
    reset();
})

btnReset.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    displayS1.textContent = 0;
    scoreP1 = 0;
    displayS2.textContent = 0;
    scoreP2 = 0;
    console.log("reset clicked!!");
}