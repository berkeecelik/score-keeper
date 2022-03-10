const p1 = {
    score: 0,
    button: document.querySelector("#buttonP1"),
    display: document.querySelector("#scoreP1"),
}
const p2 = {
    score: 0,
    button: document.querySelector("#buttonP2"),
    display: document.querySelector("#scoreP2"),
}
// const btnP1 = document.querySelector("#buttonP1");
// const btnP2 = document.querySelector("#buttonP2");
// const displayS1 = document.querySelector("#scoreP1");
// const displayS2 = document.querySelector("#scoreP2");

const scoreToSelect = document.querySelector("#scoreTo");
const btnReset = document.querySelector("#reset");

// let scoreP1 = 0;
// let scoreP2 = 0;
let firstTo = 5;
let isGameOver = false;

function updateScore(player, opponent)  {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === firstTo) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", () => {
    updateScore(p1, p2)
})
p2.button.addEventListener("click", () => {
    updateScore(p2, p1)
})

scoreToSelect.addEventListener('change', function () {
    firstTo = parseInt(this.value);
    reset();
})

btnReset.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    // displayS1.textContent = 0;
    // scoreP1 = 0;
    // displayS2.textContent = 0;
    // scoreP2 = 0;
    // displayS1.classList.remove("has-text-success", "has-text-danger");
    // displayS2.classList.remove("has-text-success", "has-text-danger");
    // btnP1.disabled = false;
    // btnP2.disabled = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}