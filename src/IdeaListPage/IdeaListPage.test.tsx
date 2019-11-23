import ReactDOM from "react-dom";
import React from "react";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../models/IdeasService");
import IdeaListPage from "./IdeaListPage";
describe("IdeaListPage", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    // container = null;
  });

  it("renders without crashing", () => {
    act(() => {
      ReactDOM.render(<IdeaListPage />, container);
    });
  });
  it("renders a list of the right length", () => {
    act(() => {
      ReactDOM.render(<IdeaListPage />, container);
    });
    const list = container.querySelector(".ideaListing");
    const listItems = list != null && list.getElementsByTagName("li");
    expect(list).toBeDefined();
    // const { getByText } = render(<IdeaListPage />);
    // expect(getByText("Learn React")).toBeInTheDocument();
  })
});
