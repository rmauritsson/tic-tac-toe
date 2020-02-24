/* eslint-disable import/extensions */
import Game from './gameLogic.js';
import Board from './gameBoard.js';

const game = Game();
const board = Board(game);


document.getElementById('gameButton').onclick = () => board.drawBoard();
