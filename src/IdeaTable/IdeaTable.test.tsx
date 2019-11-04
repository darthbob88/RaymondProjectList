import React from 'react';
import ReactDOM from 'react-dom';
import IdeaTable from './IdeaTable';
import { defaultIdeaList } from '../models/Idea';
import renderer from "react-test-renderer";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IdeaTable listOfIdeas={defaultIdeaList} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders correctly", () => {
  const tree = renderer
    .create(<IdeaTable listOfIdeas={defaultIdeaList} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});