import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpu8zF2m6nZfQX-8yDwNAgMKCGsnNFiQ4",
  authDomain: "clone-5fac1.firebaseapp.com",
  projectId: "clone-5fac1",
  storageBucket: "clone-5fac1.appspot.com",
  messagingSenderId: "1091502787664",
  appId: "1:1091502787664:web:844fd9acd72feddf571555",
  measurementId: "G-ED6DZX8G2M"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
