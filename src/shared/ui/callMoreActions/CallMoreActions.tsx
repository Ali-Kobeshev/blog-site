import { IconButton } from "@mui/material";
import {
   useState,
   FC,
   useEffect,
   useRef,
   Suspense,
   ReactNode,
   createContext,
} from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface ShowMoreActionsContextType {
   showMoreActions: boolean;
   setShowMoreActions: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowMoreActionsContext = createContext<
   ShowMoreActionsContextType | undefined
>(undefined);

export const CallMoreActions: FC<{ ActionList: ReactNode }> = ({
   ActionList,
}) => {
   const [showMoreActions, setShowMoreActions] = useState(false);
   const callActionsBtnRef = useRef<HTMLButtonElement>(null);

   const deleteActionList = (e: MouseEvent) => {
      const current = callActionsBtnRef.current;
      if (current && !current.contains(e.target as HTMLButtonElement)) {
         setShowMoreActions(false);
      }
   };

   useEffect(() => {
      window.addEventListener("click", deleteActionList);
      return () => {
         window.removeEventListener("click", deleteActionList);
      };
   }, []);

   return (
      <ShowMoreActionsContext.Provider
         value={{ showMoreActions, setShowMoreActions }}
      >
         {/* so child components don't self-delete */}
         <div>
            <IconButton
               ref={callActionsBtnRef}
               style={{ color: "aqua" }}
               onClick={() => setShowMoreActions((prev) => !prev)}
            >
               <MoreHorizIcon />
            </IconButton>
            {showMoreActions && (
               <Suspense fallback={<div>Loading...</div>}>
                  {ActionList}
               </Suspense>
            )}
         </div>
      </ShowMoreActionsContext.Provider>
   );
};
