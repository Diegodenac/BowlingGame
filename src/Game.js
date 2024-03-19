class Game {
  constructor() {
    this.sc = 0; 
  }

  roll(pins) {
    this.sc += pins;
  }

  score() {
    return this.sc;
  }
}

module.exports = Game;