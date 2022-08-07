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
const turnmessage = document.getElementById('gameMessage')
// state

let fullBoard = gameState.board.flat(9)
console.log(boardArray, board, gameState)
console.log(fullBoard)


function startingTurn(){ //Randomizes the starting player
            turn.count = Math.round(Math.random());
            if(turn.count === 1){
                currentPlayer = !currentPlayer
            }
            return currentPlayer
        }

function buildInitialState() {
    fullBoard.fill(null)
    winMessage.innerText = ''
    win = false
    startingTurn()
    fullBoard.forEach( (element, idx) =>{
        turnmessage.innerText= currentPlayer ? (`'It is ${player1}'s Turn!`) : `'It is ${player2}'s turn'`
            boardArray[idx].innerText = element 
            console.log(boardArray)
        })
        
    boardArray.forEach(cell => {
    cell.removeEventListener('click',onBoardClick)
    cell.addEventListener('click', onBoardClick, {once:true})
})
        
        renderState()
}     
    
    let player1 = 'x'
    let player2 = 'o'




function isDraw() {
  return [...boardArray].every(cell => {
    if(cell){
    return cell.innerText === ('x') || cell.innerText === ('o') ;
    }
  })
}

function winCheck(){
    // let row1= boardArray.slice(0,2)
    // let row2= boardArray.slice(3,5)
    // let row3= boardArray.slice(6,8)
    winningCombinations.forEach(function(row) {
      let a = row[0], b = row[1], c = row[2];
      console.log(a,b,c, boardArray[a].innerHTML,boardArray[b].innerHTML,boardArray[c].innerHTML)

      if(boardArray[a].innerText!='' && boardArray[a].innerText==boardArray[b].innerText && boardArray[b].innerText==boardArray[c].innerText){
        return win=true
         }
    });
}


function renderState() {
    
    fullBoard.forEach((element, idx) => {
        
        turnmessage.innerText= currentPlayer ? (`'It is ${player1}'s Turn!`) : `'It is ${player2}'s turn'`
        if(element){
            boardArray[idx].innerText = element 
}})
}           
renderState()
// maybe a dozen or so helper functions for tiny pieces of the interface

function addText(cell, currentPlayer){
    cell.innerText = currentPlayer ? 'x' : 'o'
}

// function winCheck(){
//     if (fullBoard.length = 9)

function changeturn(){
        currentPlayer = !currentPlayer
    }
function onBoardClick() {
    console.log('clicked', event.target)
    let cellIndex = boardArray.findIndex((cell)=>{
    return cell === event.target
    }) 
    addText(event.target, currentPlayer)
    fullBoard[cellIndex] = currentPlayer ? 'x' : 'o'
    // winCheck()
    changeturn()
    let draw = isDraw()
    let winner = winCheck()
    if(draw){
        winMessage.innerText ='It is a Tie!'
    }
    if(win){
        fullBoard.forEach((cell=>{
            cell.removeEventListener('click', onBoardClick)
        }))
        winMessage.innerText=`${current} Won!`
    }

    console.log(winner)
    renderState()

   
}


  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state


const gameboard = document.getElementById('board');
// gameboard.addEventListener('click', onBoardClick); // 
buildInitialState()