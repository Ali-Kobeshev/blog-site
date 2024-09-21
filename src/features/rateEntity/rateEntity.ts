import { ICommentType, IProfile, IPostType, IReply } from "../../shared/types";
import { SetStateAction, Dispatch } from "react";

type RateType = "like" | "dislike";
type Entity = IPostType | ICommentType | IReply;
type SetEntity = Dispatch<SetStateAction<Entity[] | Entity>>;
type SetEntitiesFunction = (prev: Entity | Entity[]) => Entity | Entity[];

export const Rater = (
   rateType: RateType,
   ratingStatus: string,
   setIsRated: Dispatch<SetStateAction<string>>,
   entity: Entity,
   setEntities: SetEntity,
   profile: IProfile
) => {
   if (!profile.id) {
      return;
   }

   const isLike = rateType === "like";
   const rateField = isLike ? "likesQnty" : "dislikesQnty";
   const oppositeType = isLike ? "dislike" : "like";
   const oppositeField = isLike ? "dislikesQnty" : "likesQnty";

   function ApplyRateConditions(ent: Entity) {
      if (entity.id === ent.id) {
         const currentRating = ent.ratedBy[profile.id];

         if (rateType === currentRating && ratingStatus !== "notRated") {
            //*remove existing rating
            setIsRated("notRated");
            const updatedComm = {
               ...ent,
               [rateField]: ent[rateField] - 1,
            };
            delete updatedComm.ratedBy[profile.id];
            return updatedComm;
         }

         //set new rating
         setIsRated(rateType);

         if (oppositeType === currentRating) {
            //*handle case where user changes rating from opposite
            return {
               ...ent,
               [oppositeField]: ent[oppositeField] - 1,
               [rateField]: ent[rateField] + 1,
               ratedBy: {
                  ...ent.ratedBy,
                  [profile.id]: rateType,
               },
            };
         }

         //*handle new or unchanged rating
         return {
            ...ent,
            [rateField]: ent[rateField] + 1,
            ratedBy: {
               ...ent.ratedBy,
               [profile.id]: rateType,
            },
         };
      }
      return ent;
   }

   const updateEntities: SetEntitiesFunction = (prev) => {
      if (Array.isArray(prev)) {
         return prev.map((ent: Entity) => ApplyRateConditions(ent));
      } else {
         return ApplyRateConditions(prev);
      }
   };

   setEntities(updateEntities as SetEntitiesFunction);
};
