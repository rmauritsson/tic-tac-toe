const Player = (firstName, firstSymbol) => {
  let name = firstName;
  const symbol = firstSymbol;

  const nameChange = (newName) => {
    name = newName;
  };

  const getName = () => name;

  return {
    symbol,
    getName,
    nameChange,
  };
};

export default Player;
