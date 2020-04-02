/* eslint-disable no-undef */
import GameBoard from '../src/js/gameBoard';

it('returns the correct player\'s turn according to the turn number', () => {
  const mockup1 = {
    name: 'Sarah',
    symbol: 'X',
    getName(): 'Sarah';
  };
  const mockup2 = { name: 'John', symbol: 'O' };

  const board = GameBoard(mockup1, mockup2);
  expect(board.playerTurn(1)).toEqual('Sarah');
});
