import { BlockTypes } from "../../shared/types";
import "../../styles/block.scss";
import { IBlock } from "../../shared/types";
import { StyledText } from "./styledText/StyledText";

export const BlockToRender = {
   //*single blocks
   //headers
   [BlockTypes.HeaderOne]: ({ block }: any) => (
      <h1 className="default__style__h1">
         <StyledText block={block} />
      </h1>
   ),
   [BlockTypes.HeaderTwo]: ({ block }: any) => (
      <h2 className="default__style__h2">
         <StyledText block={block} />
      </h2>
   ),
   [BlockTypes.HeaderThree]: ({ block }: any) => (
      <h3 className="default__style__h3">
         <StyledText block={block} />
      </h3>
   ),
   [BlockTypes.HeaderFour]: ({ block }: any) => (
      <h4 className="default__style__h4">
         <StyledText block={block} />
      </h4>
   ),
   [BlockTypes.HeaderFive]: ({ block }: any) => (
      <h5 className="default__style__h5">
         <StyledText block={block} />
      </h5>
   ),
   [BlockTypes.HeaderSix]: ({ block }: any) => (
      <h6 className="default__style__h6">
         <StyledText block={block} />
      </h6>
   ),
   //other single blocks
   [BlockTypes.BlockQuote]: ({ block }: any) => (
      <div className="blockQuote">
         <StyledText block={block} />
      </div>
   ),
   [BlockTypes.Unstyled]: ({ block }: any) => (
      <div>
         <StyledText block={block} />
      </div>
   ),
   [BlockTypes.CodeBlock]: ({ block }: any) => (
      <div className="code">
         <StyledText block={block} />
      </div>
   ),
   [BlockTypes.Atomic]: ({ block }: any) => <div>image</div>,
   //*lists
   [BlockTypes.OrderedListItem]: ({ block }: any) => (
      <ol style={{ paddingLeft: "18px", marginBottom: "5px" }}>
         {block.elements.map((el: IBlock, i: number) => (
            <li key={i}>
               <StyledText block={el} />
            </li>
         ))}
      </ol>
   ),
   [BlockTypes.UnorderedListItem]: ({ block }: any) => (
      <ul style={{ paddingLeft: "20px", marginBottom: "5px" }}>
         {block.elements.map((el: IBlock, i: number) => (
            <li key={i}>
               <StyledText block={el} />
            </li>
         ))}
      </ul>
   ),
};
