import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBwyMnQ1_lOnybI9pyqq38hFvlfQV4rvU8",
    authDomain: "olx-clone-812b7.firebaseapp.com",
    projectId: "olx-clone-812b7",
    storageBucket: "olx-clone-812b7.appspot.com",
    messagingSenderId: "408833550544",
    appId: "1:408833550544:web:6478d2bc9974a88a7b96d5",
    measurementId: "G-6ZFR4MKCF0"
  };

  export default firebase.initializeApp(firebaseConfig)