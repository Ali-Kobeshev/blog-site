import { FC } from "react";
import { useAppSelector } from "../../shared/hooks/hook";
import cl from "./ProfilePage.module.scss";
import { Post } from "../../entities/post";

export const ProfilePage: FC<any> = () => {
   const profile = useAppSelector((state) => state.profile.profile);
   const ownPublications = useAppSelector((state) => state.ownPublications);

   return (
      <div>
         <div className={cl.nameAndAvatar}>
            <img src={profile.avatar} alt="avatar" className={cl.avatar} />
            <p className={cl.boldBigText}>{profile.name}</p>
         </div>
         <div className={cl.publications}>
            <p className={cl.boldBigText}>Publications</p>
            <div>
               {ownPublications.length === 0 ? (
                  <div>No publications</div>
               ) : (
                  ownPublications.map((pub) => {
                     return <Post post={pub} key={pub.id} />;
                  })
               )}
            </div>
         </div>
      </div>
   );
};
