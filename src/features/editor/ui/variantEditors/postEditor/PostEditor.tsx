import { FC, memo } from "react";
import { EditorCore } from "../../sharedEditor/EditorCore/EditorCore";
import { PostsTools } from "./constants/PostsTools";
import { HandleReturn } from "./handlers/handleReturn";
import { KeyBindingFn } from "./handlers/keyBindingFn";
import { IRawContent } from "../../../../../shared/types";

interface Props {
   upsertAction: Function;
   initialRawContent?: IRawContent;
}

export const PostEditor: FC<Props> = memo(
   ({ upsertAction, initialRawContent }) => {
      return (
         <EditorCore
            tools={PostsTools}
            upsertAction={upsertAction}
            initialRawContent={initialRawContent}
            applyFocusAfterRender={true}
            handleReturn={HandleReturn}
            keyBindingFn={KeyBindingFn}
         />
      );
   }
);
