import Player from '../src/js/player';

it('Name is changed', () => {
  const player1 = Player('Sarah', 'X');
  player1.nameChange('John');
  expect(player1.name).toEqual('John');
});
