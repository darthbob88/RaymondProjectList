import * as IdeasService from "./IdeasService";
import Idea, { otherNewIdea } from "./Idea";
describe("IdeasService", () => {
  it("should let me read data", async () => {
    let listOfIdeas: Idea[] = await IdeasService.fetchAllIdeas();
    // console.log(listOfIdeas);
    expect(listOfIdeas.length).toBeGreaterThan(0);
  });
  it("should let me add data", async () => {
    const ideaToAdd = otherNewIdea;
    let addedIdea: Idea = await IdeasService.addIdea(ideaToAdd);
    expect(addedIdea.description).toEqual(ideaToAdd.description);
  });
  it("should let me read a specific document", async () => {
    let listOfIdeas: Idea[] = await IdeasService.fetchAllIdeas();
    expect(listOfIdeas.length).toBeGreaterThan(0);
    let firstIdea: Idea = listOfIdeas[0];
    console.log(`Now Reading: ${firstIdea.slug}`);
    let specificIdea: Idea = await IdeasService.fetchSpecificIdea(firstIdea.slug);
    expect(specificIdea).toBeDefined();
  });

  it("should let me update a specific document", async () => {
    const testIdea: Idea = await IdeasService.fetchSpecificIdea("Set-up-portfolio");
    expect(testIdea).toBeDefined();
    const newRepoURL = "https://github.com/darthbob88/raymond-project-list";
    const modifiedIdea = await IdeasService.updateIdea(testIdea.slug, {repositoryURL: newRepoURL});
    console.log(`Updated Idea: ${JSON.stringify(modifiedIdea)}`);
    expect(modifiedIdea.repositoryURL).toBeDefined();
    expect(modifiedIdea.repositoryURL).toBe(newRepoURL);

  });
});
