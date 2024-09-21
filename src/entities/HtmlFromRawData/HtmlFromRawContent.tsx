import { FC, memo } from "react";
import { RenderBlock } from "./RenderBlock";
import { IRawContent } from "../../shared/types";
import { StructureListBlocks } from "./styledText/helpers/structureListBlocks";

interface Props {
   rawContent: IRawContent;
}

export const HtmlFromRawContent: FC<Props> = memo(({ rawContent }) => {
   const withLists = StructureListBlocks(rawContent);

   return (
      <div>
         {withLists.map((block: any, i: number) => {
            return (
               <RenderBlock
                  block={block}
                  entityMap={rawContent.entityMap}
                  key={i}
               />
            );
         })}
      </div>
   );
});
