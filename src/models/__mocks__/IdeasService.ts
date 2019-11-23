import Idea, { defaultIdeaList } from "../Idea";

export const fetchAllIdeas = async (): Promise<Idea[]> => {
  return new Promise(resolve => resolve(defaultIdeaList));
};
//TODO: Should this return a single idea, or the entire updated list?
export const addIdea = async (newIdea: Idea): Promise<Idea> => {
    return newIdea;
};
export const fetchSpecificIdea = async (ideaID: string): Promise<Idea> => {
  const result = defaultIdeaList.find(idea => idea.slug == ideaID);
  if (result != null) {
    return result;
  } else {
    throw new Error("No such document!");
  }
};
