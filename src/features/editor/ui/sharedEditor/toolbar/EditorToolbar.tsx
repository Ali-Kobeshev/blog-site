import { RichUtils, EditorState } from "draft-js";
import { FC, SyntheticEvent } from "react";
import cl from "./EditorToolbar.module.scss";
import { ITool } from "./BaseTools";
import { IsActive } from "./utils/IsActive";

interface Props {
   editorState: EditorState;
   setEditorState: (EditorState: EditorState) => void;
   tools: ITool[];
}

export const EditorToolbar: FC<Props> = ({
   editorState,
   setEditorState,
   tools,
}) => {
   const applyStyle = (
      e: SyntheticEvent<HTMLButtonElement>,
      method: string,
      style: string
   ) => {
      e.preventDefault();
      const selection = editorState.getSelection();
      const blockType = editorState
         .getCurrentContent()
         .getBlockForKey(selection.getStartKey())
         .getType();

      //so that there is no more than one h1
      //and so that you can't change existing h1 to another block
      if (blockType === "header-one" || style === "header-one") {
         return null;
      }

      method === "block"
         ? setEditorState(RichUtils.toggleBlockType(editorState, style))
         : setEditorState(RichUtils.toggleInlineStyle(editorState, style));
   };

   return (
      <div className={cl.toolbar}>
         {tools.map((t: ITool, i: number) => {
            const btn = t.hasAdditionalActions ? (
               t.icon
            ) : (
               <button
                  style={{
                     color: IsActive(t.style, t.method, editorState)
                        ? "#4cb7eb"
                        : "#777",
                  }}
                  title={t.label}
                  key={`${t.label}-${i}`}
                  onClick={(e) => applyStyle(e, t.method, t.style)}
                  onMouseDown={(e) => e.preventDefault()}
               >
                  {t.icon || t.label}
               </button>
            );
            return btn;
         })}
      </div>
   );
};
