import React from 'react';
import './App.css';
import IdeaListPage from './IdeaListPage/IdeaListPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <IdeaListPage ></IdeaListPage>
      </header>
    </div>
  );
}

export default App;
