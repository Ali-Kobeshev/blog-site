import { FC, useState, useMemo, Dispatch, SetStateAction, memo } from "react";
import cl from "./RaterComponent.module.scss";
import { IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useAppSelector } from "../../../shared/hooks/hook";
import {
   IProfile,
   ICommentType,
   IReply,
   IPostType,
} from "../../../shared/types";
import { Rater } from "../rateEntity";

type RateType = "like" | "dislike";
type Entity = ICommentType | IReply | IPostType;

interface Props {
   entity: Entity;
   setEntities: Dispatch<SetStateAction<any>>; //can be array or single element
}

export const RaterComponent: FC<Props> = memo(({ entity, setEntities }) => {
   const profile: IProfile = useAppSelector((state) => state.profile.profile);

   const [ratingStatus, setRatingStatus] = useState(() => {
      if (!profile.id) {
         return "notRated";
      }
      if (!entity.ratedBy || !entity.ratedBy.hasOwnProperty(profile.id)) {
         return "notRated";
      }
      return entity.ratedBy[profile.id];
   });

   const rateStyles = useMemo(() => {
      const ratedStyle = { color: "#1976d2" };
      const notRatedStyle = { color: "aqua" };

      if (ratingStatus === "like") {
         return { like: ratedStyle, dislike: notRatedStyle };
      } else if (ratingStatus === "dislike") {
         return { like: notRatedStyle, dislike: ratedStyle };
      } else {
         return { like: notRatedStyle, dislike: notRatedStyle };
      }
   }, [ratingStatus]);

   const rateComment = (rateType: RateType) =>
      Rater(
         rateType,
         ratingStatus,
         setRatingStatus,
         entity,
         setEntities,
         profile
      );

   return (
      <div className={cl.actionBar}>
         <IconButton
            style={rateStyles.like}
            onClick={() => rateComment("like")}
         >
            <ThumbUpIcon fontSize="small" />
         </IconButton>
         {entity.likesQnty}
         <IconButton
            style={rateStyles.dislike}
            onClick={() => rateComment("dislike")}
         >
            <ThumbDownIcon fontSize="small" />
         </IconButton>
         {entity.dislikesQnty}
      </div>
   );
});
