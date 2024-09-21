import { FC, useState, Dispatch, SetStateAction } from "react";
import { RaterComponent } from "../../../../../features/rateEntity";
import cl from "./RepliesActionBar.module.scss";
import { Button } from "@mui/material";
import { CommentEditor } from "../../../../../features/editor/ui/variantEditors/commentEditor/CommentEditor";
import { useAppSelector } from "../../../../../shared/hooks/hook";
import { CreateReply } from "../../../../../shared/utils";
import { BlockTypes, IReply, IRawContent } from "../../../../../shared/types";

interface Props {
   reply: IReply;
   setReplies: Dispatch<SetStateAction<IReply[]>>;
}

export const RepliesActionBar: FC<Props> = ({ reply, setReplies }) => {
   const profile = useAppSelector((state) => state.profile.profile);
   const [isEditorVisible, setIsEditorVisible] = useState(false);
   const addNewReply = (content: IRawContent) => {
      //content argument is assigned at editor level
      setReplies((prev: IReply[]) => [...prev, CreateReply(content, profile)]);
      setIsEditorVisible(false);
   };
   const namePrefilledContent = {
      blocks: [
         {
            key: `${Date.now()}`,
            text: `${reply.authorName}, `,
            type: BlockTypes.Unstyled,
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
         },
      ],
      entityMap: {},
   };

   return (
      <div>
         <div className={cl.row}>
            <RaterComponent entity={reply} setEntities={setReplies} />
            <Button onClick={() => setIsEditorVisible((prev) => !prev)}>
               Reply
            </Button>
         </div>
         {isEditorVisible && (
            <CommentEditor
               upsertAction={addNewReply}
               applyFocusAfterRender={true}
               initialRawContent={namePrefilledContent}
            />
         )}
      </div>
   );
};
