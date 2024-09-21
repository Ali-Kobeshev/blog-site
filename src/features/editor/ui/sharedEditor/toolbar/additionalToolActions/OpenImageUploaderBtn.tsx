import React, { useContext, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Modal } from "../../../../../../shared/ui/modal/Modal";
import { ImageUpload } from "../../../../../imageUpload";
import { Button } from "@mui/material";
import { EditorContext } from "../../EditorCore/EditorCore";
import { EditorState, AtomicBlockUtils } from "draft-js";
import { BlockTypes } from "../../../../../../shared/types";
import { IsActive } from "../utils/IsActive";
import cl from "./OpenImageUploaderBtn.module.scss";
import CloseIcon from "@mui/icons-material/Close";

export const OpenImageUploaderBtn = () => {
   const [imgUrl, setImgUrl] = useState("");
   const [modalIsVisible, setModalIsVisible] = useState(false);
   const { editorState, setEditorState } = useContext(EditorContext);
   const addImg = () => {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity(
         "image",
         "IMMUTABLE",
         { src: imgUrl }
      );
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(editorState, {
         currentContent: contentStateWithEntity,
      });

      setEditorState(
         AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
      );
      setImgUrl("");
      setModalIsVisible(false);
   };

   return (
      <div>
         <button
            onClick={() => setModalIsVisible((prev) => !prev)}
            style={{
               color: IsActive(BlockTypes.Atomic, "block", editorState)
                  ? "#4cb7eb"
                  : "#777",
            }}
         >
            <AddPhotoAlternateIcon />
         </button>
         <div>
            {modalIsVisible && (
               <Modal onClick={() => setModalIsVisible(false)}>
                  <div
                     onClick={(e) => e.stopPropagation()}
                     className={cl.modalContentWrapper}
                  >
                     <div style={{width: "100%"}}>
                        <button
                           onClick={() => {
                              setImgUrl("");
                              setModalIsVisible(false);
                           }}
                           style={{ marginLeft: "auto" }}
                        >
                           <CloseIcon />
                        </button>
                     </div>
                     {imgUrl ? (
                        <div>
                           <img src={imgUrl} alt="img" className={cl.img} />
                           <Button onClick={addImg}>Add image</Button>
                        </div>
                     ) : (
                        <ImageUpload setImage={setImgUrl} />
                     )}
                  </div>
               </Modal>
            )}
         </div>
      </div>
   );
};
