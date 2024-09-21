import { faker } from "@faker-js/faker";
import { ICommentType, IProfile, IRawContent } from "../types";

export const CreateComment = (rawContent: IRawContent, profile: IProfile) => {
   const comment: ICommentType = {
      authorName: profile.name,
      avatar: profile.avatar,
      authorId: profile.id,
      postDate: {},
      id: faker.string.uuid(),
      content: rawContent as IRawContent,
      likesQnty: 0,
      dislikesQnty: 0,
      ratedBy: {},
      repliesId: faker.string.uuid(),
   };
   return comment;
};
