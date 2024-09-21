import { FEEDS_NAV_MENU } from "../../entities/constants/index";
import cl from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { ToggleThemeBtn } from "../../features/toggleTheme/index";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const FeedsNavbar = () => {
   return (
      <nav className={cl.navbar}>
         <div className={cl.container}>
            <div className={cl.feedList}>
               {FEEDS_NAV_MENU.map((item) => (
                  <span className={cl.feed} key={item.title}>
                     <Link className={cl.link} to={item.link}>
                        {item.title}
                     </Link>
                  </span>
               ))}
            </div>
            <div className={cl.actionsList}>
               <Link className={cl.link} to="/write new post">
                  <EditIcon />
               </Link>
               <ToggleThemeBtn />
               <Link className={cl.link} to="/profile room">
                  <AccountCircleIcon />
               </Link>
            </div>
         </div>
      </nav>
   );
};
