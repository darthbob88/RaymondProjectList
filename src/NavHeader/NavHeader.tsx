import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes";
import { FirebaseContext } from "../firebase";

export const NavHeader = () => {
  const FirebaseAuth = useContext(FirebaseContext);
  const message = (user: firebase.User | null) =>
    user ? `Currently logged in as ${user.email}` : "Not currently logged in";
  let [loggedIn, setLoggedIn] = useState(message(FirebaseAuth.currentUser));
  useEffect(() =>
    FirebaseAuth.onAuthStateChanged(user => setLoggedIn(message(user)))
  );
  return (
    <div>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      <span>{loggedIn}</span>
    </div>
  );
};
