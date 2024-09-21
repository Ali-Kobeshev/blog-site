import { FC, HTMLProps, ReactNode } from "react";
import cl from "./Modal.module.scss";

interface Props extends HTMLProps<HTMLDivElement> {
   children?: ReactNode;
}

export const Modal: FC<Props> = ({ children, ...props }) => {
   //!it is necessary to add onClick={(e) => e.stopPropagation()}
   //!to content wrapper (children) to make Modal closure opening controller work correctly
   //!otherwise will be closed when you click on the content

   return (
      <div className={cl.modal} {...props}>
         {children}
      </div>
   );
};
