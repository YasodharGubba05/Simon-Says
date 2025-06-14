let userSeq=[];
let gameSeq=[];
let gameStarted=false;
let level=0;
let head2=document.querySelector('h2');
let colors=["red","yellow","green","purple"];

document.addEventListener("keypress",function(){
    if(gameStarted==false) {
        gameStarted=true;
        console.log("game started");
    }
    levelup()
})

function levelup() {
    level++;
    head2.innerText=`level ${level}`;

}

function getRandomColor() {
     let number = Math.floor(Math.random()*3);
}
