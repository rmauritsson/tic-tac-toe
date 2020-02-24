// import Player from './player';
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const Game = () => {
  const emptySpace = 0;
  const p1value = 1;
  const p2value = -1;
  const playerName = {
    player1: 'Player 1',
    player2: 'Player 2',
  };
  let turn = 1;
  let board = Array(9).fill(emptySpace);

  // Changes the name of the selected player from the default one
  const changeName = (name, number) => {
    if (number === 1) playerName.player1 = name;
    if (number === 2) playerName.player2 = name;
  };

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

  // Returns true if the position is valid for a new turn
  const validPosition = (position) => {
    if (position < 0 || position > 8) {
      console.log('ERROR: Position can only be between 0 and 8');
      return false;
    }
    if (isFull()) {
      console.log('ERROR: The board is full, no more moves available');
      return false;
    }
    if (board[position] !== 0) {
      console.log('ERROR: Position already taken');
      return false;
    }

    return true;
  };

  // Marks the board using the position argument. Returns true if a new move was successful.
  const newMove = (position) => {
    if (!validPosition(position)) return false;

    board[position] = playerTurn() === 1 ? p1value : p2value;
    turn += 1;

    return true;
  };

  // Returns true if the sum of the 3 variables on a row,         [0] [1] [2]
  // column or diagonal are equal to 3 or -3.                     [3] [4] [5]
  // It should only be used by checkStatus                        [6] [7] [8]
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
      if (checkWinner(p1value, i)) return 1;
      if (checkWinner(p2value, i)) return 2;
    }

    return isFull() ? 3 : 0;
  };

  return {
    turn,
    board,
    player: playerName,
    playerTurn,
    changeName,
    isEmpty,
    isFull,
    resetBoard,
    validPosition,
    newMove,
    checkStatus,
  };
};

export default Game;
