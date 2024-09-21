import { useMemo } from "react";
import { Link } from "react-router-dom";
import { GetPostList } from "../../shared/api";
import cl from "./MostPopularPosts.module.scss";

export const MostPopularPosts = () => {
   const posts = useMemo(() => GetPostList(), []);

   return (
      <div>
         <p className={cl.subtitle}>Most popular 💥</p>
         {posts.map((post, i) => {
            return (
               <div className={cl.link}>
                  <Link to={`/posts/${post.id}`} state={{ post: post }} key={i}>
                     <p className={cl.linkValue}>
                        {post.content.blocks[0].text}
                     </p>
                  </Link>
               </div>
            );
         })}
      </div>
   );
};
