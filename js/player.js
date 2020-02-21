class Player {
  constructor(name = 'Default player', symbol, value) {
    this.name = name;
    this.wins = 0;
    this.symbol = symbol;
    this.value = value;
  }

  get name() { return this.name; }

  get wins() { return this.wins; }

  get value() { return this.value; }

  set name(string) { this.name = string; }

  set wins(number) { this.wins = number; }
}

export default Player;
