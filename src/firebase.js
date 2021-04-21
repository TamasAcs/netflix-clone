import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqnRy3pFGWJXQf-ECd9xYY232GfJ2q0CY",
  authDomain: "netflix-clone-5a2de.firebaseapp.com",
  projectId: "netflix-clone-5a2de",
  storageBucket: "netflix-clone-5a2de.appspot.com",
  messagingSenderId: "544724306630",
  appId: "1:544724306630:web:eac004f5de71adde3d65c7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
