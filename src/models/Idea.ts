export default interface Idea {
    summary: string;
    description: string;
    slug: string;
}

export const defaultIdeaList: Idea[] = [
    { description: "butts", summary: "butts", slug: "butts" },
{ description: "foo", summary: "bar", slug: "baz" }];