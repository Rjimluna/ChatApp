import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDGsMCdWtUABzGrqQV6YS92jetmNSuVdIM",
    authDomain: "chatapp-fba07.firebaseapp.com",
    projectId: "chatapp-fba07",
    storageBucket: "chatapp-fba07.appspot.com",
    messagingSenderId: "6380879616",
    appId: "1:6380879616:web:6ecac5684635a62f65bde5",
    measurementId: "G-XCRXPQ0X4Z"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };