import { Modifier, EditorState } from "draft-js";
import { GetEditorStateInfo } from "../../../../utils/getEditorStateInfo";

export const HandleReturn = (
   editorState: EditorState,
   setEditorState: (EditorState: EditorState) => void
) => {
   const { selection, contentState, currentBlock } =
      GetEditorStateInfo(editorState);

   if (currentBlock.getType() === "header-one") {
      const newContentState = Modifier.splitBlock(contentState, selection);
      const newBlock = Modifier.setBlockType(
         newContentState,
         newContentState.getSelectionAfter(),
         "unstyled"
      );

      const newEditorState = EditorState.push(
         editorState,
         newBlock,
         "split-block"
      );
      setEditorState(newEditorState);
      return "handled"; //cancel default behavior
   }

   return "not-handled"; //for another cases use default behavior
};
