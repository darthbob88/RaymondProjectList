import React from "react";
import * as AuthService from "../models/AuthService";
export const SignOutButton = () => {
  const signOut = () => {
    AuthService.doSignOut().then(() => {
        console.log(`Successfully signed out`)
    });
  };
  return (
    <button type="button" onClick={signOut}>
      Sign Out
    </button>
  );
};
