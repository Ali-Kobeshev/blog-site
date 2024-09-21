import { FC } from "react";
import cl from "./StyledText.module.scss";
import { IBlock } from "../../../shared/types";
import { SetStyles } from "./helpers/setStyles";
import { InlineStyleMap } from "../../../styles/styleMaps/InlineStyleMap";

interface Props {
   block: IBlock;
}

//so that all styles can be stuffed into one style{{}} object (into html tags/components propertie)
const mergeStyles = (styles: string[]) => {
   return styles.reduce(
      (mergedStyles: React.CSSProperties, styleKey: string) => {
         return { ...mergedStyles, ...InlineStyleMap[styleKey] };
      },
      {}
   );
};

export const StyledText: FC<Props> = ({ block }) => {
   const styledTextChunks = SetStyles(block);

   if (!styledTextChunks) {
      return <div>loading</div>;
   }
   return (
      <div>
         {styledTextChunks.map((chunk, i) => {
            const mergedStyles = mergeStyles(chunk.styles);

            return (
               <span key={i} style={mergedStyles}>
                  {chunk.chunk}
               </span>
            );
         })}
      </div>
   );
};
