import { useLocation } from "react-router-dom";
import { ICommentType, IRawContent, IPostType } from "../../shared/types/index";
import cl from "./FullPost.module.scss";
import { GetPostComments } from "../../shared/api";
import { CommentList } from "../../widgets/commentList";
import { memo, useState } from "react";
import { CommentEditor } from "../../features/editor/ui/variantEditors/commentEditor/CommentEditor";
import { CreateComment } from "../../shared/utils";
import { useAppSelector } from "../../shared/hooks/hook";
import { RaterComponent } from "../../features/rateEntity";
import { HtmlFromRawContent } from "../../entities/HtmlFromRawData/HtmlFromRawContent";

export const FullPost = () => {
   const { state } = useLocation();
   const profile = useAppSelector((state) => state.profile.profile);
   const [post, setPost] = useState<IPostType>(state.post);
   const getPostComments =
      profile.id === post.authorId
         ? GetPostComments(state.commentId, false)
         : GetPostComments(state.commentId, true);

   const [comments, setComments] = useState<ICommentType[]>(getPostComments);

   const addComment = (content: IRawContent) => {
      setComments((prevComments: ICommentType[]) => [
         ...prevComments,
         CreateComment(content, profile),
      ]);
   };

   if (!state.post) {
      return <div>loading</div>;
   }

   return (
      <div>
         <div className={cl.post}>
            <h1 className={cl.title}>{state.post.title}</h1>
            <div className={cl.content}>
               <HtmlFromRawContent rawContent={state.post.content} />
            </div>
            <RaterComponent entity={post} setEntities={setPost as any} />
         </div>
         <CommentEditor upsertAction={addComment} />
         <CommentList comments={comments} setComments={setComments} />
      </div>
   );
};
