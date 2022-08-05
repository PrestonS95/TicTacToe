const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
const boardArray = Array.from(document.querySelectorAll('div.cell'))
console.log(boardArray)
// state
function buildBoard(){
    board
    for (let i = 0; i < 9; i++){

        const row = document.createElement('div')
        document.createAttribute('cell')
        div.innerText = "hello"
        board.append(row)
}
buildBoard()
}
function buildInitialState() {
    
    

    }
// buildInitialState()
// render
function renderState() {

}

let turnCount = Math.round(Math.random())
// maybe a dozen or so helper functions for tiny pieces of the interface

if(turnCount === (2 % 1 == 0)){
let player1 =  gameState.player[0]
}else{
    let player1 = 'o'
}
// listeners
function onBoardClick(e) {
    let cell = e.target
    console.log(e.target)
    cell.append(gameState.players.forEach(player => {
        if(player==
    }))
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc