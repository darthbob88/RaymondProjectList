import React from "react";
import Idea from "../models/Idea";
import { Link, NavLink } from "react-router-dom";

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
     <Link to={`/ideas/${idea.slug}`}> <IdeaListing key={idea.slug} idea={idea} /></Link>
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
  </li>
);

export default IdeaTable;
