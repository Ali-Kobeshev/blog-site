import React from "react";
import { GetPostList } from "../../../shared/api/postService";
import { Post } from "../../../entities/post/index";
import { IPostType } from "../../../shared/types/index";

export const PostList: React.FC = () => {
   const postList: IPostType[] = GetPostList();

   return (
      <div>
         {postList.map((post) => {
            return <Post post={post} key={post.id} />;
         })}
      </div>
   );
};
