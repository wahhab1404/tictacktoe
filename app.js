
let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // start clean game board


const playerOne = 'O'; // first player
const playerTow = 'x'; //second player
//------------- Selectors
const button = document.querySelector("button");
let xWinCount = document.querySelector(".xWinScore"); // x win counter
let oWinCount = document.querySelector(".oWinScore"); // o win counter 
const roundTag = document.querySelector(".roundHead");// to use it in round counter 

let counter = 0;
let xscore = 0;
let oscore = 0;
let roundCounter = 1;



let turn = document.querySelector(".turn");
turn.innerText = " X Starts!"




// Adding round counter
roundTag.innerText = "Round " + roundCounter

let playerTurn = true; // determin playing player 
const tr0 = document.querySelector("#tr0");
const tr = document.querySelectorAll(".cl");
const remove = function () {           //Remove eventlistener if any one win and call it in checkWin function
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeEventListener('click', onClick)
    }
}
const turnChange = function () { // ANNOUNCE PLAYER TURN IN THE BOTTOM 

    if (playerTurn == false) {
        turn.innerText = "O Turn"
        turn.style.color = "blue"

    };
    if (playerTurn == true) {
        turn.innerText = " X Turn"
        turn.style.color = "yellow"
        // scoreXtitle.style.backgroundColor="rgba()"

    };

};

const cel = document.querySelector('.cel');

// wining conditions...
const winCheck = function () { // wining conditions...
    if (gameBoard[0] == 1 && gameBoard[1] == 1 && gameBoard[2] == 1) {
        turn.innerText = "O WINS" 
        oscore++; 
        button.innerText = "Playe New Game"
        document.body.style.backgroundImage = "green";
        remove()


    }
    else if (gameBoard[3] == 1 && gameBoard[4] == 1 && gameBoard[5] == 1) {
        turn.innerText = "O WINS"
        oscore++;
        button.innerText = "Playe New Game"
        remove()

    }
    else if (gameBoard[6] == 1 && gameBoard[7] == 1 && gameBoard[8] == 1) {
        turn.innerText = "O WINS"
        oscore++;
        button.innerText = "Playe New Game"
        remove()
    }
    else if (gameBoard[0] == 1 && gameBoard[3] == 1 && gameBoard[6] == 1) {
        turn.innerText = "O WINS"
        oscore++;
        button.innerText = "Playe New Game"
        remove()
    }
    else if (gameBoard[1] == 1 && gameBoard[4] == 1 && gameBoard[7] == 1) {
        turn.innerText = "O WINS"
        button.innerText = "Playe New Game"
        oscore++;
        remove()
    }
    else if (gameBoard[2] == 1 && gameBoard[5] == 1 && gameBoard[8] == 1) {
        turn.innerText = "O WINS"
        button.innerText = "Playe New Game"
        oscore++;
        remove()
    }
    else if (gameBoard[0] == 1 && gameBoard[4] == 1 && gameBoard[8] == 1) {
        turn.innerText = "O WINS"
        button.innerText = "Playe New Game"
        oscore++;
        remove()
    }
    else if (gameBoard[2] == 1 && gameBoard[4] == 1 && gameBoard[6] == 1) {
        turn.innerText = "O WINS"
        oscore++;
        button.innerText = "Playe New Game"
        remove()
    }
    else if (gameBoard[0] == 2 && gameBoard[1] == 2 && gameBoard[2] == 2) {
        turn.innerText = "X WINS";
        xscore++;

        turn.style.color = 'red'
        roundCounter++;
        button.innerText = "Playe New Game"

        remove()
    }
    else if (gameBoard[3] == 2 && gameBoard[4] == 2 && gameBoard[5] == 2) {
        turn.innerText = "X WINS"
        xscore++;
        button.innerText = "Playe New Game"
        remove()
    }
    else if (gameBoard[6] == 2 && gameBoard[7] == 2 && gameBoard[8] == 2) {
        turn.innerText = "X WINS"
        xscore++;
        button.innerText = "Playe New Game"
        remove()

    }
    else if (gameBoard[0] == 2 && gameBoard[3] == 2 && gameBoard[6] == 2) {
        turn.innerText = "X WINS"
        xscore++;
        button.innerText = "Playe New Game"
        remove()

    }
    else if (gameBoard[1] == 2 && gameBoard[4] == 2 && gameBoard[7] == 2) {
        turn.innerText = "X WINS"
        xscore++;
        button.innerText = "Playe New Game"
        remove()
    }
    else if (gameBoard[2] == 2 && gameBoard[5] == 2 && gameBoard[8] == 2) {
        turn.innerText = "X WINS"
        button.innerText = "Playe New Game"
        xscore++;
        remove()
    }
    else if (gameBoard[0] == 2 && gameBoard[4] == 2 && gameBoard[8] == 2) {
        turn.innerText = "X WINS"
        xscore++;
        button.innerText = "Playe New Game"
        remove()
    }
    else if (gameBoard[2] == 2 && gameBoard[4] == 2 && gameBoard[6] == 2) {
        turn.innerText = "X WINS"
        xscore++;
        button.innerText = "Playe New Game"
        remove()
    }
    else if (counter == 9) {
        console.log("Tie")
        turn.innerText = "Tie ..WTF!!"
        button.innerText = "Playe New Game"
        
        remove()
    }
    // STORE VALUES OF SCORS
    xWinCount.innerText = xscore;
    oWinCount.innerText = oscore;
    
    

}
const onClick = function () { // change player turn
    
    playerTurn = !playerTurn
    counter++;
    if (playerTurn == true) {
        this.innerText = playerOne;
        button.style.backgroundColor = "blue"
        this.style.color = 'rgb(3, 18, 51)';// change color of cell
        gameBoard[this.id.slice(-1)] = 1; // slice last num of ID 



    }
    if (playerTurn == false) {

        this.innerText = playerTow;
        this.style.color = 'rgb(227, 179, 7)';
        button.style.backgroundColor = "blue"
        gameBoard[this.id.slice(-1)] = 2;


    };
    turnChange();
    winCheck();
    this.removeEventListener("click", onClick);

};

//  RESET AND START GAME BUTTONS
const restartBut = document.querySelector(".gameRestart");
const buttonNew = document.querySelector(".newGame");

const addEvents = function () {
    for (let i = 0; i < tr.length; i++) {
        tr[i].addEventListener('click', onClick)
    }

}


// RESTART / RESET THE GAME 
    const gameRest = function () {
        counter = 0;
        // REST THE BOARD ARRAY 
        gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        
            for (let i = 0; i < gameBoard.length; i++) {
                // REST Game Board Color and TEXT
                  tr[i].style.backgroundColor = ""
                  tr[i].innerText = ""
                // RESTOR EVENTLISTENERS
                  tr[i].addEventListener('click', onClick)
        // CHANGE START TURN EACH RESTART
                 turnChange()
            }
        // ADD ROUND COUNTER AFTER EACH RESTART
         roundCounter++;
         roundTag.innerText = "Round " + roundCounter;
    
}

addEvents();
// Restart Event
restartBut.addEventListener('click', gameRest)

