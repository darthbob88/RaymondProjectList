import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import IdeaListPage from "./IdeaListPage/IdeaListPage";
import IdeaDetailPage from "./IdeaDetailPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={IdeaListPage} />
        <Route path="/ideas/:id" component={IdeaDetailPage} />
      </Switch>
    </div>
  );
};

export default App;
