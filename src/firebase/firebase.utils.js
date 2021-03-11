import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCpgKqzPMu6CRS3FsjpSXCRMkSbYr8XTvw",
    authDomain: "olx-web-a1b0a.firebaseapp.com",
    databaseURL: "https://olx-web-a1b0a.firebaseio.com",
    projectId: "olx-web-a1b0a",
    storageBucket: "olx-web-a1b0a.appspot.com",
    messagingSenderId: "796533326913",
    appId: "1:796533326913:web:a6d21ac23b1ab4861832c0",
    measurementId: "G-N8Q3DJGBVD"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;