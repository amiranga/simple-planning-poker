import firebase from '../firebase';

const ROOM_TABLE = 'room';

export function saveUser(roomId, user) {
  const db = firebase.firestore();
  db.collection(roomId).doc(user.userId).set(
    {
      userId: user.userId,
      userName: user.userName,
    },
    { merge: true }
  );
}

export function getUsers(roomId, cb) {
  var query = firebase.firestore().collection(roomId).orderBy('userName', 'desc').limit(15);

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
  db.collection(ROOM_TABLE).doc(room.roomId).set({
    roomId: room.roomId,
    roomName: room.roomName,
    gameFormat: room.gameFormat,
    adminUserId: room.adminUserId,
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
  db.collection(roomId).doc(userId).set({ vote: vote }, { merge: true });
}

export function saveRoomStatus(roomId, status, cb) {
  const roomStatusTbl = `${roomId}_status`;
  const db = firebase.firestore();
  db.collection(roomStatusTbl).doc(roomId).set({ status: status, updatedTime: new Date().getTime() });
}

export function resetRoom(roomId, users) {
  const roomStatusTbl = `${roomId}_status`;
  const db = firebase.firestore();
  db.collection(roomStatusTbl).doc(roomId).set({ status: 'ACTIVE', updatedTime: new Date().getTime() });

  const userIds = Object.keys(users);
  if (userIds) {
    userIds.forEach(uid => {
      db.collection(roomId).doc(uid).set({ vote: null }, { merge: true });
    });
  }
}

export function watchRoomStatus(roomId, cb) {
  const roomStatusTbl = `${roomId}_status`;
  var query = firebase.firestore().collection(roomStatusTbl).doc(roomId);

  query.onSnapshot(function (doc) {
    var message = doc.data();
    cb(message);
  });
}
