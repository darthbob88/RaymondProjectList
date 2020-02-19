import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes";
import { FirebaseContext } from "../firebase";
export const NavHeader = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return (
        <div>
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          {firebase.currentUser != null
            ? `Currently logged in as ${firebase.currentUser.email} `
            : "Not currently logged in"}
        </div>
      );
    }}
  </FirebaseContext.Consumer>
);
