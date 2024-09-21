import { ImageBlock } from "../customBlockRender/ImageBlock";
import { BlockTypes } from "../../../../../../shared/types";

export const MyBlockRenderer = (
   editorState: any,
   setEditorState: any,
   block: any
) => {
   if (block.getType() === BlockTypes.Atomic) {
      return {
         component: (props: any) => (
            <ImageBlock
               editorState={editorState}
               setEditorState={setEditorState}
               {...props}
            />
         ),
         editable: false,
      };
   }
   return null;
};
