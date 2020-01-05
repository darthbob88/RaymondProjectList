import React, { Component } from "react";
import IdeaTable from "../IdeaTable/IdeaTable";
import Idea, { NewIdea } from "../models/Idea";
// import NewIdeaForm from "../NewIdeaForm/NewIdeaForm";
import * as IdeasService from "../models/IdeasService";
import UpdateIdeaForm from "../UpdateIdeaForm/UpdateIdeaForm";
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

  async componentDidMount() {
    const result = await IdeasService.fetchAllIdeas();
    this.setState({ listOfIdeas: result, isLoading: false });
  }

  addNewIdea = async (newIdea: NewIdea) => {
    const oldIdeas = this.state.listOfIdeas;
    const result = await IdeasService.addIdea(newIdea);
    this.setState({ listOfIdeas: [...oldIdeas, result] });
  };

  updateIdea = async(currentIdeaID: string, updatedIdea: Partial<Idea>) => {
    const oldIdeas = this.state.listOfIdeas;
    const result = await IdeasService.updateIdea(currentIdeaID, updatedIdea);
    const spliceIndex = oldIdeas.findIndex(item => item.slug === currentIdeaID);
    oldIdeas.splice(spliceIndex, 1, result);
    this.setState({ listOfIdeas: oldIdeas });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <h3>Still loading</h3>
        ) : (
          <IdeaTable listOfIdeas={this.state.listOfIdeas} />
        )}
        {/* <NewIdeaForm addNewIdea={this.addNewIdea} /> */}
{ this.state.listOfIdeas.length > 1 && <UpdateIdeaForm updateExistingIdea={this.updateIdea} currentIdea={this.state.listOfIdeas[1]} /> }
      </React.Fragment>
    );
  }
}
