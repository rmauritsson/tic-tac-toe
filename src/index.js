import Board from './js/gameBoard';
import Player from './js/player';
import 'bootstrap';
import './css/style.scss';

let name1 = '';
let name2 = '';

document.getElementById('gameButton').onclick = () => {
  name1 = document.getElementById('inputPlayerOne').value;
  name2 = document.getElementById('inputPlayerTwo').value;
  const game = Board(Player(name1, 'X'), Player(name2, 'O'));
  game.drawBoard(game.board);
  document.getElementById('resetButton').style.visibility = 'visible';
};


document.getElementById('resetButton').onclick = () => {
  const game = Board(Player(name1, 'X'), Player(name2, 'O'));
  game.drawBoard(game.board);
  document.getElementById('resetButton').style.visibility = 'visible';
};
