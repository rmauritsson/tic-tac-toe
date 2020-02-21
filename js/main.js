import gameBoard from './gameBoard';

const hideForm = () => {
  const action = () => {
    gameBoard.hide();
  };
  return { action };
};

document.getElementById('startGameButton').addEventListener('click', action());
