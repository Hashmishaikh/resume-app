import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAB-ikvD7LaRNOdwR7ieydF4yOD5Q8tPEM",
    authDomain: "resume-app-b5767.firebaseapp.com",
    databaseURL: "https://resume-app-b5767.firebaseio.com",
    projectId: "resume-app-b5767",
    storageBucket: "resume-app-b5767.appspot.com",
    messagingSenderId: "565553886518",
    appId: "1:565553886518:web:2692d688b0e1cba13eef97"
  });
  const db = firebaseApp.firestore();

export default db;