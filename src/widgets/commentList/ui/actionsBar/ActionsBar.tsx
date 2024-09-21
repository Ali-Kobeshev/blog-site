import { FC, Dispatch, SetStateAction, useState } from "react";
import cl from "./ActionsBar.module.scss";
import { ICommentType, IReply, IRawContent } from "../../../../shared/types";
import { Button } from "@mui/material";
import { ShowReplies } from "../replies/showReplies/ShowReplies";
import { CommentEditor } from "../../../../features/editor";
import { CreateReply } from "../../../../shared/utils";
import { useAppSelector } from "../../../../shared/hooks/hook";
import { RaterComponent } from "../../../../features/rateEntity";

interface Props {
   comment: ICommentType;
   setComments: Dispatch<SetStateAction<any[]>>;
}

export const ActionsBar: FC<Props> = ({ comment, setComments }) => {
   const profile = useAppSelector((state) => state.profile.profile);
   const [replies, setReplies] = useState<IReply[]>([]);
   const [replyInputIsVisisble, setReplyInputIsVisisble] = useState(false);
   const [listIsVisible, setListIsVisible] = useState(false);
   const addReply = (content: IRawContent) => {
      setReplies((prev) => [...prev, CreateReply(content, profile)]);
      setReplyInputIsVisisble(false);
   };
   const replyBtnHandler = () => {
      setReplyInputIsVisisble((prev) => !prev);
      setListIsVisible(true);
   };

   return (
      <div>
         <div className={cl.topRow}>
            <RaterComponent entity={comment} setEntities={setComments} />
            <Button onClick={replyBtnHandler}>Reply</Button>
         </div>
         <ShowReplies
            replies={replies}
            setReplies={setReplies}
            isVisible={listIsVisible}
            setIsVisible={setListIsVisible}
            editor={
               replyInputIsVisisble && (
                  <CommentEditor
                     upsertAction={addReply}
                     applyFocusAfterRender={true}
                  />
               )
            }
         />
      </div>
   );
};
