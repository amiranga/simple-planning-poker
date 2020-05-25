class User {
  constructor(roomId, roomName, gameFormat, adminUserId) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.gameFormat = gameFormat;
    this.adminUserId = adminUserId;
  }
}

export default User;