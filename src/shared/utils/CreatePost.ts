import { faker } from "@faker-js/faker";
import { IProfile, IRawContent, IPostType } from "../types";

export const CreatePost = (
   rawContent: IRawContent,
   profile: IProfile,
   preview?: string
) => {
   const post: IPostType = {
      authorName: profile.name,
      avatar: profile.avatar,
      authorId: profile.id,
      postDate: {},
      id: faker.string.uuid(),
      imgUrl: preview,
      content: rawContent as IRawContent,
      tags: [],
      commentListId: faker.string.uuid(),
      likesQnty: 0,
      dislikesQnty: 0,
      ratedBy: {},
   };
   return post;
};
