import { FC, ReactNode } from "react";
import cl from "./Comment.module.scss";
import { ICommentType, IReply } from "../../../shared/types";
import { HtmlFromRawContent } from "../../HtmlFromRawData/HtmlFromRawContent";

interface Props {
   comment: ICommentType | IReply;
   actionsBar?: ReactNode;
   moreActions?: ReactNode;
}

export const Comment: FC<Props> = ({ comment, actionsBar, moreActions }) => {
   return (
      <div>
         <div className={cl.wrapper}>
            <div className={cl.comment}>
               <div className={cl.authorInfo}>
                  <img
                     className={cl.avatar}
                     src={comment.avatar}
                     alt="avatar"
                  />
                  <span>{comment.authorName}</span>
               </div>
               <HtmlFromRawContent rawContent={comment.content} />
            </div>
            {moreActions}
         </div>
         {actionsBar}
      </div>
   );
};
