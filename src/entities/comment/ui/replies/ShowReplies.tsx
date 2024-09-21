import { Button } from "@mui/material";
import { FC, useState } from "react";
import { IReply } from "../../../../shared/types";
import { Reply } from "../../../../widgets/commentList/ui/replies/Reply";
import { GetReplies } from "../../../../shared/api";
import cl from "./ShowReplies.module.scss";
import { CallActions } from "../../../../widgets/commentList/ui/moreActions/CallActions";

export const ShowReplies: FC<any> = ({ comment }) => {
   const [replies, setReplies] = useState<IReply[]>([]);
   const [isVisible, setIsVisible] = useState(false);

   const openCloseReplies = () => {
      if (replies.length === 0) {
         setReplies(GetReplies(comment.repliesId));
      }
      setIsVisible((prev) => !prev);
   };

   if (!replies) {
      <div>loading</div>;
   }

   return (
      <div>
         <Button onClick={openCloseReplies}>Replies</Button>
         {isVisible && (
            <div className={cl.repliesList}>
               {replies.map((reply: any) => {
                  return (
                     <Reply
                        reply={reply}
                        moreActions={
                           <CallActions
                              comment={reply}
                              setComments={setReplies}
                           />
                        }
                     />
                  );
               })}
            </div>
         )}
      </div>
   );
};
