import cl from "./Actions.module.scss";
import { Button } from "@mui/material";
import { FC, Dispatch, SetStateAction, useContext } from "react";
import { ICommentType } from "../../../../../shared/types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ShowMoreActionsContext } from "../../../../../shared/ui/callMoreActions/CallMoreActions";

interface Props {
   comment: ICommentType;
   setComments: Dispatch<SetStateAction<ICommentType[]>>;
}

export const ForeignCommentsActions: FC<Props> = ({ setComments, comment }) => {
   const context = useContext(ShowMoreActionsContext);

   if (!context) {
      throw new Error("Use within a ShowMoreActionsContext.Provider");
   }

   const { showMoreActions, setShowMoreActions } = context;

   return (
      <div className={cl.list}>
         <Button
            className={cl.option}
            startIcon={<ContentCopyIcon />}
            size="small"
         >
            Copy reference
         </Button>
      </div>
   );
};
