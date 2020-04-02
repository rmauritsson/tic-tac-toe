import Player from '../src/js/player';

it('Name is changed', () => {
  const player1 = Player('Sarah', 'X');
  player1.nameChange('John');
  expect(player1.getName()).toEqual('John');
});

it('Get the name of the player', () => {
  const player1 = Player('Sarah', 'X');
  expect(player1.getName()).toEqual('Sarah');
});
