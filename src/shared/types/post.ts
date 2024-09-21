import { IRawContent } from "./rawContent";

export interface IPostType {
   readonly authorName: string;
   readonly avatar: string;
   readonly authorId: string;
   readonly postDate: object;
   readonly id: string;
   imgUrl?: string;
   content: IRawContent;
   tags?: string[];
   readonly commentListId: string;
   likesQnty: number;
   dislikesQnty: number;
   ratedBy: { [userId: string]: "like" | "dislike" };
}
