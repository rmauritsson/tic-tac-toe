/* eslint-disable import/extensions */
import gameBoard from './gameBoard.js';
import Board from './gameLogic.js';

const hideForm = () => {
  const action = () => {
    gameBoard.hide();
  };
  return { action };
};

const game = Board();
game.handleClick();
game.newMove(0);
game.newMove(1);



document.getElementById('turn').innerHTML = `Check status: ${game.board}`;
document.getElementById('player').innerHTML = `Player: ${game.playerTurn()}`;

//document.getElementById('startGameButton').addEventListener('click', action);
