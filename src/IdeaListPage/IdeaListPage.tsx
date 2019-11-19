import React, { Component } from "react";
import IdeaTable from "../IdeaTable/IdeaTable";
import Idea, { defaultIdeaList } from "../models/Idea";
import NewIdeaForm from "../NewIdeaForm/NewIdeaForm";
import * as IdeasService from "../models/IdeasService";
type IdeaListPageState = {
  listOfIdeas: Idea[];
  isLoading: boolean;
};
export default class IdeaListPage extends Component<{}, IdeaListPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      listOfIdeas: []
    };
  }

  componentDidMount() {
    const result = defaultIdeaList;
    // IdeasService.fetchAllIdeas().then(result =>
    IdeasService.fetchSpecificIdea("setup-portfolio")
      .then(result => {
        const newIdeaList = [result];
        this.setState({ listOfIdeas: newIdeaList, isLoading: false });
      })
      .catch(error => console.log(error));
  }

  addNewIdea = (newIdea: Idea) => {
    const oldIdeas = this.state.listOfIdeas;
    IdeasService.addIdea(newIdea)
      .then(result => {
        this.setState({ listOfIdeas: [...oldIdeas, result] });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <h3>Still loading</h3>
        ) : (
          <IdeaTable listOfIdeas={this.state.listOfIdeas} />
        )}
        <NewIdeaForm addNewIdea={this.addNewIdea} />
      </React.Fragment>
    );
  }
}
