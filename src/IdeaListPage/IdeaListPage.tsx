import React, { Component } from "react";
import IdeaTable from "../IdeaTable/IdeaTable";
import Idea from "../models/Idea";
import NewIdeaForm from "../NewIdeaForm/NewIdeaForm";
import * as IdeasService from "../models/IdeasService";
import { databaseRef } from "../firebase";
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
    //TODO: Turn this into a real-time watcher, so it gets automatically updated.
    //TODO: Pull this into a separate ideasService
    databaseRef
      .collection("ideas")
      .get()
      .then(querySnapshot => {
        // this.setState({ listOfIdeas: querySnapshot });
        querySnapshot.forEach(doc => {
          const newIdea = { ...doc.data(), id: doc.id } as Idea;
          // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          this.setState({ listOfIdeas: [...this.state.listOfIdeas, newIdea] });
        });
      })
      .catch(error => console.log(`Error fetching data: ${error}`));
    // IdeasService.fetchAllIdeas().then(result =>
    //   this.setState({ listOfIdeas: result, isLoading: false })
    // ).catch(error => console.log(error));
  }

  addNewIdea = (newIdea: Idea) => {
    const oldIdeas = this.state.listOfIdeas;
    databaseRef
      .collection("ideas")
      .add(newIdea)
      .then(docRef => {
        this.setState({
          listOfIdeas: [...oldIdeas, newIdea]
        });
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    // IdeasService.addIdea(newIdea)
    //   .then(result => {
    //     const addedIdea = result.data() as Idea;
    //     this.setState({ listOfIdeas: [...oldIdeas, addedIdea] });
    //   })
    //   .catch(error => console.log(error));
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
