import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8AkLl3UU1YyIkph9pn8kCt-sf4g7z0OY",
  authDomain: "music-store-project-61ddd.firebaseapp.com",
  databaseURL: "https://music-store-project-61ddd.firebaseio.com",
  projectId: "music-store-project-61ddd",
  storageBucket: "music-store-project-61ddd.appspot.com",
  messagingSenderId: "913453999515",
  appId: "1:913453999515:web:087b4596aeaea695daad3e",
  measurementId: "G-T1PWZG09YG"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();
// console.log(storage.


export {firebase, storage, database as default};
