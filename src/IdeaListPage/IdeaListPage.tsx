import React, { Component } from "react";
import IdeaTable from "../IdeaTable/IdeaTable";
import Idea from "../models/Idea";
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
    IdeasService.fetchAllIdeas().then(result =>
      this.setState({ listOfIdeas: result, isLoading: false })
    ).catch(error => console.log(error));
  }

  addNewIdea = (newIdea: Idea) => {
    const oldIdeas = this.state.listOfIdeas;

    IdeasService.addIdea(newIdea)
      .then(result => {
        const addedIdea = result.data() as Idea;
        this.setState({ listOfIdeas: [...oldIdeas, addedIdea] });
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
