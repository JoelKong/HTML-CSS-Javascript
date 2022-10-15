const p1 = {
    score: 0,
    scoreDisplay: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}

const p2 = {
    score: 0,
    scoreDisplay: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

const playingTo = document.querySelector('#playto');
const reset = document.querySelector('#reset');
let winningScore = 3;
let winLose = false;


function updateScores(player, opponent) {
    if (!winLose) {
        player.score += 1;
        player.scoreDisplay.textContent = player.score;

        if (player.score === winningScore) {
            winLose = true;
            player.scoreDisplay.classList.add('has-text-success');
            opponent.scoreDisplay.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}



p1.button.addEventListener('click', () => updateScores(p1, p2));

p2.button.addEventListener('click', () => updateScores(p2, p1));

playingTo.addEventListener('change', function () {
    winningScore = parseInt(this.value); //this.value will be a string at first
    resetfunc();
})


reset.addEventListener('click', resetfunc);


function resetfunc() {
    winLose = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.scoreDisplay.innerText = 0;
        p.scoreDisplay.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}


