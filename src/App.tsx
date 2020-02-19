import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import IdeaListPage from "./IdeaListPage/IdeaListPage";
import IdeaDetailPage from "./IdeaDetailPage";
import { SignInForm } from "./SignInForm/SignInForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/signin">Sign In</Link>
      <Switch>
        <Route path="/signin" component={SignInForm} />
        <Route path="/home" exact component={IdeaListPage} />
        <Route path="/" exact component={IdeaListPage} />
        <Route path="/ideas/:id" component={IdeaDetailPage} />
      </Switch>
    </div>
  );
};

export default App;
