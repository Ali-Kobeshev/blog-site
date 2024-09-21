import { ICommentType } from "../../../shared/types/index";
import cl from "./CommentList.module.scss";
import { Comment } from "../../../entities/comment";
import { FC, Dispatch, SetStateAction, memo } from "react";
import { ActionsBar } from "./actionsBar/ActionsBar";
import { CallActions } from "./moreActions/CallActions";

interface Props {
   comments: ICommentType[];
   setComments: Dispatch<SetStateAction<ICommentType[]>>;
}

export const CommentList: FC<Props> = memo(({ comments, setComments }) => {
   return (
      <div className={cl.wrapper}>
         <p className={cl.commentsQnty}>comments {comments.length}</p>
         <div>
            {comments.map((comment) => {
               return (
                  <Comment
                     comment={comment}
                     key={comment.id}
                     moreActions={
                        <CallActions
                           comment={comment}
                           setComments={setComments as () => ICommentType[]}
                        />
                     }
                     actionsBar={
                        <ActionsBar
                           comment={comment}
                           setComments={setComments}
                        />
                     }
                  />
               );
            })}
         </div>
      </div>
   );
});
