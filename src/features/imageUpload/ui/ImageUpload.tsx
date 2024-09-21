import { FC, DragEvent, Dispatch, SetStateAction } from "react";
import cl from "./ImageUpload.module.scss";

interface Props {
   image?: string;
   setImage: (image: string) => void;
}

export const ImageUpload: FC<Props> = ({ image, setImage }) => {
   const handleFileChange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setImage(reader.result as any);
         };

         reader.readAsDataURL(file);
      }
   };

   const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setImage(reader.result as any);
         };

         reader.readAsDataURL(file);
      }
   };

   const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
   };

   return (
      <div
         onDrop={handleDrop}
         onDragOver={handleDragOver}
         className={cl.wrapper}
      >
         <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id={`input-id-${Date.now()}`}
         />
         <label htmlFor={`input-id-${Date.now()}`} className={cl.label}>
            Add picture
         </label>
      </div>
   );
};
