import React from 'react';
import ReactDOM from 'react-dom';
jest.mock("./models/IdeasService");

import App from './App';
describe("App Overall", () => {
  xit("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});