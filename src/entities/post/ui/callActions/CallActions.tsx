import { FC } from "react";
import { CallMoreActions } from "../../../../shared/ui/callMoreActions/CallMoreActions";
import { IPostType } from "../../../../shared/types";
import { useAppSelector } from "../../../../shared/hooks/hook";
import { ForeignPostActions } from "./actions/ForeignPostActions";
import { OwnPostActions } from "./actions/OwnPostActions";

interface Props {
   post: IPostType;
}

export const CallActions: FC<Props> = ({ post }) => {
   const profile = useAppSelector((state) => state.profile.profile);
   const isOwnPost = profile.id === post.authorId;

   return (
      <div>
         {isOwnPost ? (
            <CallMoreActions ActionList={<OwnPostActions post={post} />} />
         ) : (
            <CallMoreActions ActionList={<ForeignPostActions />} />
         )}
      </div>
   );
};
