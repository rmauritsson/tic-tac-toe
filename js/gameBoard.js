const gameBoard = (() => {
  const hide = () => {
    document.querySelector('form').style.visibility = 'hidden'
  };
  return { hide };
})();

export default gameBoard;
