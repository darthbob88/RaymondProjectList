import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes";
import { FirebaseContext } from "../firebase";

export const NavHeader = () => {
  const FirebaseAuth = useContext(FirebaseContext);
  let loggedIn ="Not currently logged in"
   FirebaseAuth.onAuthStateChanged(user => {
    loggedIn = user
      ? `Currently logged in as ${user.email} `
      : "Not currently logged in";
  })
  return (
    <div>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      <span>{loggedIn}</span>
    </div>
  );
};


