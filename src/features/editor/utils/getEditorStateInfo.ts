import { EditorState } from "draft-js";

export const GetEditorStateInfo = (editorState: EditorState) => {
   const selection = editorState.getSelection();
   const contentState = editorState.getCurrentContent();
   const blockKey = selection.getStartKey();
   const currentBlock = contentState.getBlockForKey(blockKey);
   const blockText = currentBlock.getText();

   return {
      selection,
      contentState,
      blockKey,
      currentBlock,
      blockText,
   };
};
