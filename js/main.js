/* eslint-disable import/extensions */
import Board from './gameBoard.js';
import Game from './gameLogic.js';

const game = Game();
const board = Board(game);

document.getElementById('gameButton').onclick = () => board.drawBoard();
