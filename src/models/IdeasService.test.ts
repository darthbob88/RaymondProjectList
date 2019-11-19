import * as IdeasService from "./IdeasService";
import Idea, { otherNewIdea } from "./Idea";
describe("IdeasService", () => {
  xit("should let me read data", async () => {
    let listOfIdeas: Idea[] = await IdeasService.fetchAllIdeas();
    console.log(listOfIdeas);
    expect(listOfIdeas.length).toBeGreaterThan(0);
  });
  xit("should let me add data", async () => {
    const ideaToAdd = otherNewIdea;
    let addedIdea: Idea = await IdeasService.addIdea(ideaToAdd);
    expect(addedIdea.description).toEqual(ideaToAdd.description);
  });
   it("should let me read a specific document", async () => {
     let listOfIdeas: Idea = await IdeasService.fetchSpecificIdea("setup-portfolio");
     console.log(listOfIdeas);
     expect(listOfIdeas).toBeDefined();
   });
});
