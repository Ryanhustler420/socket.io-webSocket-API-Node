class Room {
  constructor(roomId, roomTItle, namespace, privateRoom = false) {
    this.roomId = roomId;
    this.roomTitle = roomTItle;
    this.namespace = namespace;
    this.privateRoom = privateRoom;
    this.history = [];
  }

  addMessage(message) {
    this.history.push(message);
  }

  clearHistory() {
    this.history = [];
  }
}

module.exports = Room;
