let gameState = {
    players: ["x", "o"],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],

    ],
    turn: {
        count: 0,
        value: " ",
    },
    fullBoard:[],
    currentPlayer: true,
};

let {players, board, turn, currentPlayer } = gameState
const boardArray = Array.from(document.querySelectorAll('div.cell'))

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let win 
let current = currentPlayer ? 'X' : 'O'
const title = document.getElementById('title');
const p1 = document.getElementsByName('p1');
const p2 = document.getElementsByName('p2');
const msg = document.getElementById('message');
title.addEventListener('click', function () {
    let player1 = document.getElementById('p1').value;
    let player2 = document.getElementById('p2').value;
    if (p1.name ||  p2.name) {
        msg.innerHTML = p1.name+ '<br />' + p2.name + ' : ' + p2.val;
    }
});

const winMessage = document.getElementById('winMessage')
const winText = document.querySelector('[winText]')

const restartbtn = document.getElementById('restartButton')
restartbtn.addEventListener("click", buildInitialState)
// state

let fullBoard = gameState.board.flat(9)
console.log(boardArray, board, gameState)
console.log(fullBoard)


function startingTurn(){
            turn.count = Math.round(Math.random());
            if(turn.count === 1){
                gameState.currentPlayer = false
            }
            return
        }

function buildInitialState() {
    fullBoard.forEach( (e) =>{
            e = null
        })
    boardArray.forEach(cell => {
    cell.removeEventListener('click',onBoardClick)
    cell.addEventListener('click', onBoardClick, {once:true})
})
        startingTurn()
        renderState()
        
    
    

    }
    let player1 = 'x'
    let player2 = 'o'
function isDraw() {
  return [...fullBoard].every(cell => {
    return cell.contains('x') || cell.contains('o')
  })
}



const turnmessage = document.getElementById('gameMessage')

function renderState() {
    
    fullBoard.forEach((element, idx) => {
        
        turnmessage.innerText= currentPlayer ? (`'It is ${player1}'s Turn!`) : `'It is ${player2}'s turn'`
        if(element){
            boardArray[idx].innerText = element }})
}
renderState()
// maybe a dozen or so helper functions for tiny pieces of the interface

function addText(cell, currentPlayer){
    cell.innerText = currentPlayer ? 'x' : 'o'
}

function winCheck(){
    if (fullBoard.length = 9)
    
}
function changeturn(){
        
        currentPlayer = !currentPlayer
        // msg.innerText=(`It's ${current}'s turn`)
    }
// listeners
function onBoardClick() {
    console.log('clicked', event.target)
    let cellIndex = boardArray.findIndex((cell)=>{
    console.log(event.target)
    return cell === event.target
    }) 


    addText(event.target, currentPlayer)
    fullBoard[cellIndex] = currentPlayer ? 'x' : 'o'
    winCheck()
    changeturn()
    renderState()

   
}


  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state


const gameboard = document.getElementById('board');
// gameboard.addEventListener('click', onBoardClick); // 
buildInitialState()