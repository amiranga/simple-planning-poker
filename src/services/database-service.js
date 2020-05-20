import firebase from '../firebase';

const USER_TABLE = 'users';

export function saveUser(userName) {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection(USER_TABLE).add({
    fullname: userName,
    timestamp: Date.now()
  });
}

export function getUsers(cb) {
  var query = firebase.firestore()
    .collection(USER_TABLE)
    .orderBy('timestamp', 'desc')
    .limit(12);

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