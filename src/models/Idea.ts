export default interface Idea {
    summary: string;
    description: string;
    slug: string;
}

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