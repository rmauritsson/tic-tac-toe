/* eslint-disable max-len */

const Game = () => {
  const emptySpace = 0;
  const p1value = 1;
  const p2value = -1;
  let turn = 1;
  let board = Array(9).fill(emptySpace);

  // Returns the Player number from the actual turn
  const playerTurn = () => (turn % 2 === 1 ? 1 : 2);

  // Returns true if the board is empty
  const isEmpty = () => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] !== emptySpace) return false;
    }

    return true;
  };

  // Returns true if the board is full
  const isFull = () => {
    for (let i = 0; i < board.length; i += 1) {
      if (board[i] === emptySpace) return false;
    }

    return true;
  };

  // Makes every space of the board empty and resets the turn to 1
  const resetBoard = () => {
    board = Array(9).fill(0);
    turn = 1;
  };

  // Returns the number of the winner player, 3 if is a draw, 0 if there is no winner
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

  // Returns true if the position is valid for a new turn
  const validPosition = (position) => {
    if (position < 0 || position > 8) {
      // console.log('ERROR: Position can only be between 0 and 8');
      return false;
    }
    if (isFull()) {
      // console.log('ERROR: The board is full, no more moves available');
      return false;
    }
    if (board[position] !== 0) {
      // console.log('ERROR: Position already taken');
      return false;
    }

    if (checkStatus() === 1 || checkStatus() === 2) {
      // console.log('ERROR: Can\'t make any moves, there is already a winner');
      return false;
    }

    return true;
  };

  // Marks the board using the position argument. Returns true if a new move was successful.
  const newMove = (position) => {
    if (!validPosition(position)) return checkStatus();

    board[position] = playerTurn() === 1 ? p1value : p2value;
    turn += 1;

    return checkStatus();
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
    checkStatus,
  };
};

export default Game;
