import { FC } from "react";
import { IPostType } from "../../../shared/types/index";
import cl from "./Post.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import { HtmlFromRawContent } from "../../HtmlFromRawData/HtmlFromRawContent";
import { CallActions } from "./callActions/CallActions";

export const Post: FC<{ post: IPostType }> = ({ post }) => {
   return (
      <div className={cl.post}>
         <div className={cl.topPart}>
            <div className={cl.user}>
               <img className={cl.avatar} src={post.avatar} alt="Post" />
               <span className={cl.userName}>{post.authorName}</span>
            </div>
            <CallActions post={post} />
         </div>
         <div>
            <img className={cl.preview} src={post.imgUrl} alt="Post" />
         </div>
         <p className={cl.content}>
            <HtmlFromRawContent rawContent={post.content} />
         </p>
         <Link to={`/posts/${post.id}`} state={{ post: post }}>
            <Button variant="outlined" size="small">
               Read more
            </Button>
         </Link>
         <div className={cl.bottomBar}>
            <div>
               <ThumbsUpDownIcon />
               {`${post.likesQnty}/${post.dislikesQnty}`}
            </div>
         </div>
      </div>
   );
};
