let userSeq = [];
let gameSeq = [];
let gameStarted = false;
let level = 0;
let head2 = document.querySelector('h2');
let colors = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function () {
    if (gameStarted == false) {
        gameStarted = true;
        console.log("game started");
        levelup();
    }
});

function levelup() {
    userSeq = [];
    level++;
    head2.innerText = `level ${level}`;
    
    let randIndx = Math.floor(Math.random() * 4);
    let randColor = colors[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randColor);
    gameFlash(randBtn);
    gameSeq.push(randColor);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        head2.innerHTML = `Game Over! Your score was :<b> ${level} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    gameFlash(btn);

    let userColor = btn.classList[1];
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameStarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


