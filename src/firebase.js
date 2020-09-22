import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvClLLipUioLlyUs7zVAciyIIjrs93Lcc",
  authDomain: "facebook-messenger-clone-d8a84.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-d8a84.firebaseio.com",
  projectId: "facebook-messenger-clone-d8a84",
  storageBucket: "facebook-messenger-clone-d8a84.appspot.com",
  messagingSenderId: "914110977731",
  appId: "1:914110977731:web:37901dfd4f30c26c167476",
  measurementId: "G-04WWXQPH89"
};

const firebaseApp =
  firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export default db;

