import { FC, ReactNode } from "react";
import { Comment } from "../../../../entities/comment";
import { IReply } from "../../../../shared/types";

interface Props {
   reply: IReply;
   actionsBar?: ReactNode;
   moreActions?: ReactNode;
}

export const Reply: FC<Props> = ({ reply, actionsBar, moreActions }) => {
   return (
      <div>
         {
            <Comment
               comment={reply}
               actionsBar={actionsBar}
               moreActions={moreActions}
            />
         }
      </div>
   );
};
