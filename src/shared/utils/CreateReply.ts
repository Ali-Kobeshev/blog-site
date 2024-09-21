import { faker } from "@faker-js/faker";
import { IReply, IProfile, IRawContent } from "../types";

export const CreateReply = (rawContent: IRawContent, profile: IProfile) => {
   const comment: IReply = {
      authorName: profile.name,
      avatar: profile.avatar,
      authorId: profile.id,
      postDate: {},
      id: faker.string.uuid(),
      content: rawContent as IRawContent,
      likesQnty: 0,
      dislikesQnty: 0,
      ratedBy: {},
   };
   return comment;
};
