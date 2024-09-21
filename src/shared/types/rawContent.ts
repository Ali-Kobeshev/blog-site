import { BlockTypes } from "./blockTypes";

type ListItems = "unordered-list-item" | "ordered-list-item";

export interface InlineStyleRange {
   offset: number;
   length: number;
   style: string;
}

export interface IBlock {
   key: string;
   text: string;
   type: BlockTypes;
   depth: number;
   inlineStyleRanges: InlineStyleRange[];
   entityRanges: any[];
   data: object;
}

export interface IRawContent {
   blocks: IBlock[];
   entityMap: object;
}

export interface IList {
   type: ListItems;
   elements: IBlock[];
}
