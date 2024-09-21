import { IRawContent } from "./rawContent";

interface ICommentTypeBase {
   readonly authorName: string;
   readonly avatar: string;
   readonly authorId: string;
   readonly postDate: object;
   readonly id: string;
   content: IRawContent;
   likesQnty: number;
   dislikesQnty: number;
   ratedBy: { [userId: string]: "like" | "dislike" };
}

export interface IReply extends ICommentTypeBase {}

export interface ICommentType extends ICommentTypeBase {
   repliesId: string;
}
