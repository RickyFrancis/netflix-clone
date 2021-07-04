import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8XzH_PPvpINWfwu-yLSIWmGH4O_-gOeo",
  authDomain: "netflix-clone-953f6.firebaseapp.com",
  projectId: "netflix-clone-953f6",
  storageBucket: "netflix-clone-953f6.appspot.com",
  messagingSenderId: "1002723713939",
  appId: "1:1002723713939:web:5654b85dcaa8e09d6c7e66",
  measurementId: "G-C2ZC5YPNHZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
