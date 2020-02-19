import * as firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import React from "react";
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
//TODO: Should I move all this to a single class or smth?
export const databaseRef = firebase.firestore();
export const firebaseAuth = firebase.auth();
export const FirebaseContext = React.createContext(firebaseAuth)