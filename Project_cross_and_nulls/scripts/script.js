let boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let score = [0, 0, 0];




let player = 1;
let gameOver = false;


const cellElements = document.querySelectorAll(".cell");
const result = document.querySelector("#result");
const body = document.querySelector("body");
const restartGame = document.getElementById("restartGame");
const cross_score = document.getElementById("cross_scrore");
const tie_scrore = document.getElementById("tie_scrore");
const null_scrore = document.getElementById("null_scrore");

console.log(body);



cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        // console.log("click" + index);
        placeMarker(index);
    });
});

function placeMarker(index) {
    let col = index % 3;
    let row = (index - col) / 3;

    if (boardData[row][col] == 0 && gameOver == false) {
        boardData[row][col] = player;

        player *= -1;
        drawMarkers();
        checkResult();
    }
}

function drawMarkers() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (boardData[row][col] == 1) {
                cellElements[(row * 3) + col].classList.add("cross");
            } else if (boardData[row][col] == -1) {
                cellElements[(row * 3) + col].classList.add("circle");
            }
        }
    }
}

function checkResult() {
    for (let i = 0; i < 3; i++) {
        let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
        let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
        if (rowSum == 3 || colSum == 3) {
            endGame(1);
            return;
        } else if (rowSum == -3 || colSum == -3) {
            endGame(2);
            return;
        }
    }

    let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
    let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
    if (diagonalSum1 == 3 || diagonalSum2 == 3) {
        endGame(1);
        return;
    } else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
        endGame(2);
        return;
    }

    if (boardData[0].indexOf(0) == -1 &&
        boardData[1].indexOf(0) == -1 &&
        boardData[2].indexOf(0) == -1) {
        endGame(0);
        return;
    }
}

function endGame(winner) {
    gameOver = true;
    if (winner == 0) {
        result.innerText = "tie - i`ts when nobody wins";
        score[1]++;
        tie_scrore.innerText = score[1];
        showResult();
    } else {
        result.innerText = `player ${winner} wins!`;
        if (winner == 1) {
            score[0]++;
            cross_score.innerText = score[0];
        }else if(winner == 2){
            score[2]++;
            null_scrore.innerText = score[2];
        }
        showResult();
    }
}


restartGame.addEventListener("click", () => {
    boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    player = 1;
    gameOver = false;

    cellElements.forEach(cell => {
        cell.classList.remove("cross", "circle");
    });
    result.innerText = "";
    result.style.display = ("none");
    restartGame.style.display = ("none");
});

function showResult() {
    result.style.display = ("block");
    restartGame.style.display = ("block");
    setTimeout(function () {
        result.style.display = ("none");
        result.innerText = "";
    }, 3000);
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    body.classList.toggle("dark_mode");
});