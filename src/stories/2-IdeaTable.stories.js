import React from 'react';
import IdeaTable from "../IdeaTable/IdeaTable"
import {defaultIdeaList} from "../models/Idea"

export default {
  title: 'IdeaTable',
};

export const OneIdea = () =><IdeaTable listOfIdeas={defaultIdeaList} />;

export const ActiveIdea = () =><IdeaTable listOfIdeas={defaultIdeaList} />;