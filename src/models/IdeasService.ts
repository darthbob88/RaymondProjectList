import { databaseRef } from "../firebase";
import Idea from "./Idea";

//TODO: Turn this into a real-time watcher, so it gets automatically updated.
export const fetchAllIdeas = async ():Promise<Idea[]> => {
  let listOfIdeas: Idea[] = [];
  const querySnapshot = await databaseRef.collection("ideas").get();
  querySnapshot.forEach(doc => {
    const newIdea = { ...doc.data(), id: doc.id } as Idea;
    listOfIdeas.unshift(newIdea);
  }); 
  return listOfIdeas;
};
//TODO: Should this return a single idea, or the entire updated list?
export const addIdea = async (newIdea: Idea):Promise<Idea> => {
  const docRef = await databaseRef.collection("ideas").add(newIdea);
 const actualDocument = await docRef.get();
  return actualDocument.data() as Idea;
};
