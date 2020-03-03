import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import {AuthService} from "../models/AuthService";
import { ROUTES} from "../routes";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);
type NewUserProps = {
  history: [];
};

type NewUserState = {
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  error: any;
};

//TODO: Clean this up so it's a proper initial state.
const INITIAL_STATE: NewUserState = {
  username: "Raymond",
  email: "darthbob88@gmail.com",
  passwordOne: "lvader",
  passwordTwo: "lvader",
  error: null
};

//TODO: Turn this into a functional component, using hooks.
//TODO: Fix this prop typing
class SignUpFormBase extends Component<any, NewUserState> {
  constructor(props: any) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { username, email, passwordOne } = this.state;

    AuthService.doCreateUserWithEmailAndPassword(email, passwordOne, username)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error: any) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;

    //Ugly, but Typescript freaks out at the usual this.setState({[name]: value}) trick.
    switch (name) {
      case "username":
        this.setState({ username: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "passwordOne":
        this.setState({ passwordOne: value });
        break;
      case "passwordTwo":
        this.setState({ passwordTwo: value });
        break;
      default:
        console.log("Something has gone wrong " + JSON.stringify(this.state));
        break;
    }
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    //TODO: Fix this form for accessibility and clarity.
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
