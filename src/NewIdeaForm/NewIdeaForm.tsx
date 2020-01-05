import React, { Component } from "react";
import { IdeaStatus, NewIdea } from "../models/Idea";
interface NewIdeaProps {
  addNewIdea: (newIdea: NewIdea) => void;
}

export default class NewIdeaForm extends Component<NewIdeaProps, NewIdea> {
  constructor(props: NewIdeaProps) {
    super(props);
    this.state = {
      description: "",
      summary: "",
      currentStatus:IdeaStatus.ToDo
    };
  }
  //TODO: There has to be an overarching type for this.
  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;
    //Ugly, but Typescript freaks out at the usual this.setState({[name]: value}) trick.
    switch (name) {
      case "description":
        this.setState({ description: value });
        break;
      case "summary":
        this.setState({ summary: value });
        break;
      default:
        console.log("Something has gone wrong " + JSON.stringify(this.state));
        break;
    }
  };
  submitIdea = (event: any) => {
    this.props.addNewIdea(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <form>
          <h3>Adding New Idea</h3>
          <label>
            One-sentence summary of the idea
            <input type="text" name="summary" onChange={this.handleChange} />
          </label>
          <label>
            Long description of the idea
            <textarea
              rows={6}
              name="description"
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.submitIdea}>Add new idea to list</button>
        </form>
      </React.Fragment>
    );
  }
}
