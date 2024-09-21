import { BaseTools } from "../../../sharedEditor/toolbar/BaseTools";
import { ITool } from "../../../sharedEditor/toolbar/BaseTools";

const specificTools: ITool[] = [
   { label: "H1", style: "header-one", method: "block" },
   { label: "H2", style: "header-two", method: "block" },
   { label: "H3", style: "header-three", method: "block" },
   { label: "H4", style: "header-four", method: "block" },
   { label: "H5", style: "header-five", method: "block" },
   { label: "H6", style: "header-six", method: "block" },
];

export const PostsTools = [...BaseTools, ...specificTools];
