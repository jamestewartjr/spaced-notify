import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeAp({
  apiKey: "AIzaSyAjKjLzCRFVwNiV62KOO2MEBL0xwbZQEX8",
  authDomain: "spacednotify.firebaseapp.com",
  databaseURL: "https://spacednotify.firebaseio.com",
  projectId: "spacednotify",
  storageBucket: "spacednotify.appspot.com",
  messagingSenderId: "622394100820",
  appId: "1:622394100820:web:65e511fea3226aeac231c1",
  measurementId: "G-HBC18YBJCV"
});

export { firebaseConfig as firebase};