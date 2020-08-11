import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZEB74m7VfsEamsJnBDFct7g0bWxIArZw",
  authDomain: "facebook-messenger-clone-846c6.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-846c6.firebaseio.com",
  projectId: "facebook-messenger-clone-846c6",
  storageBucket: "facebook-messenger-clone-846c6.appspot.com",
  messagingSenderId: "363263480030",
  appId: "1:363263480030:web:9605dd18a1ab6c4ad2324f",
  measurementId: "G-6SWH9FL3DT"
};

const firebaseApp =
  firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export default db;

