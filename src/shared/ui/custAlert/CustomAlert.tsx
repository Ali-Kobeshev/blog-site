import { FC, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import cl from "./CustomAlert.module.scss";

type Color = "green" | "red";

interface Props {
   color: Color;
   children: ReactNode;
   setVisible: (bool: boolean) => void;
}

export const CustomAlert: FC<Props> = ({ color, children, setVisible }) => {
   const colorVars = {
      green: "#228B22",
      red: "#8B0000",
   };

   return (
      <div className={cl.wrapper}>
         <div style={{ backgroundColor: colorVars[color] }}>
            <div className={cl.content}>
               <button className={cl.close} onClick={() => setVisible(false)}>
                  <CloseIcon />
               </button>
               {children}
            </div>
         </div>
      </div>
   );
};
