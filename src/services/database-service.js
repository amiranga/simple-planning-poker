import firebase from '../firebase';

const USER_TABLE = 'users';

export function saveUser(user) {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
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