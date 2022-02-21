// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwNmLNh63cTHRYdop7NjYzchL66YpIhs",
  authDomain: "ecovoito.firebaseapp.com",
  projectId: "ecovoito",
  storageBucket: "ecovoito.appspot.com",
  messagingSenderId: "685205876171",
  appId: "1:685205876171:web:08bcf6ea86777e6ef0da4e",
  measurementId: "G-21XKJG662P"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
