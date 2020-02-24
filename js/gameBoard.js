/* eslint-disable no-console */
/* eslint-disable import/extensions */
const Board = (game) => {
  let status;

  const showWinner = () => {
    const winner = document.getElementById('winner');
    switch (status) {
      case 1:
        winner.innerHTML = 'Player 1 is the winner';
        break;
      case 2:
        winner.innerHTML = 'Player 2 is the winner';
        break;
      case 3:
        winner.innerHTML = 'It\'s a draw!';
        break;
      default:
        winner.innerHTML = `Player ${game.playerTurn()}, is your turn.`;
    }
  };

  const drawBoard = () => {
    const cells = 3; // 3 items per row
    const table = document.createElement('table');
    const board = document.getElementById('board');
    let count = 0; // Flag for current cell
    let row = table.insertRow();
    board.innerHTML = '';
    showWinner();

    // eslint-disable-next-line no-restricted-syntax
    for (let i = 0; i < game.board.length; i += 1) {
      const cell = row.insertCell();
      cell.id = `cell-${i}`;
      cell.class = 'cellClass';

      switch (game.board[i]) {
        case 1:
          cell.innerHTML = 'X';
          break;
        case -1:
          cell.innerHTML = 'O';
          break;
        default:
          cell.innerHTML = '.';
      }

      // cell.innerHTML = i;

      cell.addEventListener('click', (e) => {
        // eslint-disable-next-line no-alert
        // alert(`Clicked! ${i}`);
        status = game.newMove(i);
        drawBoard();
        // console.log(e.target);
      });

      count += 1;
      if (count % cells === 0) {
        row = table.insertRow();
      }
    }

    board.appendChild(table);
  };

  return {
    drawBoard,
  };
};

export default Board;
