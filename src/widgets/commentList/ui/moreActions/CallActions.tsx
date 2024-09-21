import {
   FC,
   Dispatch,
   SetStateAction,
   lazy,
   LazyExoticComponent,
   ComponentType,
} from "react";
import { ICommentType, IReply } from "../../../../shared/types";
import { useAppSelector } from "../../../../shared/hooks/hook";
import { CallMoreActions } from "../../../../shared/ui/callMoreActions/CallMoreActions";

type LazyComponent = LazyExoticComponent<ComponentType<any>>;
//lazy imports
const OwnCommentsActions: LazyComponent = lazy(() =>
   import("./actions/OwnCommentsActions").then((module) => ({
      default: module.OwnCommentsActions,
   }))
);
const ForeignCommentsActions: LazyComponent = lazy(() =>
   import("./actions/ForeignCommentsActions").then((module) => ({
      default: module.ForeignCommentsActions,
   }))
);

type Entity = IReply | ICommentType;

interface Props {
   comment: Entity;
   setComments: Dispatch<SetStateAction<Entity[]>>;
}

export const CallActions: FC<Props> = ({ comment, setComments }) => {
   const profile = useAppSelector((state) => state.profile.profile);
   const isOwnComment = profile.id === comment.authorId;

   return (
      <div>
         {isOwnComment ? (
            <CallMoreActions
               ActionList={
                  <OwnCommentsActions
                     comment={comment}
                     setComments={setComments}
                  />
               }
            />
         ) : (
            <CallMoreActions
               ActionList={
                  <ForeignCommentsActions
                     comment={comment}
                     setComments={setComments}
                  />
               }
            />
         )}
      </div>
   );
};
