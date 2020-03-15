import React, { Component } from "react";
import { IdeaStatus, NewIdea } from "../models/Idea";
import { AuthContext } from "../models/AuthService";
import { ROUTES } from "../routes";
import { Link } from "react-router-dom";
//Using CSS Modules over styled-components because I like autocomplete
import styles from "./NewIdeaForm.module.css"
interface NewIdeaProps {
  addNewIdea: (newIdea: NewIdea) => void;
}
const INITIAL_STATE = {
  description: "",
  summary: "",
  currentStatus: IdeaStatus.ToDo};
//TODO: Replace with functional component
export default class NewIdeaForm extends Component<NewIdeaProps, NewIdea> {
  constructor(props: NewIdeaProps) {
    super(props);
    this.state = INITIAL_STATE;
  }
  //TODO: There has to be an overarching type for this.
  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      default:
        console.log("Something has gone wrong " + JSON.stringify(this.state));
        break;
    }
  };
  submitIdea = (event: any) => {
    this.props.addNewIdea(this.state);
    this.setState(INITIAL_STATE);
    event.preventDefault();
  };
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <form className={styles.NewIdeaForm}>
              <h3>Adding New Idea</h3>
              {authContext.currentUser == null ? (
                <p>
                  <Link to={ROUTES.SIGN_IN}>
                    Please log in before submitting new ideas
                  </Link>
                </p>
              ) : (
                <React.Fragment>
                  <label>
                    One-sentence summary of the idea
                    <input
                      type="text"
                      name="summary"
                      value={this.state.summary}
                      onChange={this.handleChange}
                      placeholder="Brief summary"
                    />
                  </label>
                  <label>
                    Long description of the idea
                    <textarea
                      rows={6}
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                      placeholder="Long description of the idea"
                    />
                  </label>
                </React.Fragment>
              )}
              <button
                onClick={this.submitIdea}
                disabled={authContext.currentUser == null}
              >
                Add new idea to list
              </button>
            </form>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}
