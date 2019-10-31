import React from 'react';
import ReactDOM from 'react-dom';
import IdeaTable from './IdeaTable';
import { defaultIdeaList } from '../models/Idea';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdeaTable listOfIdeas={defaultIdeaList} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
