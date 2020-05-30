import firebase from '../firebase';

const ROOM_TABLE = 'room';

export function saveUser(roomId, user) {
  const db = firebase.firestore();
  db.collection(roomId)
    .doc(user.userId)
    .set({
      userId: user.userId,
      userName: user.userName
    });
}

export function getUsers(roomId, cb) {
  var query = firebase.firestore()
    .collection(roomId)
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
  db.collection(ROOM_TABLE)
    .doc(room.roomId)
    .set({
      roomId: room.roomId,
      roomName: room.roomName,
      gameFormat: room.gameFormat,
      adminUserId: room.adminUserId
    });
}

export function getRoom(roomId, cb) {
  const db = firebase.firestore();
  db.collection(ROOM_TABLE)
    .doc(roomId)
    .get()
    .then(doc => {
      cb(doc.data());
    });
}


export function saveVote(roomId, userId, vote) {
  const db = firebase.firestore();
  db.collection(roomId)
    .doc(userId)
    .set(
      { vote: vote },
      { merge: true }
    );
}