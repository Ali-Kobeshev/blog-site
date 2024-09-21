import { IBlock, IList } from "../../shared/types";
import { FC } from "react";
import { BlockToRender } from "./Blocks";
import { ImageBlock } from "./atomicBlock/ImageBlock";

type Mixed = IBlock | IList;

interface Props {
   block: Mixed;
   entityMap: any;
}

export const RenderBlock: FC<Props> = ({ block, entityMap }) => {
   if (block.type === "atomic") {
      return <ImageBlock entityMap={entityMap} block={block} />;
   } else {
      const Block = BlockToRender[block.type];
      return <Block block={block} />;
   }
};
