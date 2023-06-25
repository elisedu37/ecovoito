// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "add_api_key",
  authDomain: "add_auth_domain",
  projectId: "add_project_id",
  storageBucket: "add_storage_bucket",
  messagingSenderId: "add_messaging_sender_id",
  appId: "add_app_id",
  measurementId: "add_measurement_id"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage};
