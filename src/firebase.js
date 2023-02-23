import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQlMrE7pwcpsV5sBv5qcDqaFuICleU15c",
  authDomain: "disneyplus-clone-7a4e7.firebaseapp.com",
  projectId: "disneyplus-clone-7a4e7",
  storageBucket: "disneyplus-clone-7a4e7.appspot.com",
  messagingSenderId: "251115005857",
  appId: "1:251115005857:web:ec7337a714f24ec0dbcde0",
  measurementId: "G-EJ61WLN6YB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;