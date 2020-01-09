import slugify from "slugify";
import { databaseRef } from "../firebase";
import Idea, { NewIdea } from "./Idea";

//TODO: Turn this into a real-time watcher, so it gets automatically updated.
export const fetchAllIdeas = async (): Promise<Idea[]> => {
  let listOfIdeas: Idea[] = [];
  const querySnapshot = await databaseRef.collection("ideas").get();
  listOfIdeas = querySnapshot.docs.map(doc => {
    const newIdea = { ...doc.data() as Idea, slug: doc.id };
    return newIdea;
  });
  return listOfIdeas;
};
//TODO: Should this return a single idea, or the entire updated list?
export const addIdea = async (newIdea: NewIdea): Promise<Idea> => {
  const newIdeaSlug = slugify(newIdea.summary.toLowerCase());
  await databaseRef
    .collection("ideas")
    .doc(newIdeaSlug)
    .set(newIdea, { merge: true });
  const addedIdea = await databaseRef
    .collection("ideas")
    .doc(newIdeaSlug)
    .get();
  return { ...addedIdea.data() as Idea, slug: addedIdea.id };
};
export const fetchSpecificIdea = async (ideaID: string): Promise<Idea> => {
  //TODO: Maybe I should abstract this to just ideasDB so I don't have to keep writing it out.
  const docRef = databaseRef.collection("ideas").doc(ideaID);
  const ideaSnapshot = await docRef.get();

  if (ideaSnapshot.exists) {
    // console.log("Document data:", ideaSnapshot.data());
    return { ...ideaSnapshot.data() as Idea, slug: ideaSnapshot.id };
  } else {
    // doc.data() will be undefined in this case
    // console.log("No such document!");
    throw new Error("No such document!");
  }
};
export const updateIdea = async (ideaID: string, ideaPatch: Partial<Idea>): Promise<Idea> => {
  const docRef = databaseRef.collection("ideas").doc(ideaID);
  await docRef.update(ideaPatch)
  const updatedIdea = await docRef.get();
  const result:Idea =  { ...updatedIdea.data() as Idea, slug: updatedIdea.id };
  return result;
}