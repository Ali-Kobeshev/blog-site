import { FC, memo } from "react";
import { EditorCore } from "../../sharedEditor/EditorCore/EditorCore";
import { BaseTools } from "../../sharedEditor/toolbar/BaseTools";
import { IRawContent } from "../../../../../shared/types";

interface Props {
   upsertAction: Function;
   initialRawContent?: IRawContent;
   applyFocusAfterRender?: boolean;
}

export const CommentEditor: FC<Props> = memo(
   ({ initialRawContent, upsertAction, applyFocusAfterRender }) => {
      return (
         <EditorCore
            upsertAction={upsertAction}
            tools={BaseTools}
            initialRawContent={initialRawContent}
            applyFocusAfterRender={applyFocusAfterRender}
         />
      );
   }
);
