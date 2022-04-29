const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')

}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton')
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 3;
let isBestOf2 = false;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
        player.display.textContent = player.score
        if (player.score == winningScore) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

er1.button.addEventListener('click', function () {
    updateScore(player1, player2)
})

player2.button.addEventListener('click', function () {
    updateScore(player2, player1)
})

resetButton.addEventListener('click', reset)

function reset() {
    player1.score = 0;
    player2.score = 0;
    player1.display.textContent = 0;
    player2.display.textContent = 0;
    isGameOver = false;
    player1.display.classList.remove('has-text-success', 'has-text-danger')
    player2.display.classList.remove('has-text-success', 'has-text-danger')
    player1.button.disabled = false;
    player2.button.disabled = false;
}


