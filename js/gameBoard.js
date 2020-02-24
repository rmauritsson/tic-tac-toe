/* eslint-disable import/extensions */
const Board = () => {
  const drawBoard = (game) => {
    console.log('Clicked');
    const data = ['cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 'cell9'];
    console.log(game.checkStatus());
    const cells = 3; // 3 items per row
    let count = 0; // Flag for current cell
    const table = document.createElement('table');
    let row = table.insertRow();

    // eslint-disable-next-line no-restricted-syntax
    for (const i of data) {
      const cell = row.insertCell();
      cell.innerHTML = i;

      cell.addEventListener('click', (e) => {
        // eslint-disable-next-line no-alert
        alert(`Clicked! ${i}`);
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
