import React, { Component } from "react";
import IdeaTable from "../IdeaTable/IdeaTable";
import Idea from "../models/Idea";
import NewIdeaForm from "../NewIdeaForm/NewIdeaForm";
import { databaseRef } from "../firebase";

export default class IdeaListPage extends Component<{},  { listOfIdeas: Idea[] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOfIdeas: []
    };

    //TODO: Turn this into a real-time watcher, so it gets automatically updated.
    //TODO: Pull this into a separate ideasService
    // databaseRef
    //   .collection("ideas")
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       const newIdea = {...doc.data(), id: doc.id} as Idea;
    //       // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //       this.setState({listOfIdeas: [...this.state.listOfIdeas, newIdea]})
    //     });
    //   });
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
  };

  render() {
    return (
      <React.Fragment>
        <IdeaTable listOfIdeas={this.state.listOfIdeas} />
        <NewIdeaForm addNewIdea={this.addNewIdea} />
      </React.Fragment>
    );
  }
}
