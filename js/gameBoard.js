/* eslint-disable import/extensions */
const Board = (game) => {
  const drawBoard = () => {
    console.log('Clicked');
    // const data = ['cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 'cell9'];
    const cells = 3; // 3 items per row
    let count = 0; // Flag for current cell
    const table = document.createElement('table');
    let row = table.insertRow();

    // eslint-disable-next-line no-restricted-syntax
    for (const i of game.board) {
      const cell = row.insertCell();
      if (game.board[i] === 1) cell.innerHTML = 'X';
      if (game.board[i] === -1) cell.innerHTML = 'O';

      // cell.innerHTML = i;

      cell.addEventListener('click', (e) => {
        // eslint-disable-next-line no-alert
        // alert(`Clicked! ${i}`);
        game.newMove(i);
        // console.log(e.target);
      });

      count += 1;
      if (count % cells === 0) {
        row = table.insertRow();
      }
    }

    document.getElementById('board').appendChild(table);
  };

  return {
    drawBoard,
  };
};

export default Board;
