import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDrCrX59ouDqQAlmtbUBjUxML0zWOeN63I",
    authDomain: "raymondprojectlist.firebaseapp.com",
    databaseURL: "https://raymondprojectlist.firebaseio.com",
    projectId: "raymondprojectlist",
    storageBucket: "raymondprojectlist.appspot.com",
    messagingSenderId: "397596389512",
    appId: "1:397596389512:web:b56826c6facf9c9064ef3d"
  };
firebase.initializeApp(firebaseConfig);
export const databaseRef = firebase.firestore();