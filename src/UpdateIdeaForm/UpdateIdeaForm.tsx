import React, { Component } from "react";
import Idea, { IdeaStatus } from "../models/Idea";

interface UpdateIdeaProps {
  currentIdea: Idea;
  updateExistingIdea: (ideaID: string, ideaPatch: Partial<Idea>) => void;
}
//TODO: Functional component.
export default class UpdateIdeaForm extends Component<UpdateIdeaProps, Idea> {
  constructor(props: UpdateIdeaProps) {
    super(props);
    this.state = props.currentIdea;
  }
  //TODO: There has to be an overarching type for this.
  handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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
      case "repository":
        this.setState({ repositoryURL: value });
        break;
      case "projectURL":
        this.setState({ projectURL: value });
        break;
      case "currentStatus":
        this.setState({ currentStatus: value as IdeaStatus });
        break;
      default:
        console.log("Something has gone wrong " + JSON.stringify(this.state));
        break;
    }
  };
  submitIdea = (event: any) => {
    this.props.updateExistingIdea(this.state.slug, this.state);
    event.preventDefault();
  };
  //TODO: Actually style this shit.
  render() {
    return (
      <React.Fragment>
        <form>
          <h3>Updating idea {this.state.summary} </h3>
          <label>
            One-sentence summary of the idea
            <input
              type="text"
              name="summary"
              onChange={this.handleChange}
              value={this.state.summary}
            />
          </label>
          <label>
            Long description of the idea
            <textarea
              rows={6}
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
          </label>
          <label>
            URL for the project repository
            <input
              disabled={this.state.currentStatus === IdeaStatus.ToDo}
              type="text"
              name="repository"
              onChange={this.handleChange}
              value={this.state.repositoryURL}
            />
          </label>
          <label>
            URL for the project Website
            <input
              disabled={this.state.currentStatus === IdeaStatus.ToDo}
              type="text"
              name="projectURL"
              onChange={this.handleChange}
              value={this.state.projectURL}
            />
          </label>

          <label>
            Status of the Idea
            <select
              onChange={this.handleChange}
              value={this.state.currentStatus}
              name="currentStatus"
            >
              {Object.values(IdeaStatus).map(status => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <button onClick={this.submitIdea}>Update this idea</button>
        </form>
      </React.Fragment>
    );
  }
}
