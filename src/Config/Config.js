import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCZN2RwbhW9aF-DoAFEAVkUupOeFRT_6-s",
    authDomain: "reactprojectis.firebaseapp.com",
    projectId: "reactprojectis",
    storageBucket: "reactprojectis.appspot.com",
    messagingSenderId: "480754112531",
    appId: "1:480754112531:web:c5c53681b946a0ce7ac7e6",
    measurementId: "G-J1DNGG6NLW"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

  export {auth, fs, storage}