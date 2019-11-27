/**
 * 
 */
export default interface Idea {
  summary: string;
  description: string;
  slug?: string;
}

// Default list of ideas, so I have something to show, and default new idea to add.
export const otherNewIdea = {
  summary: "Set up portfolio",
  description:
    "Set up personal website, mostly for this but also for hosting Calibre",
  slug: "setup-portfolio"
};
export const defaultIdeaList: Idea[] = [
  {
    summary: "Rebuild Media Logger",
    description:
      "Rebuild media library cataloger, using .NET Core and proper separation of concerns.",
    slug: "rebuild-media-logger"
  },
  {
    summary: "Voting App/Library",
    description:
      "Build an app to support polls using various methods of voting, including but not limited to IRV, score voting, and STV.",
    slug: "voting-app"
  }
];
