import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CodeIcon from "@mui/icons-material/Code";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ReactNode } from "react";
import { BlockTypes } from "../../../../../shared/types";
import { OpenImageUploaderBtn } from "./additionalToolActions/OpenImageUploaderBtn";

export interface ITool {
   label: string;
   style: string;
   icon?: ReactNode;
   method: string;
   hasAdditionalActions?: boolean;
}

export const BaseTools: ITool[] = [
   //inline
   {
      label: "bold",
      style: "BOLD",
      icon: <FormatBoldIcon />,
      method: "inline",
   },
   {
      label: "italic",
      style: "ITALIC",
      icon: <FormatItalicIcon />,
      method: "inline",
   },
   {
      label: "underline",
      style: "UNDERLINE",
      icon: <FormatUnderlinedIcon />,
      method: "inline",
   },
   {
      label: "strike-through",
      style: "STRIKETHROUGH",
      icon: <StrikethroughSIcon />,
      method: "inline",
   },
   {
      label: "Superscript",
      style: "SUPERSCRIPT",
      icon: <SuperscriptIcon />,
      method: "inline",
   },
   {
      label: "Subscript",
      style: "SUBSCRIPT",
      icon: <SubscriptIcon />,
      method: "inline",
   },
   //blocks
   {
      label: "Code Block",
      style: BlockTypes.CodeBlock,
      icon: <CodeIcon />,
      method: "block",
   },
   {
      label: "Blockquote",
      style: BlockTypes.BlockQuote,
      icon: <FormatQuoteIcon />,
      method: "block",
   },
   {
      label: "Unordered-List",
      style: BlockTypes.UnorderedListItem,
      icon: <FormatListBulletedIcon />,
      method: "block",
   },
   {
      label: "Ordered-List",
      style: BlockTypes.OrderedListItem,
      icon: <FormatListNumberedIcon />,
      method: "block",
   },
   {
      label: "IMG",
      style: BlockTypes.Atomic,
      icon: <OpenImageUploaderBtn />,
      method: "block",
      hasAdditionalActions: true,
   },
];
