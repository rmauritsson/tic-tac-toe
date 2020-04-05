/* eslint-disable max-len */
/* eslint-disable no-loop-func */

const Board = (player1, player2) => {
  const emptySpace = 0;
  const p1value = 1;
  const p2value = -1;
  const p1name = player1.getName();
  const p2name = player2.getName();
  const board = Array(9).fill(emptySpace);
  let turn = 1;
  let status;

  const setTurn = (number) => {
    turn = number;
  };

  const playerTurn = (number = 1, p1 = p1name, p2 = p2name) => {
    if (turn % 2 === number) {
      return [p1, 1];
    }
    return [p2, 2];
  };

  const isFull = () => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] === emptySpace) return false;
    }

    return true;
  };

  const checkStatus = () => {
    const checkWinner = (player, index) => {
      for (let i = 0; i < 3; i += 1) {
        if ((board[0 + (index * 3)] + board[1 + (index * 3)] + board[2 + (index * 3)] === player * 3)
        || (board[0 + index] + board[3 + index] + board[6 + index] === player * 3)
        || (board[0 + (index * 2)] + board[4] + board[8 - (index * 2)] === player * 3 && index < 2)) {
          return true;
        }
      }

      return false;
    };

    for (let i = 0; i < 3; i += 1) {
      if (checkWinner(p1value, i)) return 1;
      if (checkWinner(p2value, i)) return 2;
    }

    return isFull() ? 3 : 0;
  };

  const validPosition = (position) => {
    if (position < 0 || position > 8) {
      return false;
    }
    if (isFull()) {
      return false;
    }
    if (board[position] !== 0) {
      return false;
    }

    if (checkStatus() === 1 || checkStatus() === 2) {
      return false;
    }

    return true;
  };

  const newMove = (position) => {
    if (!validPosition(position)) return checkStatus();
    board[position] = playerTurn()[1] === 1 ? p1value : p2value;
    turn += 1;

    return checkStatus();
  };

  const showWinner = () => {
    const winner = document.getElementById('winner');
    switch (status) {
      case 1:
        winner.innerHTML = `${playerTurn(0)[0]}, is the winner!`;
        break;
      case 2:
        winner.innerHTML = `${playerTurn(0)[0]}, is the winner!`;
        break;
      case 3:
        winner.innerHTML = 'It\'s a draw!';
        break;
      default:
        winner.innerHTML = `${playerTurn()[0]}, is your turn.`;
    }
  };

  const drawBoard = (NewBoard) => {
    const cells = 3;
    const table = document.createElement('table');
    const boardTable = document.getElementById('board');
    let count = 0;
    let row = table.insertRow();
    boardTable.innerHTML = '';
    showWinner();

    for (let i = 0; i < NewBoard.length; i += 1) {
      const cell = row.insertCell();
      cell.id = `cell-${i}`;
      cell.class = 'cellClass';
      switch (NewBoard[i]) {
        case 1:
          cell.innerHTML = player1.symbol;
          break;
        case -1:
          cell.innerHTML = player2.symbol;
          break;
        default:
          cell.innerHTML = ' ';
      }

      cell.addEventListener('click', () => {
        status = newMove(i);
        drawBoard(NewBoard);
      });

      count += 1;
      if (count % cells === 0) {
        row = table.insertRow();
      }
    }

    boardTable.appendChild(table);
  };

  return {
    board,
    setTurn,
    drawBoard,
    playerTurn,
    showWinner,
    newMove,
  };
};

export default Board;
