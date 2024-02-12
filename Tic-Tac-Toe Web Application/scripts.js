let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        updateCell(index);
        checkWinner();
        switchPlayer();
    }
}

function updateCell(index) {
    const cell = document.getElementsByClassName('cell')[index];
    cell.innerText = currentPlayer;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            declareWinner(gameBoard[a]);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        declareDraw();
    }
}

function declareWinner(winner) {
    gameActive = false;
    document.getElementById('status').innerText = `Player ${winner} wins!`;
}

function declareDraw() {
    gameActive = false;
    document.getElementById('status').innerText = 'It\'s a draw!';
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    // Clear cell text
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
    }

    document.getElementById('status').innerText = '';
}
