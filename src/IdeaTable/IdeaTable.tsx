import React from 'react'
import Idea from "../models/Idea";

type IdeaTableProps = {
    listOfIdeas: Idea[];
}
const IdeaTable: React.FunctionComponent<IdeaTableProps> = ({ listOfIdeas }) => {
    return (
        <ul id="ideaTable"> {
            listOfIdeas.map(idea => ideaListing(idea))
        }
        </ul>
    )
}

/**TODO: Better name. */
const ideaListing = (idea: Idea) => {
return (    <li key={idea.slug} className="ideaListing">
        <h3>{idea.summary} </h3>
    <p>{idea.description}</p></li>);
}

export default IdeaTable
