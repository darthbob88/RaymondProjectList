import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes";
import { SignOutButton } from "../SignInForm/SignOutButton";
import { AuthContext } from "../models/AuthService";

export const NavHeader = () => {
  const FirebaseAuth = useContext(AuthContext);
  const message = (user: firebase.User | null) =>
    user ? `Currently logged in as ${user.displayName}` : "Not currently logged in";
  let loggedIn= message(FirebaseAuth.currentUser);
  
  return (
    <div>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      <span>{loggedIn}</span>
      <SignOutButton/>
    </div>
  );
};
