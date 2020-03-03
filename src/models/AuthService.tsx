import { firebaseAuth } from "../firebase";
import React, { useEffect, useState } from "react";

const doCreateUserWithEmailAndPassword = (
  email: string,
  password: string,
  userName: string
) =>
  firebaseAuth.createUserWithEmailAndPassword(email, password).then(result => {
    if (result.user == null) return false;
    result.user
      .updateProfile({
        displayName: userName
      })
      .catch(function(error) {
        console.log(error);
      });
  });

const doSignInWithEmailAndPassword = (email: string, password: string) =>
  firebaseAuth.signInWithEmailAndPassword(email, password);

const doSignOut = () => firebaseAuth.signOut();

const doPasswordReset = (email: string) =>
  firebaseAuth.sendPasswordResetEmail(email);

const doPasswordUpdate = (password: string) => {
  if (firebaseAuth.currentUser != null) {
    firebaseAuth.currentUser.updatePassword(password);
  } else {
    //TODO: If not logged in, throw an error?
  }
};

const currentUser = null;
export const AuthService = {
  currentUser,
  doPasswordReset,
  doCreateUserWithEmailAndPassword,
  doPasswordUpdate,
  doSignInWithEmailAndPassword,
  doSignOut
};

export const AuthContext = React.createContext(AuthService);

type AuthProviderTypes = { children: React.ReactNode };
export const AuthProvider: React.FunctionComponent<AuthProviderTypes> = ({
  children
}) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(`AuthStateChanged, current user is ${currentUser}`);
    });
  });
  return (
    <AuthContext.Provider value={{ ...AuthService, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
