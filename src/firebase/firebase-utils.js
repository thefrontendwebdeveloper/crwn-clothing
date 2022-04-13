import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {

  apiKey: "AIzaSyDWwFmXmhK8wW6Q8C7ZHMzSaBy5D8jZA1k",

  authDomain: "crwn-clothing-5023d.firebaseapp.com",

  projectId: "crwn-clothing-5023d",

  storageBucket: "crwn-clothing-5023d.appspot.com",

  messagingSenderId: "438940780261",

  appId: "1:438940780261:web:ee07f12e5fa1c5dcbbb60c",

  measurementId: "G-7MXH7947YQ"

};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;