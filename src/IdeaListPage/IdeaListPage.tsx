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

    databaseRef
      .collection("ideas")
      .get()
      .then(querySnapshot => {
        // this.setState({ listOfIdeas: querySnapshot });
        querySnapshot.forEach(doc => {
          // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          this.setState({listOfIdeas: [...this.state.listOfIdeas, doc.data() as Idea]})
        });
      });
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
