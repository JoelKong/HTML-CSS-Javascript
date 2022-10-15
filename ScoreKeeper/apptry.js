const p1 = {
    index: 0,
    score: 0,
    scoreDisplay: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}

const p2 = {
    index: 1,
    score: 0,
    scoreDisplay: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

const playingTo = document.querySelector('#playto');
const reset = document.querySelector('#reset');
let winningScore = 3;
let winLose = false;
let totalScore = [0, 0];


function updateScores(player, opponent) {
    if (!winLose) {
        player.score += 1;
        player.scoreDisplay.textContent = player.score;
        totalScore[player.index] = player.score;
        let totalPlayed = totalScore.reduce((total, current) => total + current)

        if (totalPlayed === winningScore) {
            //if (player.score === winningScore) {
            winLose = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            if (player.score > opponent.score) {
                player.scoreDisplay.classList.add('has-text-success');
                opponent.scoreDisplay.classList.add('has-text-danger');
            }
            else if (player.score < opponent.score) {
                player.scoreDisplay.classList.add('has-text-danger');
                opponent.scoreDisplay.classList.add('has-text-success');
            }
            else {
                player.scoreDisplay.classList.add('has-text-danger');
                opponent.scoreDisplay.classList.add('has-text-danger');
                setTimeout(() => alert('Its a draw!'), 200);
            }

        }
    }
}



p1.button.addEventListener('click', () => updateScores(p1, p2));

p2.button.addEventListener('click', () => updateScores(p2, p1));

playingTo.addEventListener('change', function () { //cant use arrows for this.value
    winningScore = parseInt(this.value); //this.value will be a string at first
    resetfunc();
})


reset.addEventListener('click', resetfunc);


function resetfunc() {
    winLose = false;
    totalScore = [0, 0];
    for (let p of [p1, p2]) {
        p.score = 0;
        p.scoreDisplay.innerText = 0;
        p.scoreDisplay.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}




