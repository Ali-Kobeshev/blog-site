import { FC, useState, useEffect, useRef, createContext } from "react";
import {
   Editor,
   EditorState,
   RichUtils,
   convertFromRaw,
   convertToRaw,
   RawDraftContentState,
   getDefaultKeyBinding,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { EditorToolbar } from "../toolbar/EditorToolbar";
import { myBlockStyleFn } from "../../../../../styles/styleMaps/BlockStyleFn";
import { InlineStyleMap } from "../../../../../styles/styleMaps/InlineStyleMap";
import { IsContentEmpty } from "../../../utils/isContentEmpty";
import { IBlock, IRawContent } from "../../../../../shared/types";
import { Button } from "@mui/material";
import cl from "./EditorCore.module.scss";
import { ITool } from "../toolbar/BaseTools";
import { MyBlockRenderer } from "./utils/myBlockRenderer";

export const EditorContext = createContext<any>(null);

interface Props {
   tools: ITool[];
   upsertAction: Function;
   initialRawContent?: IRawContent;
   applyFocusAfterRender?: boolean;
   handleReturn?: Function;
   keyBindingFn?: Function;
}

export const EditorCore: FC<Props> = ({
   tools,
   upsertAction,
   initialRawContent,
   applyFocusAfterRender,
   handleReturn,
   keyBindingFn,
}) => {
   const [editorState, setEditorState] = useState(() =>
      initialRawContent
         ? EditorState.createWithContent(
              convertFromRaw(initialRawContent as RawDraftContentState)
           )
         : EditorState.createEmpty()
   );

   //update or insert
   const upsertInputValue = () => {
      const rawContent = convertToRaw(editorState.getCurrentContent());
      if (
         IsContentEmpty(rawContent.blocks as IBlock[]) ||
         JSON.stringify(initialRawContent) === JSON.stringify(rawContent)
      ) {
         return;
      }
      upsertAction(rawContent);

      initialRawContent
         ? setEditorState(
              EditorState.createWithContent(
                 convertFromRaw(initialRawContent as RawDraftContentState)
              )
           )
         : setEditorState(EditorState.createEmpty());
   };

   const onChange = (newEditorState: EditorState) => {
      setEditorState(newEditorState);
   };

   const handleKeyCommand = (command: string) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
         onChange(newState);
         return "handled";
      }

      return "not-handled";
   };

   const editor = useRef(null);

   useEffect(() => {
      //to start input from the end if the input is not empty after rendering
      if (applyFocusAfterRender && initialRawContent) {
         const { blocks } = initialRawContent;
         const lastBlock = blocks[blocks.length - 1];
         const lastBlocksText = lastBlock.text;
         const editorStateSize = lastBlocksText.length;
         const selectionState = editorState.getSelection();
         const newSelectionState = selectionState.merge({
            anchorOffset: editorStateSize,
            focusOffset: editorStateSize,
            anchorKey: lastBlock.key,
            focusKey: lastBlock.key,
            isBackward: false,
            hasFocus: true,
         });

         setEditorState(
            EditorState.forceSelection(editorState, newSelectionState)
         );
         return;
      }
      if (applyFocusAfterRender) {
         const current = editor.current as any;
         current.focus();
      }
   }, []);

   return (
      <EditorContext.Provider value={{ editorState, setEditorState }}>
         <div>
            <EditorToolbar
               editorState={editorState}
               setEditorState={setEditorState}
               tools={tools}
            />
            <div className={cl.editor}>
               <Editor
                  ref={editor}
                  onChange={onChange}
                  editorState={editorState}
                  blockRendererFn={(block) =>
                     MyBlockRenderer(editorState, setEditorState, block)
                  }
                  blockStyleFn={myBlockStyleFn}
                  customStyleMap={InlineStyleMap}
                  handleKeyCommand={handleKeyCommand}
                  keyBindingFn={
                     (e) =>
                        keyBindingFn
                           ? keyBindingFn(e, editorState)
                           : getDefaultKeyBinding(e) //call function or apply default value
                  }
                  handleReturn={
                     () =>
                        handleReturn
                           ? handleReturn(editorState, setEditorState)
                           : "not-handled" //call function or apply default value
                  }
               />
            </div>
            <Button
               style={{
                  marginBottom: "5px",
               }}
               variant="outlined"
               onClick={upsertInputValue}
            >
               Send
            </Button>
         </div>
      </EditorContext.Provider>
   );
};
