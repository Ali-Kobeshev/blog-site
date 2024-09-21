import { FC, Dispatch, SetStateAction } from "react";
import { Reply } from "../Reply";
import cl from "./ReplyList.module.scss";
import { IReply } from "../../../../../shared/types";
import { RepliesActionBar } from "../repliesActionBar/RepliesActionBar";
import { CallActions } from "../../moreActions/CallActions";

interface Props {
   replies: IReply[];
   setReplies: Dispatch<SetStateAction<IReply[]>>;
}

export const ReplyList: FC<Props> = ({ replies, setReplies }) => {
   if (replies.length === 0) {
      return <div>no replies</div>;
   }
   return (
      <div className={cl.replyList}>
         {replies.map((reply: any) => {
            return (
               <Reply
                  key={reply.id}
                  reply={reply}
                  actionsBar={
                     <RepliesActionBar reply={reply} setReplies={setReplies} />
                  }
                  moreActions={
                     <CallActions comment={reply} setComments={setReplies} />
                  }
               />
            );
         })}
      </div>
   );
};
