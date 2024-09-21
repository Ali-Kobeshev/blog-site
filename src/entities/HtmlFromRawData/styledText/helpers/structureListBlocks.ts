import { IBlock, IRawContent, IList } from "../../../../shared/types";

type MixedArray = IBlock | IList;

export const StructureListBlocks = (rawContent: IRawContent) => {
   const unorderedList: IBlock[] = [];
   const orderedList: IBlock[] = [];

   const withStructuredLists = rawContent.blocks.reduce(
      (acc: MixedArray[], block: IBlock) => {
         function pushList(list: IBlock[], type: string) {
            if (list.length > 0) {
               acc.push({
                  type: type as any,
                  elements: [...list],
               });
               list.length = 0;
            }
         }

         if (block.type === "unordered-list-item") {
            if (orderedList.length > 0) {
               pushList(orderedList, "ordered-list-item");
            }
            unorderedList.push(block);
         } else if (block.type === "ordered-list-item") {
            if (unorderedList.length > 0) {
               pushList(unorderedList, "unordered-list-item");
            }
            orderedList.push(block);
         } else {
            pushList(unorderedList, "unordered-list-item");
            pushList(orderedList, "ordered-list-item");
            acc.push({
               ...block,
            });
         }
         return acc;
      },
      []
   );

   // Check if there's a remaining list to add after the loop
   if (unorderedList.length > 0) {
      withStructuredLists.push({
         type: "unordered-list-item",
         elements: unorderedList,
      });
   }
   if (orderedList.length > 0) {
      withStructuredLists.push({
         type: "ordered-list-item",
         elements: orderedList,
      });
   }

   return withStructuredLists;
};
