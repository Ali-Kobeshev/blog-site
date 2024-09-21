import { IBlock } from "../../../shared/types";

export const IsContentEmpty = (blocks: IBlock[]) => {
   if (blocks.length === 1 && !blocks[0].text) {
      return true;
   }
   for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].text) {
         return false;
      }
   }
   return true;
};
