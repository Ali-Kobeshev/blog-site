import cl from "../Footer.module.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Menu = () => {
   return (
      <div className={cl.footerMenu}>
         <div className={cl.container}>
            <a
               className={cl.link}
               target="_blank"
               href="https://t.me/just_a_person_from_earth"
            >
               <TelegramIcon className={cl.icon} />
            </a>
            <a
               className={cl.link}
               target="_blank"
               href="https://github.com/Ali-Kobeshev"
            >
               <GitHubIcon className={cl.icon} />
            </a>
         </div>
      </div>
   );
};
