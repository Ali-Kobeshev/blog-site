import React from "react";
import cl from "./OverlayMenu.module.scss";

interface OverlayMenuProps extends React.HTMLProps<HTMLDivElement> {}

export const OverlayMenu: React.FC<OverlayMenuProps> = (props) => {
   return (
      <div className={cl.list} {...props}>
         {props.children}
      </div>
   );
};
