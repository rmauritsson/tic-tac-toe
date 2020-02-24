/* eslint-disable import/extensions */
import Game from './gameLogic.js';
import Board from './gameBoard.js';

const game = Game();
const board = Board(game);

game.newMove(0);
game.newMove(1);
game.newMove(2);
game.newMove(3);
game.newMove(4);

document.getElementById('gameButton').onclick = () => board.drawBoard();
