import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYZKlFuflfIM_bcCYwIGrNHGHgaJbyFdc",
  authDomain: "signal-clone-5ea74.firebaseapp.com",
  projectId: "signal-clone-5ea74",
  storageBucket: "signal-clone-5ea74.appspot.com",
  messagingSenderId: "625315549531",
  appId: "1:625315549531:web:e5b56d6dd5f9e7995d8a7e",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
