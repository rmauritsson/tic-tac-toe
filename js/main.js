import gameBoard from './gameBoard';

function drawBoard() {
  const board = document.getElementById('board');
  gameBoard.draw(board);
}

drawBoard();
