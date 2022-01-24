import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUDqOU_vw_LanxwP_PVUqNqLHVbrnkzpI",
  authDomain: "slack-clone-72c5e.firebaseapp.com",
  projectId: "slack-clone-72c5e",
  storageBucket: "slack-clone-72c5e.appspot.com",
  messagingSenderId: "992485807918",
  appId: "1:992485807918:web:c2127fd3eb17a136eb4cbf",
  measurementId: "G-BC8KD5845Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider };
export default db;