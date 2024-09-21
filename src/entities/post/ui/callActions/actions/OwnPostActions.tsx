import { FC, useState, useContext } from "react";
import { Button } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { OverlayMenu } from "../../../../../shared/ui/overlay menu/OverlayMenu";
import {
   removePublication,
   updatePublication,
} from "../../../../../app/reduxSlices/ownPublicationsSlice";
import {
   useAppDispatch,
   useAppSelector,
} from "../../../../../shared/hooks/hook";
import { Modal } from "../../../../../shared/ui/modal/Modal";
import { PostEditor } from "../../../../../features/editor";
import cl from "./actions.module.scss";
import { IPostType, IRawContent } from "../../../../../shared/types";
import { ShowMoreActionsContext } from "../../../../../shared/ui/callMoreActions/CallMoreActions";

export const OwnPostActions: FC<{ post: IPostType }> = ({ post }) => {
   const [openModal, setOpenModal] = useState(false);
   const profile = useAppSelector((state) => state.profile.profile);
   const context = useContext(ShowMoreActionsContext);

   if (!context) {
      throw new Error("Use within a ShowMoreActionsContext.Provider");
   }

   const { showMoreActions, setShowMoreActions } = context;

   const dispatch = useAppDispatch();

   const updatePost = (editedContent: IRawContent) => {
      const newPost = {
         ...post,
         content: editedContent,
      };
      dispatch(updatePublication(newPost));
      setShowMoreActions(false);
   };

   const deleteHandler = () => {
      dispatch(removePublication(post));
   };

   return (
      <div>
         <OverlayMenu>
            <Button
               onClick={(e) => {
                  e.stopPropagation();
                  setOpenModal(true);
               }}
               startIcon={<ModeEditIcon />}
               size={"small"}
            >
               Edit
            </Button>
            <Button
               onClick={deleteHandler}
               startIcon={<DeleteIcon />}
               size={"small"}
            >
               Delete
            </Button>
         </OverlayMenu>
         {openModal && (
            <Modal
               onClick={() => {
                  setOpenModal(false);
               }}
            >
               <div
                  onClick={(e) => e.stopPropagation()}
                  className={cl.innerModuleElementsBackground}
               >
                  <PostEditor
                     upsertAction={updatePost}
                     initialRawContent={post.content}
                  />
               </div>
            </Modal>
         )}
      </div>
   );
};
