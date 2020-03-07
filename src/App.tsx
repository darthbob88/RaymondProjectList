import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import IdeaListPage from "./IdeaListPage/IdeaListPage";
import IdeaDetailPage from "./IdeaDetailPage";
import { SignInForm } from "./SignInForm/SignInForm";
import { ROUTES } from "./routes";
import { SignUpForm } from "./SignUpForm/SignUpForm";
import { NavHeader } from "./NavHeader/NavHeader";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavHeader />
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignInForm} />
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.HOME} component={IdeaListPage} />
        <Route path={ROUTES.LANDING} exact component={IdeaListPage} />
        <Route path="/ideas/:id" component={IdeaDetailPage} />
      </Switch>
    </div>
  );
};

export default App;
