import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import IdeaListPage from "./IdeaListPage/IdeaListPage";
import IdeaDetailPage from "./IdeaDetailPage";
import { SignInForm } from "./SignInForm/SignInForm";
import * as ROUTES from "./routes";
import { SignUpForm } from "./SignUpForm/SignUpForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignInForm} />
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.HOME} exact component={IdeaListPage} />
        <Route path={ROUTES.HOME} exact component={IdeaListPage} />
        <Route path="/ideas/:id" component={IdeaDetailPage} />
      </Switch>
    </div>
  );
};

export default App;
