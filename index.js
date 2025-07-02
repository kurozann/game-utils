const GameData = require("./game");

class Game {
  constructor() {
    Object.assign(this, GameData);
  }
}

module.exports = new Game();