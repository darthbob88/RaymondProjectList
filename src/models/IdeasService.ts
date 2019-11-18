import { databaseRef } from "../firebase";
import Idea from "./Idea";

//TODO: Turn this into a real-time watcher, so it gets automatically updated.
export const fetchAllIdeas = async (): Promise<Idea[]> => {
  let listOfIdeas: Idea[] = [];
  const querySnapshot = await databaseRef.collection("ideas").get();
  listOfIdeas = querySnapshot.docs.map(doc => {
    const newIdea = { ...doc.data(), id: doc.id } as Idea;
    return newIdea;
  });
  return listOfIdeas;
};
//TODO: Should this return a single idea, or the entire updated list?
export const addIdea = async (newIdea: Idea): Promise<Idea> => {
  await databaseRef
    .collection("ideas")
    .doc(newIdea.slug)
    .set(newIdea, { merge: true });
  // const addedIdea = await databaseRef
  //   .collection("ideas")
  //   .doc(newIdea.slug)
  //   .get();
  // return addedIdea.data() as Idea;
  return newIdea;
};
