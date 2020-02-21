// import Player from './player';
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

/*
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]

[1] [0] [10]
[1] [10] [10]
[1] [0] [10]
*/
class Board {
  constructor() {
    this.turn = 1;
    this.emptySpace = 0;
    this.player1 = 1;
    this.player2 = 10;
    // const player1 = new Player('Player 1', 'X', 1);
    // const player2 = new Player('Player 2', 'O', 10);
    this.board = Array(9).fill(this.emptySpace);
  }

  get board() { return this.board; }

  get turn() { return this.turn; }

  get player1() { return this.player1; }

  get player2() { return this.player2; }

  get emptySpace() { return this.emptySpace; }

  newMove(position) {
    if (this.validPosition(position)) {
      console.log('ERROR: Invalid position');
      return false;
    }

    if (this.turn % 2 === 1) {
      this.board[position] = this.player1; // 1
    } else {
      this.board[position] = this.player2; // 10
    }
    this.turn += 1;

    if (this.checkStatus() !== 0) {
      return false;
    }

    return true;
  }

  validPosition(position) {
    if (position < 1 || position > 8) { return false; }

    if (this.isFull) {
      return false;
    }

    if (this.board[position] !== 0) {
      return false;
    }

    return true;
  }

  isEmpty() {
    for (let i = 0; i < this.board.length; i += 1) {
      if (this.board[i] !== this.emptySpace) {
        return false;
      }
    }

    return true;
  }

  isFull() {
    for (let i = 0; i < this.board.length; i += 1) {
      if (this.board[i] === this.emptySpace) {
        return false;
      }
    }

    return true;
  }

  /*
  [0] [1] [2]
  [3] [4] [5]
  [6] [7] [8]
  */
  checkWinner(player, index) {
    for (let i = 0; i < 3; i += 1) {
      if ((this.board[0 + (index * 3)] + this.board[1 + (index * 3)] + this.board[2 + (index * 3)] === player * 3)
      || (this.board[0 + index] + this.board[3 + index] + this.board[6 + index] === player * 3)
      || (this.board[0 + (index * 2)] + this.board[4] + this.board[8 - (index * 2)] === player * 3 && index < 2)) {
        return true;
      }
    }

    return false;
  }

  /*
  returns 0 if there is no winner
  returns 1 if the winner is the player 1
  returns 2 if the winner is the player 2
  returns 3 if there is a draw
  */
  checkStatus() {
    for (let i = 0; i < 3; i += 1) {
      if (this.checkWinner(this.player1, i)) {
        return 1;
      }

      if (this.checkWinner(this.player2, i)) {
        return 2;
      }
    }

    if (this.isFull) {
      return 3;
    }

    return 0;
  }

  resetBoard() {
    this.board = Array(9).fill(0);
    this.turn = 1;
  }
}

export default Board;
