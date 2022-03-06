
let board = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
let chance = 0;
let foundWinner = false;

const rowCheck = (board) => {
    for (let i = 0; i < board.length; i++) {
        if ((board[i][0] === 1 && board[i][1] === 1 && board[i][2] === 1) ||
            (board[i][0] === 0 && board[i][1] === 0 && board[i][2] === 0)) {
            return board[i][0];
        }
    }
    return -1;
}

const colCheck = (board) => {
    for (let i = 0; i < board[0].length; i++) {
        if ((board[0][i] === 1 && board[1][i] === 1 && board[2][i] === 1) ||
            (board[0][i] === 0 && board[1][i] === 0 && board[2][i] === 0)) {
            return board[0][i];
        }
    }
    return -1;
}

const diagonalCheck = (board) => {
    if ((board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
        (board[0][0] === 0 && board[1][1] === 0 && board[2][2] === 0)) {
        return board[0][0];
    }
    else if ((board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) ||
        (board[0][2] === 0 && board[1][1] === 0 && board[2][0] === 0)) {
        return board[0][2];
    }
    return -1;
}



function checkForWin(board) {
    let rowWinner = rowCheck(board);
    let colWinner = colCheck(board);
    let diagonalWinner = diagonalCheck(board);

    if (rowWinner !== -1)
        return rowWinner;
    else if (colWinner !== -1)
        return colWinner;
    else if (diagonalWinner !== -1)
        return diagonalWinner;
    return -1;
}

function perform(row, col) {
    let boxnum = 3 * row + col;
    var box = document.getElementById(`${boxnum}`);
    if (chance % 2 === 0 && board[row][col] === -1 && !foundWinner) {
        box.innerText = "x";
        board[row][col] = 1;
        chance++;
    }
    else if (chance % 2 !== 0 && board[row][col] === -1 && !foundWinner) {
        box.innerText = "o";
        board[row][col] = 0;
        chance++;
    }
    let winner = checkForWin(board);
    if (chance >= 9 && winner === -1) {
        var resultDisplay = document.getElementById("result-box");
        resultDisplay.value = "It is a TIE!"
    }
    if (winner !== -1) {
        foundWinner = true;
        let players = playerInfo();
        if (players === 0) {
            players = { "player1": "Player 1", "player2": "Player 2" };
        }
        var resultDisplay = document.getElementById("result-box");
        resultDisplay.value = "Winner is : ".concat(winner === 1 ? `${players.player1}` : `${players.player2}`);
        console.log("Winner is : ", winner === 1 ? `${players.player1}` : `${players.player2}`);
    }

}

const playerInfo = () => {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;

    if (player1 === '' || player2 === '')
        return 0;
    return { "player1": player1, "player2": player2 };
}

const reset = () => {
    board = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    var displayBoard = document.getElementsByClassName("board")[0];
    for (let i = 0; i < displayBoard.childElementCount; i++) {
        for (let j = 0; j < displayBoard.children[i].childElementCount; j++) {
            displayBoard.children[i].children[j].children[0].innerText = "_";
        }
    }
    document.getElementById("player1").value = '';
    document.getElementById("player2").value = '';
    chance = 0;
    foundWinner = false;
    document.getElementById("result-box").value = "Result...";
}