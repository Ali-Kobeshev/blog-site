export const IsActive = (style: string, method: string, editorState: any) => {
   if (method === "block") {
      const selection = editorState.getSelection();
      const blockType = editorState
         .getCurrentContent()
         .getBlockForKey(selection.getStartKey())
         .getType();
      return blockType === style;
   } else {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
   }
};
