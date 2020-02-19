import React from "react";
import { FirebaseContext } from "../firebase";
//TODO: Replace this with a class/object, so I can just import AuthService
import * as AuthService from "../models/AuthService";
import * as ROUTES from "../routes";

export const SignInForm = () => {
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const INITIAL_STATE = {
      username: "Raymond",
      email: "darthbob88@gmail.com",
      passwordOne: "lvader",
      passwordTwo: "lvader",
      error: null
    };

    AuthService.doSignInWithEmailAndPassword(
      INITIAL_STATE.email,
      INITIAL_STATE.passwordOne
    )
      .then(authUser => {
        if (authUser.user != null)
          console.log(`Successfully logged in as ${authUser.user.email}`);
      })
      .catch((error: any) => {});

    event.preventDefault();
  };
  return (
    <div id="firebaseui-auth-container">
      <FirebaseContext.Consumer>
        {firebase => {
          return (
            <div>
              I have access to Firebase and can render something. Current user
              is
              {firebase.currentUser != null
                ? firebase.currentUser.email
                : "Nobody"}
              <button onClick={onSubmit}>Log in as darthbob88</button>
            </div>
          );
        }}
      </FirebaseContext.Consumer>
    </div>
  );
};
