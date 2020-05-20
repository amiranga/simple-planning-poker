import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2T0B_2BJJWxLr9Dt58Bx44w3WfcqKJNk",
  authDomain: "simple-spp.firebaseapp.com",
  databaseURL: "https://simple-spp.firebaseio.com",
  projectId: "simple-spp",
  storageBucket: "simple-spp.appspot.com",
  messagingSenderId: "1065919812776",
  appId: "1:1065919812776:web:70c24ffc241fd146539e9d"
};

firebase.initializeApp(config);
export default firebase;