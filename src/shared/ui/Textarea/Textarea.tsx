import { FC, TextareaHTMLAttributes, forwardRef } from "react";
import cl from "./Textarea.module.scss";
import { TextareaAutosize } from "@mui/material";

type size = "small" | "medium" | "large";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   size: size;
   ref: any;
}

interface SizeVars {
   [key: string]: string;
}

export const Textarea: FC<TextareaProps> = forwardRef(
   ({ size, ...rest }, ref: any) => {
      const sizeVars: SizeVars = {
         small: "15px",
         medium: "20px",
         large: "30px",
      };

      const propsStyles = {
         fontSize: sizeVars[size],
      };

      return (
         <TextareaAutosize
            {...rest}
            ref={ref}
            className={cl.textarea}
            style={propsStyles as object}
         />
      );
   }
);
