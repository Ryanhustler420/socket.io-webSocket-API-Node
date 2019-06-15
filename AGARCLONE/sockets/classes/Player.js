// this is where ALL the data is stored about a given player
class Player {
  constructor(id, playerConfig, playerData) {
    this.socketId = id;
    this.playerConfig = playerConfig;
    this.playerData = playerData;
  }
}

module.exports = Player;
