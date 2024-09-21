import { Button } from "@mui/material";
import { FC, Dispatch, SetStateAction, ReactNode } from "react";
import cl from "./ShowReplies.module.scss";
import { ReplyList } from "../replyList/ReplyList";
import { IReply } from "../../../../../shared/types";

interface Props {
   replies: IReply[];
   setReplies: Dispatch<SetStateAction<IReply[]>>;
   isVisible: boolean;
   setIsVisible: Dispatch<SetStateAction<boolean>>;
   editor: ReactNode;
}

export const ShowReplies: FC<Props> = ({
   replies,
   setReplies,
   isVisible,
   setIsVisible,
   editor,
}) => {
   const openCloseReplies = () => {
      setIsVisible((prev: boolean) => !prev);
   };

   if (!replies) {
      <div>loading</div>;
   }

   return (
      <div className={cl.wrapper}>
         <Button className={cl.showRepsBtn} onClick={openCloseReplies}>
            Replies
         </Button>
         {isVisible && (
            <div>
               {editor}
               <ReplyList replies={replies} setReplies={setReplies} />
            </div>
         )}
      </div>
   );
};
