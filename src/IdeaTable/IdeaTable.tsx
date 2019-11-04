import React from 'react'
import Idea from "../models/Idea";

type IdeaTableProps = {
    listOfIdeas: Idea[];
}
const IdeaTable: React.FunctionComponent<IdeaTableProps> = ({ listOfIdeas }) => {
    return (
      <React.Fragment>
        <h1>List of Ideas</h1>
        <ul id="ideaTable">
          {" "}
          {listOfIdeas.map(idea => (
            <IdeaListing key={idea.slug} idea={idea} />
          ))}
        </ul>
      </React.Fragment>
    );
}

type IdeaListingProps = {idea: Idea};
/**TODO: Better name. */
const IdeaListing: React.FunctionComponent<IdeaListingProps> = ({idea}) => (<li  className="ideaListing">
    <h3>Summary: {idea.summary} </h3>
    <p>{idea.description}</p></li>)

export default IdeaTable
