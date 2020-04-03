/* eslint-disable no-undef */
import GameBoard from '../src/js/gameBoard';
import Player from '../src/js/player'

it('returns the correct player\'s turn according to the turn number', () => {
  const obj = jest.genMockFromModule('../src/js/player')
  console.log(obj.getMockName());
});
