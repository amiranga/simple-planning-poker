import firebase from '../firebase';

const USER_TABLE = 'user';
const ROOM_TABLE = 'room';

export function saveUser(user) {
  const db = firebase.firestore();
  db.collection(USER_TABLE).add({
    userId: user.userId,
    userName: user.userName
  });
}

export function getUsers(cb) {
  var query = firebase.firestore()
    .collection(USER_TABLE)
    .orderBy('userName', 'desc')
    .limit(15);

  // Start listening to the query.
  query.onSnapshot(function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
      if (change.type === 'removed') {
        //deleteMessage(change.doc.id);
      } else {
        var message = change.doc.data();
        cb(message);
      }
    });
  });
}

export function saveRoom(room) {
  const db = firebase.firestore();
  db.collection(ROOM_TABLE).add({
    roomId: room.roomId,
    roomName: room.roomName,
    gameFormat: room.gameFormat,
    adminUserId: room.adminUserId
  });
}