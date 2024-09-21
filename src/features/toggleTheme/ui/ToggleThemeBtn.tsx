import { IconButton } from "@mui/material";
import { useTheme } from "../useTheme";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export const ToggleThemeBtn = () => {
   const { theme, setTheme } = useTheme();
   const nextTheme = theme === "dark" ? "light" : "dark";

   return (
      <IconButton onClick={() => setTheme(nextTheme)}>
         <Brightness4Icon style={{ fill: "gray" }} />
      </IconButton>
   );
};
