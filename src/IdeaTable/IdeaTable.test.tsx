import React from 'react';
import ReactDOM from 'react-dom';
import IdeaTable from './IdeaTable';
import { defaultIdeaList } from '../models/Idea';
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router> <IdeaTable listOfIdeas={defaultIdeaList} /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const tree = renderer
    .create(<Router> <IdeaTable listOfIdeas={defaultIdeaList} /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});