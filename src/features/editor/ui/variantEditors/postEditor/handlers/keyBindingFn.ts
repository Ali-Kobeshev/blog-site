import { getDefaultKeyBinding, EditorState } from "draft-js";
import { GetEditorStateInfo } from "../../../../utils/getEditorStateInfo";
import React from "react";

export const KeyBindingFn = (
   e: React.KeyboardEvent,
   editorState: EditorState
) => {
   const { currentBlock, blockText } = GetEditorStateInfo(editorState);

   if (
      currentBlock.getType() === "header-one" &&
      e.key === "Backspace" &&
      !blockText
   ) {
      return "prevent-delete-header-one-";
   }

   // This wasn't the delete key, so we return Draft's default command for this key
   return getDefaultKeyBinding(e);
};
