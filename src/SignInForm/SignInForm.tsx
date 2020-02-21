import React, { useState } from "react";
import { FirebaseContext } from "../firebase";
//TODO: Replace this with a class/object, so I can just import AuthService
import * as AuthService from "../models/AuthService";
import * as ROUTES from "../routes";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //TODO: Add "redirect back to home page" here.
    AuthService.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        if (authUser.user != null)
          console.log(`Successfully logged in as ${authUser.user.email}`);
      })
      .catch((error: any) => {});

    event.preventDefault();
  };
  const isInvalid = password === "" || email === "";
  return (
    //TODO: Fix this form for accessibility and clarity.
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>
    </form>
  );
};
