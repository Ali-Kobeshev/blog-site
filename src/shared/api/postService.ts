import { faker } from "@faker-js/faker";
import { IPostType, BlockTypes } from "../types";

//*Fake data fetch
export function GetPostList(): IPostType[] {
   const postList: IPostType[] = [];

   while (postList.length < 5) {
      const post: IPostType = {
         authorName: faker.person.fullName(),
         avatar: faker.image.avatarLegacy(),
         authorId: faker.string.uuid(),
         postDate: faker.date.past({ years: 3 }),
         id: faker.string.uuid(),
         imgUrl: faker.image.urlLoremFlickr({ category: "cats" }),
         content: {
            blocks: [
               {
                  key: faker.string.uuid(),
                  text: faker.lorem.paragraphs({ min: 1, max: 1 }),
                  type: BlockTypes.HeaderOne,
                  depth: 0,
                  inlineStyleRanges: [],
                  entityRanges: [],
                  data: {},
               },
               {
                  key: faker.string.uuid(),
                  text: faker.lorem.paragraphs({ min: 3, max: 40 }),
                  type: BlockTypes.Unstyled,
                  depth: 0,
                  inlineStyleRanges: [],
                  entityRanges: [],
                  data: {},
               },
            ],
            entityMap: {},
         },
         //faker.lorem.paragraphs({ min: 3, max: 40 }),
         tags: [
            "Algorithm",
            "API",
            "Cybersecurity",
            "Artificial Intelligence",
            "Big Data",
            "Containerization",
            "DevOps",
            "Internet of Things (IoT)",
            "Machine Learning",
            "Cloud Computing",
         ],
         commentListId: faker.string.uuid(),
         likesQnty: faker.number.int({ max: 100 }),
         dislikesQnty: faker.number.int({ max: 70 }),
         ratedBy: {},
      };
      postList.push(post);
   }
   return postList;
}
