import React, { Component } from "react";
import Idea from "../models/Idea";
import * as IdeasService from "../models/IdeasService";
import { RouteComponentProps } from "react-router-dom";
type IdeaDetailPageState = {
  selectedIdea?: Idea;
  isLoading: boolean;
  hasError: boolean;
};
//TODO: Replace this with a functional component using useParam.
// https://dev.to/ibrahima92/a-complete-beginner-s-guide-to-react-router-include-router-hooks-kgd
class IdeaDetailPage extends Component<
  RouteComponentProps<{ id: string }>,
  IdeaDetailPageState
> {
  constructor(props: any) {
    super(props);

    this.state = { selectedIdea: undefined, isLoading: true, hasError: false };
  }

  componentWillMount = async () => {
    console.log("IdeaDetailPage will mount");

   
  };

  componentDidMount = async () => {
    console.log("IdeaDetailPage mounted");
    const result = await IdeasService.fetchSpecificIdea(
      this.props.match.params.id
    );
    this.setState({ selectedIdea: result, isLoading: false });
  };

  // componentWillReceiveProps = nextProps => {
  //   console.log("IdeaDetailPage will receive props", nextProps);
  // };

  // componentWillUpdate = (nextProps, nextState) => {
  //   console.log("IdeaDetailPage will update", nextProps, nextState);
  // };

  componentDidUpdate = () => {
    console.log("IdeaDetailPage did update");
  };

  componentWillUnmount = () => {
    console.log("IdeaDetailPage will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    } else if (this.state.selectedIdea !== undefined) {
      const selectedIdea = this.state.selectedIdea;
      return (
        <div className="IdeaDetailPageWrapper">
          <h3>Summary: {selectedIdea.summary} </h3>
          <p>
            <b>Description</b>: {selectedIdea.description}
          </p>
          <p>
            <b>Status</b>: {selectedIdea.currentStatus}
          </p>
          <p>
            <b>Repository URL</b>: {selectedIdea.repositoryURL}
          </p>
          <p>
            <b>Website URL</b>: {selectedIdea.projectURL}
          </p>
        </div>
      );
    } else {
      return <h2>Still loading</h2>
    }
  }
}

export default IdeaDetailPage;
