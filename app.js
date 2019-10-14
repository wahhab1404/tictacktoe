const playerOne = 'O'; // first player
const playerTow = 'x'; //second player
const button = document.querySelector("button");
let counter = 0;



let turn = document.querySelector(".turn");
turn.innerText = " X Starts!"

let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // start clean game board

let xWinCount = document.querySelector(".xWinScore"); // x win counter
let oWinCount = document.querySelector(".oWinScore"); // o win counter 
let tieCount = document.querySelector(".tei"); 
// let scoreXtitle = document.querySelector('.scorexTitle');

let playerTurn = true; // determin playing player 
const tr0 = document.querySelector("#tr0");
const tr = document.querySelectorAll(".cl"); 
const remove = function(){           //Remove eventlistener if any one win and call it in checkWin function
    for (let i =0; i < tr.length ; i++) {
        tr[i].removeEventListener('click',onClick)
}
}
const turnChange = function () { // Text the player turn 

    if (playerTurn == false) {
        turn.innerText = "Player O It is your Turn"
        
    };
    if (playerTurn == true) {
        turn.innerText = "Player X ... it is your Turn"
        // scoreXtitle.style.backgroundColor="rgba()"

    };

};

const cel = document.querySelector('.cel');

const winCheck = function () { // wining conditions...
    if (gameBoard[0] == 1 && gameBoard[1] == 1 && gameBoard[2] == 1) {

        oWinCount = oWinCount + 1
        turn.innerText = "O WINS"
        button.innerText= "Playe New Game"
        document.body.style.backgroundImage = "green";
        remove()
        

    }
    else if (gameBoard[3] == 1 && gameBoard[4] == 1 && gameBoard[5] == 1) {
        turn.innerText = "O WINS"
        oWinCount = oWinCount + 1
        remove()

    }
    else if (gameBoard[6] == 1 && gameBoard[7] == 1 && gameBoard[8] == 1) {
        turn.innerText = "O WINS"
        oWinCount = oWinCount + 1
        remove()
    }
    else if (gameBoard[0] == 1 && gameBoard[3] == 1 && gameBoard[6] == 1) {
        turn.innerText = "O WINS"
        oWinCount = oWinCount + 1
        remove()
    }
    else if (gameBoard[1] == 1 && gameBoard[4] == 1 && gameBoard[7] == 1) {
        turn.innerText = "O WINS"
        oWinCount = oWinCount + 1
        remove()
    }
    else if (gameBoard[2] == 1 && gameBoard[5] == 1 && gameBoard[8] == 1) {
        turn.innerText = "O WINS"
        oWinCount = oWinCount + 1
        remove()   
    }
    else if (gameBoard[0] == 1 && gameBoard[4] == 1 && gameBoard[8] == 1) {
        turn.innerText = "O WINS"
        oWinCount = oWinCount + 1
        remove()
    }
    else if (gameBoard[2] == 1 && gameBoard[4] == 1 && gameBoard[6] == 1) {
        turn.innerText = "O WINS"
        oWinCount = oWinCount + 1
        remove()
    }
    else if (gameBoard[0] == 2 && gameBoard[1] == 2 && gameBoard[2] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        
        remove()
    }
    else if (gameBoard[3] == 2 && gameBoard[4] == 2 && gameBoard[5] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        remove()
    }
    else if (gameBoard[6] == 2 && gameBoard[7] == 2 && gameBoard[8] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        remove()

    }
    else if (gameBoard[0] == 2 && gameBoard[3] == 2 && gameBoard[6] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        remove()

    }
    else if (gameBoard[1] == 2 && gameBoard[4] == 2 && gameBoard[7] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        remove()
    }
    else if (gameBoard[2] == 2 && gameBoard[5] == 2 && gameBoard[8] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        remove()
    }
    else if (gameBoard[0] == 2 && gameBoard[4] == 2 && gameBoard[8] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        remove()
    }
    else if (gameBoard[2] == 2 && gameBoard[4] == 2 && gameBoard[6] == 2) {
        turn.innerText = "X WINS"
        xWinCount = xWinCount + 1
        remove()
    }
    else if (counter == 9) {
        console.log("Tie")
        turn.innerText = "Tie .. play again PLEASE !!";
        remove()
    }
    
}
const onClick = function () { // change player turn
    playerTurn = !playerTurn
    counter++;
    if (playerTurn == true) {
        this.innerText = playerOne;
        this.style.backgroundColor = 'rgba(0, 230, 10)';// change color of cell
        gameBoard[this.id.slice(-1)] = 1;



    }
    if (playerTurn == false) {

        this.innerText = playerTow;
        this.style.backgroundColor = 'red';
        gameBoard[this.id.slice(-1)] = 2;


    };
    turnChange();
    winCheck();
    this.removeEventListener("click", onClick);

    console.log(gameBoard);
};
const restartBut = document.querySelector(".gameRestart");

const addEvents = function(){
    for (let i =0; i < tr.length ; i++) {
        tr[i].addEventListener('click',onClick)
}
    
}

const gameRestart = function () {

    console.log("gameRestart works");

    counter = 0;
    gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i =0; i < gameBoard.length ; i++) {
            tr[i].style.backgroundColor=""
            tr[i].innerText=""
            tr[i].addEventListener('click',onClick)
            turnChange()
                   }

    
   
}
   
    addEvents();

  
    restartBut.addEventListener('click', gameRestart)
