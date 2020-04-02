const Player = (firstName, firstSymbol) => {
  let name = firstName;
  const symbol = firstSymbol;

  const nameChange = (newName) => {
    name = newName;
  };

  return {
    name,
    symbol,
    nameChange,
  };
};

export default Player;
