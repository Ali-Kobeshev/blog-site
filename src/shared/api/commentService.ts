import { faker } from "@faker-js/faker";
import { ICommentType, IReply } from "../types/comment";
import { BlockTypes } from "../types";

//*fake fetch
export function GetPostComments(commentListId: string, isToShow?: boolean) {
   const commentQnty = isToShow ? 1 : 0;
   //Math.floor(Math.random() * (5 - 0 + 1)) + 0;
   const comments: ICommentType[] = [];
   while (comments.length < commentQnty) {
      const comment = {
         authorName: faker.person.fullName(),
         avatar: faker.image.avatarLegacy(),
         authorId: faker.string.uuid(),
         postDate: faker.date.recent({ days: 10 }),
         id: commentListId,
         content: {
            entityMap: {},
            blocks: [
               {
                  key: faker.string.uuid(),
                  text: faker.lorem.sentences({ min: 1, max: 5 }),
                  type: BlockTypes.Unstyled,
                  depth: 0,
                  inlineStyleRanges: [],
                  entityRanges: [],
                  data: {},
               },
            ],
         },
         likesQnty: faker.number.int({ max: 100 }),
         dislikesQnty: faker.number.int({ max: 70 }),
         ratedBy: {},
         repliesId: faker.string.uuid(),
      };
      comments.push(comment);
   }

   return comments;
}

export function GetReplies(repliesId: string) {
   const repliesQnty = 1;
   //Math.floor(Math.random() * (5 - 0 + 1)) + 0;
   const replies: IReply[] = [];
   while (replies.length < repliesQnty) {
      const comment = {
         authorName: faker.person.fullName(),
         avatar: faker.image.avatarLegacy(),
         authorId: faker.string.uuid(),
         postDate: faker.date.recent({ days: 10 }),
         id: repliesId,
         content: {
            entityMap: {},
            blocks: [
               {
                  key: faker.string.uuid(),
                  text: faker.lorem.sentences({ min: 1, max: 5 }),
                  type: BlockTypes.Unstyled,
                  depth: 0,
                  inlineStyleRanges: [],
                  entityRanges: [],
                  data: {},
               },
            ],
         },
         likesQnty: faker.number.int({ max: 20 }),
         dislikesQnty: faker.number.int({ max: 15 }),
         ratedBy: {},
      };
      replies.push(comment);
   }

   return replies;
}
