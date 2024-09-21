import cl from "./Actions.module.scss";
import { Button } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC, Dispatch, SetStateAction, useState, useContext } from "react";
import { ICommentType, IRawContent, IReply } from "../../../../../shared/types";
import { CommentEditor } from "../../../../../features/editor";
import { Modal } from "../../../../../shared/ui/modal/Modal";
import { ShowMoreActionsContext } from "../../../../../shared/ui/callMoreActions/CallMoreActions";
import { OverlayMenu } from "../../../../../shared/ui/overlay menu/OverlayMenu";

type Entity = IReply | ICommentType;

interface Props {
   comment: Entity;
   setComments: Dispatch<SetStateAction<Entity[]>>;
}

export const OwnCommentsActions: FC<Props> = ({ comment, setComments }) => {
   const [openModal, setOpenModal] = useState(false);
   const context = useContext(ShowMoreActionsContext);

   if (!context) {
      throw new Error("Use within a ShowMoreActionsContext.Provider");
   }

   const { showMoreActions, setShowMoreActions } = context;

   const deleteComment = () => {
      setComments((prev: Entity[]) => {
         return prev.filter((com: Entity) => com.id !== comment.id);
      });
   };

   const updateComment = (editedContent: IRawContent) => {
      setComments((prev: Entity[]) => {
         return prev.map((comm: Entity) => {
            if (comm.id === comment.id) {
               return { ...comment, content: editedContent };
            }
            return comm;
         });
      });
      setShowMoreActions(false);
      setOpenModal(false);
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
               size="small"
            >
               Edit
            </Button>
            <Button
               onClick={() => deleteComment()}
               startIcon={<DeleteIcon />}
               size="small"
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
                  <CommentEditor
                     upsertAction={updateComment}
                     initialRawContent={comment.content}
                  />
               </div>
            </Modal>
         )}
      </div>
   );
};
