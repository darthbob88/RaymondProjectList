import React from "react";
import Idea, { IdeaStatus } from "../models/Idea";

type IdeaTableProps = {
  listOfIdeas: Idea[];
};
/**
 * Simple table to list ideas for me to work on. Will eventually fix it to show only summaries
 * until somebody clicks an idea to expand it, but for now this will do.
 * @param {Idea[]} listOfIdeas - An array of Idea to show
 * @component
 * @example
 * const ideaList = defaultIdeaList
 * return (
 *   <IdeaTable listOfIdeas={ideaList} />
 * )
 */
const IdeaTable: React.FunctionComponent<IdeaTableProps> = ({
  listOfIdeas
}) => {
  return (
    <React.Fragment>
      <h1>List of Ideas</h1>
      <ul id="ideaTable">
        {listOfIdeas.map(idea => (
          <IdeaListing key={idea.slug} idea={idea} />
        ))}
      </ul>
    </React.Fragment>
  );
};

type IdeaListingProps = { idea: Idea };
/**TODO: Better name. */
const IdeaListing: React.FunctionComponent<IdeaListingProps> = ({ idea }) => (
  <li className="ideaListing">
    <h3>Summary: {idea.summary} </h3>
    <p>
      <b>Description</b>: {idea.description}
    </p>
    <p>
      <b>Status</b>: {idea.currentStatus}
    </p>
    //TODO: Maybe turn this into its own component, or turn Status into a union type? Just something to remove the need for a check here.
    //TODO: Or maybe shift this into a separate detail component, and only show description and summary on the main page.
    {idea.currentStatus !== IdeaStatus.ToDo && (
      <React.Fragment>
        <p>
          <b>Repository URL</b>: {idea.repositoryURL}
        </p>
        <p>
          <b>Website URL</b>: {idea.projectURL}
        </p>
      </React.Fragment>
    )}
  </li>
);

export default IdeaTable;
