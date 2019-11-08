import React, { Component } from "react";
import IdeaTable from "../IdeaTable/IdeaTable";
import Idea, { defaultIdeaList } from "../models/Idea";
import NewIdeaForm from "../NewIdeaForm/NewIdeaForm";

export default class IdeaListPage extends Component<{}, {listOfIdeas:Idea[]}> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOfIdeas: defaultIdeaList
    };
    // TODO: Get this stuff fetching from Firebase.
    // fetch("api/journal/GetAllEntries")
    //   .then(response => response.json())
    //   .then(data => {
    //     localStorage.setItem("journalEntries", JSON.stringify(data));
    //     this.setState({ journalEntries: data });
    //   })
    //   .catch(error => console.log(error));
  }

addNewIdea = (newIdea: Idea) => {
 
  const oldIdeas = this.state.listOfIdeas;
  this.setState({listOfIdeas: [...oldIdeas, newIdea]});
}

  render() {
    return (
      <React.Fragment>
        <IdeaTable listOfIdeas={this.state.listOfIdeas} />
        <NewIdeaForm addNewIdea={this.addNewIdea} />
      </React.Fragment>
    );
  }
}

