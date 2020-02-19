import React from "react";
import { FirebaseContext } from "../firebase";

export const SignInForm = () => (
  <div id="firebaseui-auth-container">
    <FirebaseContext.Consumer>
      {firebase => {
        return (
          <div>
            I have access to Firebase and can render something. Current user is 
            {firebase.currentUser && firebase.currentUser.email}
          </div>
        );
      }}
    </FirebaseContext.Consumer>
  </div>
);
