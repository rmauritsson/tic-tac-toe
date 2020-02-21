import gameBoard from './gameBoard.js';

const hideForm = () => {
  const action = () => {
    gameBoard.hide();
  };
  return { action };
};

document.getElementById('startGameButton').addEventListener('click', action());
