import { useState } from "react";
import { PostEditor } from "../../features/editor";
import { addPublication } from "../../app/reduxSlices/ownPublicationsSlice";
import { InitialContent } from "./constants/initialContent";
import { CustomAlert } from "../../shared/ui/custAlert/CustomAlert";
import { CreatePost } from "../../shared/utils";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hook";
import { ImageUpload } from "../../features/imageUpload";
import { IRawContent } from "../../shared/types";
import CloseIcon from "@mui/icons-material/Close";
import cl from "./WritePost.module.scss";

export const WritePost = () => {
   const profile = useAppSelector((state) => state.profile.profile);
   const [custAlertIsVisible, setCustAlertIsVisible] = useState(false);
   const [preview, setPreview] = useState("");

   const dispatch = useAppDispatch();

   const createPublication = (editedText: IRawContent) => {
      dispatch(addPublication(CreatePost(editedText, profile, preview)));
      setCustAlertIsVisible(true);
      setPreview("");
   };

   return (
      <div>
         {custAlertIsVisible && (
            <CustomAlert color="green" setVisible={setCustAlertIsVisible}>
               Publication was added into profile!
            </CustomAlert>
         )}
         <p className={cl.boldBigText}>Add preview</p>
         {preview ? (
            <div>
               <button
                  style={{ display: "block" }}
                  onClick={() => setPreview("")}
               >
                  <CloseIcon />
               </button>
               <img
                  className={cl.imgUploadWrapper}
                  src={preview}
                  alt="preview"
               />
            </div>
         ) : (
            <div style={{ height: "100px", marginBottom: "10px" }}>
               <ImageUpload setImage={setPreview} />
            </div>
         )}

         <PostEditor
            initialRawContent={InitialContent}
            upsertAction={createPublication}
         />
      </div>
   );
};
