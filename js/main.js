/* eslint-disable import/extensions */
import Game from './gameLogic.js';
import Board from './gameBoard.js';

const game = Game();
const board = Board(game);

document.getElementById('resetButtonDiv').style.visibility = 'collapse'
document.getElementById('gameButton').onclick = () => startGame();

const startGame = () => {
  document.getElementById('gameButtonDiv').style.visibility = 'collapse'
  document.getElementById('resetButtonDiv').style.visibility = 'visible'
  //document.getElementById('gameButtonDiv').onclick = () => game.resetBoard();
  board.drawBoard();
}
