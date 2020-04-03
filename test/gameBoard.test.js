/* eslint-disable no-undef */
import Board from '../src/js/gameBoard';

const mockfn1 = jest.fn(() => 'Sarah');
const mockfn2 = jest.fn(() => 'John');

const mock1 = { name: 'Sarah', symbol: 'X', getName: mockfn1 };
const mock2 = { name: 'John', symbol: 'O', getName: mockfn2 };

test('returns the correct player\'s turn according to the turn number', () => {
  const board = Board(mock1, mock2);

  board.setTurn(1);
  expect(board.playerTurn()[0]).toEqual('Sarah');

  board.setTurn(2);
  expect(board.playerTurn()[0]).toEqual('John');
});

test('return 1 as the Player 1 is the winner', () => {
  const board = Board(mock1, mock2);

  board.newMove(0);
  board.newMove(1);
  board.newMove(3);
  board.newMove(2);
  board.newMove(6);

  expect(board.newMove(6)).toBe(1);
});

test('return 2 as the Player 2 is the winner', () => {
  const board = Board(mock1, mock2);

  board.newMove(0);
  board.newMove(1);
  board.newMove(2);
  board.newMove(4);
  board.newMove(3);

  expect(board.newMove(7)).toBe(2);
});

test('return 3 as the game is Draw', () => {
  const board = Board(mock1, mock2);

  board.newMove(0);
  board.newMove(4);
  board.newMove(2);
  board.newMove(1);
  board.newMove(3);
  board.newMove(6);
  board.newMove(5);
  board.newMove(8);

  expect(board.newMove(7)).toBe(3);
});

test('Allow a new move for the same player as the position selected was repeated', () => {
  const board = Board(mock1, mock2);

  board.newMove(0);
  board.newMove(1);
  board.newMove(1);

  expect(board.playerTurn()[1]).toBe(1);
});
