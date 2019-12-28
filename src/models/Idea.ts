/**
 * A basic type to contain project ideas/requests for me to work on.
 * @property {string} summary Brief summary of the project.
 * @property {string} description Longer and more detailed explanation of the project.
 * @property {?string} projectURL URL for the project, if any.
 * @property {?string} repositoryURL URL for the project repository.
 * @property {string} slug URL slug used for individual project pages.
 * @property {IdeaStatus} currentStatus Current status of the project. To do, doing, done, etc.
 */
//TODO: Get this integrated with some documentation generator
 export default interface Idea {
  summary: string;
  description: string;
  projectURL?: string;
  repositoryURL?: string;
  currentStatus: IdeaStatus
  slug: string;
}


export enum IdeaStatus{
  Done = "Done",
  InProgress = "In Progress",
  ToDo = "To Do",
  Archived = "Archived"
}
// Default list of ideas, so I have something to show, and default new idea to add.
export const otherNewIdea = {
  summary: "Set up portfolio",
  description:
    "Set up personal website, mostly for this but also for hosting Calibre",
    currentStatus:IdeaStatus.ToDo
};
export const defaultIdeaList: Idea[] = [otherNewIdea,
  {
    summary: "Rebuild Media Logger",
    description:
      "Rebuild media library cataloger, using .NET Core and proper separation of concerns.",
      currentStatus:IdeaStatus.ToDo
  },
  {
    summary: "Voting App/Library",
    description:
      "Build an app to support polls using various methods of voting, including but not limited to IRV, score voting, and STV.",
      currentStatus:IdeaStatus.ToDo
  },{
    summary: "Recipe Database",
    description:
      `Aside from just doing "allourrecipes.com", it'd also be nice if I can get epub export for the recipes. A new digital version of the Bowhay cookbook.`,
      currentStatus:IdeaStatus.ToDo
  }
];
