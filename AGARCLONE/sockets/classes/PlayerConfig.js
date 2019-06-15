// This is where all the data is that no other players needs to know about
class PlayerConfig {
  constructor(setting) {
    this.xVector = 0;
    this.yVector = 0;
    this.speed = setting.defaultSpeed;
    this.zoom = setting.defaultZoom;
  }
}

module.exports = PlayerConfig;