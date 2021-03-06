import DrawChessboard from './drawing/index.js';
import initialGameState from './chess-logic/gameInit.js';
import Move from './chess-logic/move.js';
import Piece from './chess-pieces/index.js';

(document.onload = () => {
    let chessBoardElem = document.getElementById('chess-board');
    let turn = document.getElementById('turn');
    let timer = document.getElementById('timer');
    let lostWhitePieces = document.getElementById('white-pieces');
    let lostBlackPieces = document.getElementById('black-pieces');

    let gameState = initialGameState.map(
        (row, rowNum) => row.map(
            (cell, colNum) => {
                if(cell === 'blank'){
                    return null;
                }else{
                    const pc = cell.split('_')
                    return Piece[pc[1]](pc[0], rowNum, colNum)
                }
            }
        )
    );
    
    let move = new Move(gameState, chessBoardElem, turn, timer, lostWhitePieces, lostBlackPieces);

    const drawCtx = new DrawChessboard();
    drawCtx.drawBoard(gameState, chessBoardElem);

    chessBoardElem.addEventListener('click', (event) => {
        const target = event.target.closest('.board-cell');

        if(!target){
            return;
        }        
        
        const tId = target.id;
        const cellPos = tId.split('_');

        if(!move.started){
            move.moveFrom(+cellPos[0], +cellPos[1]);            
        }else{
            move.moveTo(+cellPos[0], +cellPos[1]);  
        }
    })

})();