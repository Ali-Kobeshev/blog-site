import { BlockTypes } from "../../../shared/types";

export const InitialContent = {
   blocks: [
      {
         key: `${Date.now()}`,
         text: "Header",
         type: BlockTypes.HeaderOne,
         depth: 0,
         inlineStyleRanges: [],
         entityRanges: [],
         data: {},
      },
      {
         key: `${Date.now()}1`,
         text: "",
         type: BlockTypes.Unstyled,
         depth: 0,
         inlineStyleRanges: [],
         entityRanges: [],
         data: {},
      },
   ],
   entityMap: {},
};
