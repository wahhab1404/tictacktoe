const playerOne ='O'; // first player
const playerTow = 'x'; //second player

let turn =document.querySelector(".turn");
let gameBoard = [0,0,0,0,0,0,0,0,0];
// let gameBoard2 = [
//     [tr0,tr1,tr2],
//     [tr3,tr4,tr5],
//     [tr6,tr7,tr8],
//     [tr0,tr3,tr6],
//     [tr1,tr4,tr7],
//     [tr2,tr5,tr8],
//     [tr0,tr4,tr8],
//     [tr2,tr4,tr4],
    
// ];
// const winnerChick2 = function(){
//     if(i=0; i<gameBoard2.lenth; i++);{

//     }
// }
let playerTurn =true; // determin playing player 
const tr0 = document.querySelector("#tr0");
const turnChange = function(){ // Text the player turn 
    
    if (playerTurn == false) { 
        turn.innerText = "Player O It is your Turn" 
         };
    if (playerTurn == true) { 
        turn.innerText = "Player X ... it is your Turn"

        };

};

const cel = document.querySelector('.cel');

const winCheck = function(){ // wining conditions...
    if ( gameBoard[0] == 1 && gameBoard[1]== 1 && gameBoard[2]== 1){
        turn.innerText= "O WINS";
        console.log("works");
    }
    else if ( gameBoard[3] == 1 && gameBoard[4]== 1 && gameBoard[5]== 1)  {
        turn.innerText= "O WINS";
        console.log("works");
     }
    else if ( gameBoard[6] == 1 && gameBoard[7]== 1 && gameBoard[8]== 1) {
        turn.innerText= "O WINS";
        console.log("works");
     }
    else if ( gameBoard[0] == 1 && gameBoard[3]== 1 && gameBoard[9]== 1) {
        turn.innerText= "O WINS";
        console.log("works");
     }
    else if ( gameBoard[1] == 1 && gameBoard[4]== 1 && gameBoard[7]== 1) {
        turn.innerText= "O WINS";
        console.log("works");
     }
    else if ( gameBoard[2] == 1 && gameBoard[5]== 1 && gameBoard[8]== 1) {
        turn.innerText= "O WINS";
        console.log("works");
     }
    else if ( gameBoard[0] == 1 && gameBoard[4]== 1 && gameBoard[8]== 1) {
        turn.innerText= "O WINS";
        console.log("works");
     }
    else if ( gameBoard[2] == 1 && gameBoard[4]== 1 && gameBoard[6]== 1) {
        turn.innerText= "O WINS";
        console.log("works");
     }
    else if ( gameBoard[0] == 2 && gameBoard[1]== 2 && gameBoard[2]== 2) {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else if ( gameBoard[3] == 2 && gameBoard[4]== 2 && gameBoard[5]== 2)  {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else if ( gameBoard[6] == 2 && gameBoard[7]== 2 && gameBoard[8]== 2)  {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else if ( gameBoard[0] == 2 && gameBoard[3]== 2 && gameBoard[9]== 2)  {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else if ( gameBoard[1] == 2 && gameBoard[4]== 2 && gameBoard[7]== 2)  {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else if ( gameBoard[2] == 2 && gameBoard[5]== 2 && gameBoard[8]== 2)  {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else if ( gameBoard[0] == 2 && gameBoard[4]== 2 && gameBoard[8]== 2)  {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else if ( gameBoard[2] == 2 && gameBoard[4]== 2 && gameBoard[6]== 2)  {
        turn.innerText= "X WINS";
        console.log("works");
     }
    else console.log("Tie");

}

const onClick = function(){ // change player turn
    playerTurn = !playerTurn 
    if (playerTurn == true){
        this.innerText= playerOne; 
        this.style.backgroundColor= 'green';// change color of cell
        gameBoard[this.id.slice(-1)]=1;

        
        console.log(this.id);
        
    }
    if(playerTurn== false) {
        
        this.innerText= playerTow;
        this.style.backgroundColor= 'red';
        gameBoard[this.id.slice(-1)]=2;


    };
    turnChange();
    winCheck();
    this.removeEventListener("click",onClick);
    
    console.log(gameBoard); 
};


//event listeners 
tr0.addEventListener('click',onClick);
tr1.addEventListener('click',onClick);
tr2.addEventListener('click',onClick);
tr3.addEventListener('click',onClick);
tr4.addEventListener('click',onClick);
tr5.addEventListener('click',onClick);
tr6.addEventListener('click',onClick);
tr7.addEventListener('click',onClick);
tr8.addEventListener('click',onClick);