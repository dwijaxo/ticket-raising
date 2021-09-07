import firebase from "firebase";
import "firebase/auth";


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBywsMQfqbYntS_8YXCaX9s2RpGgyHugO8",
    authDomain: "ticket-system-2a378.firebaseapp.com",
    projectId: "ticket-system-2a378",
    storageBucket: "ticket-system-2a378.appspot.com",
    messagingSenderId: "258490197253",
    appId: "1:258490197253:web:80d71787958b810d2d436c"

});


var db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const fire = firebase.initializeApp(firebaseApp);
export { db } ;
export { auth };
export {googleProvider};
export {firebase};