import "../block.scss";
import { BlockTypes } from "../../shared/types";

// FOR BLOCK LEVEL STYLES(Returns CSS Class From block.scss)
export const myBlockStyleFn = (contentBlock: any) => {
   const type = contentBlock.getType();

   switch (type) {
      case BlockTypes.HeaderOne:
         return "default__style__h1";
      case BlockTypes.HeaderTwo:
         return "default__style__h2";
      case BlockTypes.HeaderThree:
         return "default__style__h3";
      case BlockTypes.HeaderFour:
         return "default__style__h4";
      case BlockTypes.HeaderFive:
         return "default__style__h5";
      case BlockTypes.HeaderSix:
         return "default__style__h6";
      case BlockTypes.BlockQuote:
         return "blockQuote";
      case BlockTypes.CodeBlock:
         return "code";
      default:
         return "";
   }
};
