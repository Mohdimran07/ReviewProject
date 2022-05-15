import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyiLQNFUf1C0SS7zkte4xd9B0Za67_ZIw",
  authDomain: "mailbox-data.firebaseapp.com",
  databaseURL: "https://mailbox-data-default-rtdb.firebaseio.com",
  projectId: "mailbox-data",
  storageBucket: "mailbox-data.appspot.com",
  messagingSenderId: "738663879042",
  appId: "1:738663879042:web:52053c3fb5c1615693bf9b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
