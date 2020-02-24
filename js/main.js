/* eslint-disable import/extensions */
import Game from './gameLogic.js';
import Board from './gameBoard.js';

document.getElementById('gameButton').onclick = () => {
  Board(Game()).drawBoard();
  document.getElementById('gameButton').innerHTML = 'RESET GAME';
};
