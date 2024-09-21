import { FC } from "react";
import { SearchEntityInMap } from "./utils/searchEntityAtMap";

export const ImageBlock: FC<any> = ({ entityMap, block }) => {
   const imgUrl = SearchEntityInMap(entityMap, block);

   return (
      <div
         style={{
            width: "100%",
            maxHeight: "400px",
            display: "flex",
            justifyContent: "center",
         }}
      >
         <img
            src={imgUrl}
            style={{ maxHeight: "400px", marginBottom: "5px" }}
            alt="image"
         />
      </div>
   );
};
