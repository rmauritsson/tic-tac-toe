// import Player from './player';
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const Board = () => {
  let turn = 1;
  const emptySpace = 0;
  const player1 = 1;
  const player2 = 10;
  let board = Array(9).fill(emptySpace);

  const playerTurn = () => (turn % 2 === 1 ? 1 : 2);

  const isEmpty = () => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] !== emptySpace) return false;
    }

    return true;
  };

  const isFull = () => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] === emptySpace) return false;
    }

    return true;
  };

  const resetBoard = () => {
    board = Array(9).fill(0);
    turn = 1;
  };

  const validPosition = (position) => {
    if (position < 0 || position > 8) return false;
    if (isFull()) return false;
    if (board[position] !== 0) return false;

    return true;
  };

  const newMove = (position) => {
    if (validPosition(position) === false) {
      console.log('ERROR: Invalid position');
    } else {
      board[position] = playerTurn === 1 ? player1 : player2;
      turn += 1;
    }
  };

  // [0] [1] [2]
  // [3] [4] [5]
  // [6] [7] [8]
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

  // returns 0 if there is no winner
  // returns 1 if the winner is the player 1
  // returns 2 if the winner is the player 2
  // returns 3 if there is a draw
  const checkStatus = () => {
    for (let i = 0; i < 3; i += 1) {
      if (checkWinner(player1, i)) return 1;
      if (checkWinner(player2, i)) return 2;
    }

    return isFull() ? 3 : 0;
  };

  return {
    turn,
    board,
    playerTurn,
    isEmpty,
    isFull,
    resetBoard,
    validPosition,
    newMove,
    checkWinner,
    checkStatus,
  };
};

export default Board;
